const cjk_unihan = require("@silvestre/cjk-unihan");

// Async function to get the total strokes of a character
async function getStrokes(char) {
  return new Promise((resolve, reject) => {
    cjk_unihan.get(char, "kTotalStrokes", function(err, result){
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

async function getJaps(char) {
  return new Promise((resolve) => {
    cjk_unihan.get(char, "kJapanese", function(err, result){
      if (err) {
        resolve(null);
      } else {
        resolve(result);
      }
    });
  });
}

async function getBoard() {
  const url = 'https://wodou.hackmit.org/api/generate?userEmail=YTG2G3_4bda8b54'; // Replace with your actual API endpoint

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return parseInt(data.encodedWord);
  } catch (error) {
    console.error('Error:', error);
    return 0;
  }
}

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

const alpabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

let dp = Array(6).fill(0).map(() => []);

(async () => {
  // while(true) {
  //   // Fetch
  //   let board = await getBoard();
  //   let chars = board.split('');
    let chars = '各伐译兵芬弙缶连同驰夵近阯行仱芌纩吹努伨乩吋闷助纳饩仴妃进阨'.split('');

    let strokes = await Promise.all(chars.map(async c => await getStrokes(c)));
    let bin1 = strokes.map(v => v === '6' ? 0 : 1);

    let japs = await Promise.all(chars.map(async v => await getJaps(v)))
    let bin2 = japs.map(v => v !== null ? 1 : 0)
  
    // separate bin into stacks of 5
    result1 = doTheMath(bin1);
    result2 = doTheMath(bin2)
    console.log(result1, result2);
  // }
} )();

function doTheMath(bin) {
  let stacks = [];
  for (let i = 0; i < bin.length; i += 5) {
    stacks.push(bin.slice(i, i + 5));
  }
  
  // convert each stack to a string of 1s and 0s, and then to a decimal number
  let nums = stacks.map(stack => parseInt(stack.join(''), 2));

  // convert each number to a character
  let result = nums.map(num => alpabet[num]);
  return result;
}