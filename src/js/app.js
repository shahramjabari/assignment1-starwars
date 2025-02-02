import fetchCharacter from "./fetchCharacters.js";
import renderCharacter from "./renderCharacters.js";

import fetchPlanets from "./fetchPlanets.js";
import renderPlanets from "./renderPlanets.js";

import fetchVehicles from "./fetchVehicles.js";
import renderVehicles from "./renderVehicles.js";

import fetchMovies from "./fetchMovies.js";
import renderMovies from "./renderMovies.js";

const cardPeople = document.querySelector(".card__people");
cardPeople.addEventListener("click", renderCharacter);

const cardPlanets = document.querySelector(".card__planets");
cardPlanets.addEventListener("click", renderPlanets);

const cardVehicles = document.querySelector(".card__vehicles");
cardVehicles.addEventListener("click", renderVehicles);

const cardMovies = document.querySelector(".card__movies");
cardMovies.addEventListener("click", renderMovies);
