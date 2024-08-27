"use strict";

const input = document.querySelector(".input");
const checkBtn = document.querySelector(".check-btn");
const answer = document.querySelector(".answer");

function checkIfPalindrome(input) {
  const originalInput = input.value;

  const cleanText = originalInput.replace(/[^a-zA-Z]/g, "").toLowerCase();
  const reverseText = cleanText.split("").reverse().join("");

  if (cleanText !== reverseText) {
    answer.innerHTML = `${originalInput} is not a Palindrome.`;
  } else {
    answer.innerHTML = `${originalInput} is a Palindrome.`;
  }
}

checkBtn.addEventListener("click", () => {
  if (input.value === "") {
    window.alert("Kindly insert Text!");
  } else {
    checkIfPalindrome(input);
  }
  input.value = "";
});

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkIfPalindrome(input);
  }
});
