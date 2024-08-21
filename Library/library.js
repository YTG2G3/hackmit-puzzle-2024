async function getQuestion() {
  const url = 'https://library.hackmit.org/api/puzzle/get'; // Replace with your actual API endpoint

  const payload = {
    uname: "YTG2G3_4bda8b54"
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    return 0;
  }
}

async function verify(best, worst) {
  const url = 'https://library.hackmit.org/api/puzzle/verify'; // Replace with your actual API endpoint

  const payload = {
    best: best + "", worst: worst + "",
    uname: "YTG2G3_4bda8b54"
  }

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    return 0;
  }
}

(async () => {
  let bestyVisited = new Array(50).fill(false);
  let worstyVisited = new Array(50).fill(false);
  let besty = null, worsty = null;

  // Function that generates a random number where the number is not visited
  function generateRandomNumber(isBesty ) {
    let num = Math.floor(Math.random() * 50);
    while((isBesty ? bestyVisited[num] : worstyVisited[num])) {
      num = Math.floor(Math.random() * 50);
    }
    return num;
  }

  while(true) {
    let b = generateRandomNumber(true);
    let w = generateRandomNumber(false);
    
    // Send b if besty is null, else send besty
    // Send w if worsty is null, else send worsty
    let resp = await verify(besty === null ? b : besty, worsty === null ? w : worsty);

    if(resp.flag !== "incorrect") {
      console.log(resp);
      break;
    }

    if(resp.guesses_left === 0) {
      besty = null;
      worsty = null;
      bestyVisited = new Array(50).fill(false);
      worstyVisited = new Array(50).fill(false);
      await getQuestion();
    }
    else {
      bestyVisited[b] = true;
      worstyVisited[w] = true;
    }
    
    if(resp.verdict.best === 'correct') {
      besty = b;
    }

    if(resp.verdict.worst === 'correct') {
      worsty = w;
    }

    console.log(resp);
  }
})()