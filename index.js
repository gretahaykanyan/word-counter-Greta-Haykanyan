let button = document.querySelector(".btnt");
let table = document.querySelector(".table");
let input = document.querySelector(".input");
let number_words = document.querySelector("#number_words");
let number_letters = document.querySelector("#number_letters");
let number_sentences = document.querySelector("#number_sentences");
let number_characters = document.querySelector('#number_characters'); 


let colorArr = [
  { backGroundColor: "#D0C1B7", sideBarColor: "#D0C1B7" },
  { backGroundColor: "#C38A3A", sideBarColor: "#C38A3A" },
  { backGroundColor: "#567375", sideBarColor: "#567375" },
  { backGroundColor: "#897A7A", sideBarColor: "#897A7A" },
  { backGroundColor: "#B2D1C6", sideBarColor: "#B2D1C6" },
  { backGroundColor: "#988D8A", sideBarColor: "#988D8A" },
  { backGroundColor: "#51676D", sideBarColor: "#51676D" },
  { backGroundColor: "#C27540", sideBarColor: "#C27540" },
  { backGroundColor: "#B6C5CD", sideBarColor: "#B6C5CD" },
  { backGroundColor: "#D89EAF", sideBarColor: "#D89EAF" },
];

function countWords(word) {
  let count = 0;
  let arr = word.split(" ");
  for (let words of arr) {
    if (words.toUpperCase() !== words.toLowerCase()) {
      count++;
    }
  }
  return count;
}

function countCharacters(characters) {
    let count = 0;
  let arr = characters.split(" ");
  for (let words of arr) {
    for (let characters of words) {
        count++;
    }
  } 
  return count;
}

function countLetters(letters) {
  let count = 0;
  let arr = letters.split(" ");
  for (let words of arr) {
    for (let letters of words) {
      if (letters.toUpperCase() !== letters.toLowerCase()) {
        count++;
      }
    }
   
  } 
  return count;
}

function countSentences(sentences) {
  let count = 0;
  let arr = sentences.split(".").join('?');
  arr = arr.split("?").join('!');
  arr = arr.split("!").join('...');
  arr = arr.split("...");
  let lastElem = sentences.slice(-1);

  for (let i = 0; i < arr.length - 1; i++) {
    if (
      arr[i + 1] ===
      " " + arr[i + 1].charAt(1).toUpperCase() + arr[i + 1].slice(2)
    ) {
      count++;
    }
    if( arr[i].split(" ").join("").length === 0){
      count--;
    }
  }
  if (lastElem === "." || lastElem === "?" || lastElem === "!" || lastElem === "...") {
    count++;
  }

  return count;
}


input.addEventListener("input", () => {
   table.style.display = "block";
  let text = input.value;

  number_words.innerHTML = countWords(text);
  number_letters.innerHTML = countLetters(text);
  number_sentences.innerHTML = countSentences(text);
  number_characters.innerHTML = countCharacters(text);
});


button.addEventListener("click", () => {
  let i = Math.round(Math.random() * 10);
  document.body.style.backgroundColor = colorArr[i].backGroundColor;
  button.style.backgroundColor = colorArr[i].sideBarColor;
})