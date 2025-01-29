import fetchCharacter from "./fetchCharacters.js";
import renderCharacter from "./renderCharacters.js";

const cardPeople = document.querySelector(".card__people");

cardPeople.addEventListener("click", renderCharacter);
