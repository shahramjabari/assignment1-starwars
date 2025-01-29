import fetchPlanets from "./fetchPlanets.js";

const renderPlanets = async () => {
  const planetList = await fetchPlanets();

  if (planetList && planetList.length > 0) {
    const planetsContainer = document.querySelector(".cards-container");
    planetsContainer.innerHTML = "";

    planetList.forEach((planet) => {
      const card = document.createElement("div");
      card.classList.add("card");

      const title = document.createElement("h3");
      title.classList.add("card__title");
      title.textContent = planet.name;
      card.append(title);

      const population = document.createElement("p");
      population.classList.add("card__info");
      population.textContent = `Population: ${planet.population}`;
      card.append(population);

      const diameter = document.createElement("p");
      diameter.classList.add("card__info");
      diameter.textContent = `Diameter: ${planet.diameter} km`;
      card.append(diameter);

      const rotationPeriod = document.createElement("p");
      rotationPeriod.classList.add("card__info");
      rotationPeriod.textContent = `Rotation Period: ${planet.rotation_period} hours`;
      card.append(rotationPeriod);

      const orbitalPeriod = document.createElement("p");
      orbitalPeriod.classList.add("card__info");
      orbitalPeriod.textContent = `Orbital Period: ${planet.orbital_period} days`;
      card.append(orbitalPeriod);

      const gravity = document.createElement("p");
      gravity.classList.add("card__info");
      gravity.textContent = `Gravity: ${planet.gravity} m/s²`;
      card.append(gravity);

      const terrain = document.createElement("p");
      terrain.classList.add("card__info");
      terrain.textContent = `Terrain: ${planet.terrain}`;
      card.append(terrain);

      const surfaceWater = document.createElement("p");
      surfaceWater.classList.add("card__info");
      surfaceWater.textContent = `Surface Water: ${planet.surface_water}%`;
      card.append(surfaceWater);

      const backButton = document.createElement("button");
      backButton.classList.add("card__button");
      backButton.textContent = "Back To Homepage";
      backButton.addEventListener("click", () => {
        window.location.href = "./index.html";
      });
      card.append(backButton);

      planetsContainer.append(card);
    });
  }
};
export default renderPlanets;
