import fetchVehicles from "./fetchVehicles.js";

const renderVehicles = async () => {
  const vehicleList = await fetchVehicles();

  if (vehicleList && vehicleList.length > 0) {
    const vehiclesContainer = document.querySelector(".cards-container");
    vehiclesContainer.innerHTML = "";

    vehicleList.forEach((vehicle) => {
      const card = document.createElement("div");
      card.classList.add("card");

      const title = document.createElement("h3");
      title.classList.add("card__title");
      title.textContent = vehicle.name;
      card.append(title);

      const model = document.createElement("p");
      model.classList.add("card__info");
      model.textContent = `Model: ${vehicle.model}`;
      card.append(model);

      const manufacturer = document.createElement("p");
      manufacturer.classList.add("card__info");
      manufacturer.textContent = `Manufacturer: ${vehicle.manufacturer}`;
      card.append(manufacturer);

      const costInCredits = document.createElement("p");
      costInCredits.classList.add("card__info");
      costInCredits.textContent = `Cost in Credits: ${vehicle.cost_in_credits}`;
      card.append(costInCredits);

      const length = document.createElement("p");
      length.classList.add("card__info");
      length.textContent = `Length: ${vehicle.length} m`;
      card.append(length);

      const crew = document.createElement("p");
      crew.classList.add("card__info");
      crew.textContent = `Crew: ${vehicle.crew}`;
      card.append(crew);

      const passengers = document.createElement("p");
      passengers.classList.add("card__info");
      passengers.textContent = `Passengers: ${vehicle.passengers}`;
      card.append(passengers);

      const cargoCapacity = document.createElement("p");
      cargoCapacity.classList.add("card__info");
      cargoCapacity.textContent = `Cargo Capacity: ${vehicle.cargo_capacity}`;
      card.append(cargoCapacity);

      vehiclesContainer.append(card);
    });
    const homePageButton = document.createElement("button");
    homePageButton.classList.add("home-page__button");
    homePageButton.textContent = "Back To Homepage";
    homePageButton.addEventListener("click", () => {
      window.location.href = "./index.html";
    });

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");
    vehiclesContainer.append(buttonContainer);
    buttonContainer.append(homePageButton);
  }
};

export default renderVehicles;
