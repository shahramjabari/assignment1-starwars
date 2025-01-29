import fetchCharacter from "./fetchCharacters.js";
import renderCharacter from "./renderCharacters.js";
import fetchPlanets from "./fetchPlanets.js";
import renderPlanets from "./renderPlanets.js";

const cardPeople = document.querySelector(".card__people");
cardPeople.addEventListener("click", renderCharacter);

const cardPlanets = document.querySelector(".card__planets");
cardPlanets.addEventListener("click", renderPlanets);
