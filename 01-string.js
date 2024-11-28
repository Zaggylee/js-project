// function that reverses string
function reverseString(string) {
  return string.split("").reverse().join("");
}
console.log(reverseString("chiamaka"));
// this returns akamaihc

//function.counts the number of characters in a string

function charCounter(str) {
  return str.length;
}
console.log(charCounter("chiamaka"));
//this returns 8

//function that capitalize the first letter of every word in a sentence
function capitalizeFirstLetter(sentence) {
  return sentence
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}
console.log(capitalizeFirstLetter("my name is chiamaka"));
