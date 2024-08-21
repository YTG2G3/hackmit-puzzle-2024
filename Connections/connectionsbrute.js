let currentBoard = [
  "👴",
  "📲",
  "👬",
  "📳",
  "📽",
  "📾",
  "👒",
  "👀",
  "🐀",
  "📷",
  "👀",
  "💄",
  "🐂",
  "💽",
  "🐀",
  "🐀",
  "🐂",
  "🐋",
  "👉",
  "🐐",
  "🐀",
  "💣",
  "👆",
  "💄",
  "💦",
  "🐃",
  "📓",
  "🐲",
  "🐀",
  "💺",
  "🐟",
  "📼",
  "📘",
  "💿",
  "📉",
  "🐀",
  "👗",
  "👂",
  "👟",
  "👲",
  "💠",
  "📗",
  "📽",
  "🐈",
  "🐤",
  "🐀",
  "👿",
  "🐆",
  "👯",
  "👄",
  "💀",
  "📦",
  "📄",
  "🐿",
  "💿",
  "👤",
  "💶",
  "📴",
  "🐁",
  "👖",
  "🐦",
  "🐀",
  "👯",
  "💿"
];
let currentSelected = [];

const mostEmojis = [
  "👴",
  "📲",
  "👬",
  "📳",
  "📽",
  "📾",
  "👒",
  "👀",
  "🐀",
  "📷",
  "👀",
  "💄",
  "🐂",
  "💽",
  "🐀",
  "🐀",
  "🐂",
  "🐋",
  "👉",
  "🐐",
  "🐀",
  "💣",
  "👆",
  "💄",
  "💦",
  "🐃",
  "📓",
  "🐲",
  "🐀",
  "💺",
  "🐟",
  "📼",
  "📘",
  "💿",
  "📉",
  "🐀",
  "👗",
  "👂",
  "👟",
  "👲",
  "💠",
  "📗",
  "📽",
  "🐈",
  "🐤",
  "🐀",
  "👿",
  "🐆",
  "👯",
  "👄",
  "💀",
  "📦",
  "📄",
  "🐿",
  "💿",
  "👤",
  "💶",
  "📴",
  "🐁",
  "👖",
  "🐦",
  "🐀",
  "👯",
  "💿",
  "🐶",
  "🐮",
  "📡",
  "📤",
  "👁",
  "👰",
  "📸",
  "👝",
  "💾",
  "💚",
  "💋",
  "💆",
  "👽",
  "💴",
  "💬",
  "📐",
  "💉",
  "👣",
  "👦",
  "👺",
  "📕",
  "📀",
  "📝",
  "📰",
  "🐢",
  "📭",
  "💤",
  "👶",
  "📔",
  "📭",
  "💸",
  "📧",
  "🐒",
  "🐄",
  "🐒",
  "📇",
  "👮",
  "💎",
  "🐰",
  "👐",
  "📹",
  "💐",
  "💒",
  "💰",
  "📹",
  "📯",
  "🐊",
  "👑",
  "💑",
  "📈",
  "🐊",
  "👪",
  "💖",
  "💓",
  "📍",
  "📏",
  "🐨",
  "👈",
  "💈",
  "📪",
  "💊",
  "💨",
  "💮",
  "📌",
  "👨",
  "🐠",
  "🐠",
  "💟",
  "🐩",
  "📃",
  "📒",
  "👧",
  "📎",
  "📟",
  "🐫",
  "👵",
  "👠",
  "💂",
  "👷",
  "📟",
  "📖",
  "📟",
  "🐑",
  "📥",
  "👊",
  "🐪",
  "🐑",
  "📑",
  "👞",
  "🐭",
  "👾",
  "💁",
  "📺",
  "📱",
  "🐱",
  "📞",
  "💵",
  "📺",
  "💲",
  "📣",
  "👌",
  "🐬",
  "📅",
  "📂",
  "📋",
  "💻",
  "📻",
  "📢",
  "👢",
  "💳",
  "📩",
  "👭",
  "🐧",
  "👼",
  "📨",
  "📶",
  "📙",
  "💹",
  "👸",
  "📶",
  "💪",
  "👔",
  "🐴",
  "🐹",
  "🐵",
  "🐣",
  "💢",
  "💫",
  "🐡",
  "🐖",
  "🐡",
  "👏",
  "🐛",
  "🐗",
  "📊",
  "📠",
  "💇",
  "💛",
  "🐾",
  "👙",
  "👕",
  "👡",
  "💔",
  "💼",
  "👻",
  "📬",
  "👫",
  "💌",
  "👍",
  "📵",
  "📮",
  "👳",
  "📮",
  "🐅",
  "🐅",
  "👩",
  "👅",
  "💗",
  "👚",
  "💅",
  "💥",
  "💝",
  "👜",
  "📫",
  "👃",
  "💃",
  "📫",
  "🐌",
  "💍",
  "🐉",
  "👎",
  "🐔",
  "💏",
  "💡",
  "📛",
  "💭",
  "📛",
  "🐎",
  "🐯",
  "👇",
  "🐏",
  "🐷",
  "💘",
  "🐝",
  "💯",
  "📆",
  "💱",
  "🐘",
  "🐽",
  "🐙",
  "💙",
  "📁",
  "🐞",
  "👹",
  "💞",
  "🐚",
  "🐜",
  "💩",
  "🐼",
  "💷",
  "📜",
  "💷",
  "👋",
  "👓",
  "👥",
  "🐍",
  "🐺",
  "💕",
  "🐻",
  "👛",
  "🐓",
  "👱",
  "🐸",
  "👘",
  "🐇",
  "📚",
  "💧",
  "💜",
  "🐕",
  "🐳",
  "🐥"
];

