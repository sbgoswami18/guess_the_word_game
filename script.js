let msg = document.querySelector(".msg");
let guess = document.querySelector("input");
let btn = document.querySelector(".btn");

let newWords = "";
let randWords = "";

let play = false;
let arr = [
  "ram",
  "prabhas",
  "akshay",
  "allu",
  "yash",
  "ntr",
  "tiger",
  "shahrukh",
  "ajay",
  "hrithik",
  "ranbir",
  "varun",
  "salman",
  "aamir",
  "arjun",
  "mahesh",
];

let createNewWords = () => {
  let ranNum = Math.floor(Math.random() * arr.length);
  //   console.log(ranNum);
  let newTempWord = arr[ranNum];
  // console.log(newTempWord.split(""));
  return newTempWord;
};

let scrambleWords = (brr) => {
  for (let i = 1; i < brr.length; i++) {
    let temp = brr[i];
    // console.log(temp);
    let j = Math.floor(Math.random() * (brr.length - 1)) + 1; // Returns a random integer from 1 to brr.length
    // console.log(i);
    // console.log(j);
    brr[i] = brr[j];
    brr[j] = temp;
  }

  return brr;
};

btn.addEventListener("click", function () {
  if (!play) {
    play = true;
    btn.innerHTML = "Guess";
    guess.classList.toggle("hidden");
    newWords = createNewWords();
    randWords = scrambleWords(newWords.split("")).join("");
    // console.log(randWords.join(""));
    msg.innerHTML = `Guess the word: "${randWords}"`;
  } else {
    let tempWord = guess.value;
    if (tempWord === newWords) {
      //   console.log("Correct");
      play = false;
      msg.innerHTML = `Awesome It's Correct. It is "${newWords}".`;
      btn.innerHTML = "Start Again";
      guess.classList.toggle("hidden");
      guess.value = "";
    } else {
      //   console.log("Incorrect");
      msg.innerHTML = `Sorry Boss! It's Incorrect. Please Try Again! <hr> "${randWords}"`;
    }
  }
});
