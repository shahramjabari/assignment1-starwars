// renderPlanets.js
import fetchPlanets from "./fetchPlanets.js";

const planetImages = {
  Tatooine: "./src/assets/images/tataoonie.jpg",
  Alderaan: "./src/assets/images/alderaan.jpg",
  "Yavin IV": "./src/assets/images/yavin-iv.jpg",
  Hoth: "./src/assets/images/hoth.jpg",
  Dagobah: "./src/assets/images/dagobah.jpg",
  Bespin: "./src/assets/images/bespin.jpg",
};

const renderPlanets = async () => {
  const planetList = await fetchPlanets();
  const planetsContainer = document.querySelector(".cards-container");
  planetsContainer.innerHTML = "";

  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("button-container-top");

  const homePageButton = document.createElement("button");
  homePageButton.classList.add("home-page__button");
  homePageButton.textContent = "Back To Homepage";
  homePageButton.addEventListener("click", () => {
    window.location.href = "./index.html";
  });

  buttonContainer.appendChild(homePageButton);
  planetsContainer.appendChild(buttonContainer);

  if (!planetList || planetList.length === 0) {
    const errorMsg = document.createElement("p");
    errorMsg.classList.add("error-message");
    errorMsg.textContent = "Failed to load planets. Please try again later.";
    planetsContainer.appendChild(errorMsg);
    return;
  }

  planetList.forEach((planet) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const planetImage = document.createElement("img");
    planetImage.classList.add("card__image");
    planetImage.src =
      planetImages[planet.name] || "./src/assets/images/default.jpg";
    card.append(planetImage);

    const info = [
      `Population: ${planet.population}`,
      `Diameter: ${planet.diameter} km`,
      `Rotation Period: ${planet.rotation_period} hours`,
      `Orbital Period: ${planet.orbital_period} days`,
      `Gravity: ${planet.gravity} m/s²`,
      `Terrain: ${planet.terrain}`,
      `Surface Water: ${planet.surface_water}%`,
    ];

    info.forEach((text) => {
      const p = document.createElement("p");
      p.classList.add("card__info");
      p.textContent = text;
      card.append(p);
    });

    planetsContainer.appendChild(card);
  });
};

export default renderPlanets;