let conn = [];
let moves = [];
let solved = 0;
let lastShuffled = 64;

async function selectCell(cell) {
  const resp = await fetch('https://connections.hackmit.org/select', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ guess: cell })
  });

  const data = await resp.json();

  currentBoard = data.board;
  currentSelected = data.selected;

  // Save the current emojis
  conn = [...conn, ...currentBoard.filter(v => !conn.includes(v))];
  moves.push(cell);
}

async function guess() {
  const resp = await fetch('https://connections.hackmit.org/guess', {
    method: 'POST'
  });

  console.log('Guessing: ', currentSelected);
  const data = await resp.json();

  if(data.error === 'Cannot guess now!') return true;

  lastShuffled = 64;
  await refreshBoard();
  
  if(data.solved.length > solved) {
    solved = data.solved.length;
    console.log('Solved: ', solved);
    console.log('Solved stage with emoji: ', target, moves);
    console.log("Saved emojis: ", conn);
    return true;
  }
  return false;
}

async function shuffleTillFind()  {
  // console.log("Shuffling... Last shuffled:", lastShuffled);
  if(lastShuffled === 64) lastShuffled = solved * 8;
  for(let i = solved * 8 ; i < 64 ; i++) {
    if(currentSelected.includes(i)) {
      continue;
    }

    let currentlyAvailable = currentBoard.filter((x, i) => !currentSelected.includes(i) && x === target);
    
    if(currentlyAvailable.length > 0) {
      console.log("Shuffled. Count: ", i - solved * 8); ;
      lastShuffled = i - 1;
      return;
    };

    await selectCell(i);
    await selectCell(i);
  }
  lastShuffled = 64;
}

async function randomShuffleTillFind() {
  console.log("Random shuffling...");
  let shuffleable = new Array(64 - solved * 8).fill(0).map((v, i) => i + solved * 8).filter(v => !currentSelected.includes(v));
  while(shuffleable.length > 0) {
    let i = shuffleable[Math.floor(Math.random() * shuffleable.length)];
    await selectCell(i);
    await selectCell(i);
    shuffleable = shuffleable.filter(v => v !== i);

    // Check if the target is found
    let currentlyAvailable = currentBoard.filter((x, i) => !currentSelected.includes(i) && x === target);
    if(currentlyAvailable.length > 0) {
      console.log("Shuffled. Count: ", 64 - solved * 8 - shuffleable.length); ;
      break;
    };
  }
}

