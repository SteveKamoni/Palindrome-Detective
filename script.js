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
    window.alert("Are you realy a Detective?");
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

function handleScroll() {
  const elements = document.querySelectorAll(".fade-in");
  const fade = document.querySelectorAll(".fade");
  elements.forEach((element) => {
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      element.classList.add("visible");
    }
  });

  fade.forEach((elements) => {
    const check = elements.getBoundingClientRect();
    if (check.top < window.innerHeight) elements.classList.add("visible");
  });
}

window.addEventListener("scroll", handleScroll);

// Trigger the scroll event on load to handle elements already in view
window.addEventListener("load", handleScroll);
