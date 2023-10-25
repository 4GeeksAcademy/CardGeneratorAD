/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  generateNewCard(); // Generate a new card on page load

  const cardButton = document.getElementById("cardbutton"); // Get the "Generate Card" button
  const applyDimensionsButton = document.getElementById("applyDimensions"); // Get the "Change Card Dimensions" button
  const widthInput = document.getElementById("widthInput");
  const heightInput = document.getElementById("heightInput");

  // Add a click event listener to the "Generate Card" button
  cardButton.addEventListener("click", () => {
    generateNewCard(); // Generate a new card when the button is clicked
  });

  // Add a click event listener to the "Change Card Dimensions" button
  applyDimensionsButton.addEventListener("click", () => {
    const newWidth = widthInput.value;
    const newHeight = heightInput.value;
    updateCardDimensions(newWidth, newHeight); // Apply the specified dimensions to the card
  });

  // Set an interval to generate a new card every 8 seconds
  setInterval(() => {
    generateNewCard();
  }, 8000); // 8000 milliseconds (8 seconds)
};

const generateNewCard = () => {
  const suit = generateRandomSuit();
  const card = document.querySelector(".card");
  const topSuit = document.querySelector(".top-suit");
  const bottomSuit = document.querySelector(".bottom-suit");

  card.className = "card"; // Reset the card class
  card.classList.add(suit);
  topSuit.innerHTML = getSuitSymbol(suit);
  bottomSuit.innerHTML = getSuitSymbol(suit);
  document.querySelector(".number").innerHTML = generateRandomNumber();
};

const updateCardDimensions = (width, height) => {
  const card = document.querySelector(".card");
  card.style.width = width + "px"; // Set the width
  card.style.height = height + "px"; // Set the height
};

const generateRandomNumber = () => {
  const numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  const indexNumbers = Math.floor(Math.random() * numbers.length);
  return numbers[indexNumbers];
};

const generateRandomSuit = () => {
  const suit = ["diams", "spades", "hearts", "clubs"];
  const indexSuit = Math.floor(Math.random() * suit.length);
  return suit[indexSuit];
};

const getSuitSymbol = suit => {
  switch (suit) {
    case "spades":
      return "\u2660";
    case "clubs":
      return "\u2663";
    case "hearts":
      return "\u2665";
    case "diams":
      return "\u2666";
    default:
      return "";
  }
};