async function refreshBoard() {
  await selectCell(63);
  await selectCell(63);
}


const startOffs = [
  [8, 35, 28, 20, 61, 14, 15, 45],
  [33, 54, 63, 56, 14, 56, 44, 44, 59, 59, 9, 60, 60, 15, 15, 42, 61, 21, 21, 13, 13, 12, 12, 10, 10, 15, 15, 47, 47, 46],
  [63, 45, 56, 50, 56, 63, 45, 56, 50, 56, 42, 42, 60, 60, 23, 23, 62, 62, 47, 47, 39, 39, 31, 31, 56, 56, 58, 34, 34, 23, 23, 55, 55, 62, 62, 56, 56, 54, 16, 28, 28, 61, 61, 56, 56, 43, 48, 48, 40, 40, 50, 57, 57, 21, 21, 19, 19, 18, 18, 17, 17, 24, 24, 19, 19, 24, 24, 32, 32, 45, 63, 31, 31, 56, 56, 57, 57, 18, 18, 19, 19, 22, 22, 23, 23, 53, 53, 32, 32, 25, 25, 18, 18, 57, 57, 56, 56, 19],
  [46, 44, 44, 36, 36, 35, 35, 37, 37, 33, 33, 52, 26, 26, 28, 28, 30, 30, 32, 32, 26, 26, 60, 56, 56, 62, 62, 31, 31, 24, 24, 33, 33, 26, 26, 35, 35, 28, 28, 53, 53, 54, 54, 62, 62, 61, 61, 63, 63, 55, 55, 39, 39, 47, 47, 31, 31, 56, 56, 55, 24, 24, 28, 28, 30, 30, 59, 59, 50, 50, 24, 24, 56, 56, 58, 58, 39, 39, 31, 31, 30, 30, 27, 27, 26, 26, 41, 41, 39, 39, 63, 42, 42, 59, 59, 57, 57, 33, 33, 30, 30, 31, 31, 39, 39, 62, 62, 57, 57, 56, 56, 58, 58, 43, 43, 53, 53, 24, 24, 25, 25, 42, 42, 58, 45, 45, 37, 37, 30, 30, 29, 29, 27, 27, 28, 28, 26, 26, 33, 33, 25, 25, 24, 24, 27, 57, 57, 42, 42, 38, 38, 30, 30, 31, 31, 47, 47, 33, 33, 34, 34, 24, 24, 26, 26, 54],
  [52, 52, 58, 58, 35, 35, 40, 40, 58, 58, 59, 59, 60, 60, 55, 33, 33, 56, 56, 58, 58, 60, 60, 36, 39, 39, 37, 37, 61, 61, 62, 62, 63, 63, 57, 57, 44, 44, 43, 43, 34, 34, 56, 56, 41, 41, 49, 49, 48, 48, 48, 60, 48, 61, 61, 38, 38, 57, 42, 42, 34, 34, 59, 59, 48, 48, 56, 56, 45, 45, 37, 37, 38, 38, 39, 39, 62, 62, 58, 39, 39, 34, 34, 48, 48, 50, 50, 41, 41, 56],
];
const answers = [
  // '🐀',
  // '👿', // 200
  // '🐁',
  // '🐇',

  // '🐟',
  // '🐿',
  '🐃',
  '🐏',
]
const blacklist = [
  '👿','🐁','🐿','🐀','🐃','🐟','🐇',
  '👟','💇','👊','📝','🐈','💗','📺','🐘','🐱','🐰','📥','💀','👀','🐩','👁','💥','📀','📹','🐄','💶','📐','👝','📮','👉','📷','🐓','📻','📦','👄','👐','💿','📧','📾','🐂','👣','📇','📔','🐢','👭','👶','👔','👲','💠','📛','👫','💩','📽','📵','👆','👽','📟','🐼','🐆','💚','💐','📈','💰','🐒','📄','💒','💾','🐠','💬','💉','🐊','📲','🐔','🐐','📯','🐬','🐑','👅','💎','💳','💈',
  '👛','👤','📏','💟','💁','💏','👱','📃','📭','🐌','🐴','💷','🐧','💆','👞','💄','📓','👇', '🐤','📠','🐵','👠','📶','💘','👾','📣','👷','💪','🐅','💭','📼','📞','🐽','💱',
  '🐶','💧','👯','📬','💃','📜','💊','🐷','🐮','📪','💜','💂','💍','📫','🐉','🐛','💺','🐡','💌','📍','💫','📂','📋','👃','🐍','💅','💛','💤','💓','🐜','👂','📩','📳','👖','👑',
  '👗','🐦','🐋','📚','📉','💻','🐲','👩','👴','👻','💦','👬','👒','👍','🐪','💽','🐕','📘','📗','🐖','👏','👪','👢','📴','💴','🐎','💕','💞','💵','💯','📱','🐨','📤','📢','💮',
  '👮','📁','💋','🐸','💲','🐗','📅','👸','👜','💣','👓','👚','👼','💔','🐣','📨','🐳','👺','🐭','🐚','👘','💹','💡','💖','💨','👕','👰','👨','📰','💑','📎','📒','👦','🐝',
  '📖','👋','📆','👵','🐺','👙','👹','📊','🐾','💸','👳','🐙','👌','👡','📙','👈','🐯','📑','🐻','💼','🐞','👥','🐹','👧',

  // '👎','📡','🐥','🐏','📕','📌','💢','💝','📸','💙','🐫'
]

let target = '👿';

async function startOff() {
  console.log('Will use ' + startOffs.reduce((v, x) => v + x.length, 0) + ' moves');
  for(let s of startOffs){
    for(let o of s) {
      await selectCell(o);
    }
    await guess();
  }
}

async function reset() {
  const restartButton = Array.from(document.querySelectorAll('button')).find(button => button.textContent === 'Restart');
    restartButton.click();
}

async function main() {
  let mistakes = 0;
  await startOff();

  console.log("Left with ", mostEmojis.filter(v => !blacklist.includes(v)).length, " emojis to guess");

  while(true) {
    if(answers.length === 0) {
      console.log("All answers solved");
      break;
    }

    if(mistakes === 4) {
      console.log('Failed trial');
      console.log("Saved emojis: ", conn);
      break;
    }

    // Choose target
    target = null;
    if(answers.length > 0) {
      target = answers.shift();
    }
    else {
      do {
        // target = currentBoard[Math.floor(Math.random() * (64 - solved * 8)) + solved * 8]
        target = mostEmojis.filter(v => !blacklist.includes(v))[Math.floor(Math.random() * mostEmojis.filter(v => !blacklist.includes(v)).length)];
      } while (blacklist.includes(target));
    }
    console.log("Choosing from the following: ", currentBoard.slice(solved * 8, 64).filter(v => !blacklist.includes(v)));
    console.log("Target: ", target);

    for(let i = 0 ; i < 8 ; i++ ) {
      let f = null;
      let t = false;
      
      do {
        let currentlyAvailable = currentBoard.map((x, i) => ({ x, i })).filter((v) => !currentSelected.includes(v.i) && v.x === target)
        if(currentlyAvailable.length === 0) {
          if(t) await randomShuffleTillFind();
          else  await shuffleTillFind();
          // t = true;
        }
        else {
          f = currentlyAvailable[0].i;
        }
      } while (f === null);

      await selectCell(f);
    }

    // Check if the guesses were correct
    const x = await guess();
    if(!x) {
      mistakes++;
      blacklist.push(target);
      console.log("Failed: ", target);
    }
    else {
      console.log('Correct guesses');
    }
  }
}

main();