// renderVehicles.js
import fetchVehicles from "./fetchVehicles.js";

const vehicleImages = {
  "Sand Crawler": "/assets/images/sandCrawler.jpg",
  "T-16 skyhopper": "/assets/images/t16-skyhopper.jpg",
  "X-34 landspeeder": "/assets/images/x-34.jpg",
  "TIE/LN starfighter": "/assets/images/TIE:LN-starfighter.jpg",
  Snowspeeder: "/assets/images/Snowspeeder.jpg",
  "TIE bomber": "/assets/images/Tie-Bomber.jpg",
};

const renderVehicles = async () => {
  const vehicleList = await fetchVehicles();
  const vehiclesContainer = document.querySelector(".cards-container");
  vehiclesContainer.innerHTML = "";

  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("button-container-top");

  const homePageButton = document.createElement("button");
  homePageButton.classList.add("home-page__button");
  homePageButton.textContent = "Back To Homepage";
  homePageButton.addEventListener("click", () => {
    window.location.href = "./index.html";
  });

  buttonContainer.appendChild(homePageButton);
  vehiclesContainer.appendChild(buttonContainer);

  if (!vehicleList || vehicleList.length === 0) {
    const errorMsg = document.createElement("p");
    errorMsg.classList.add("error-message");
    errorMsg.textContent = "Failed to load vehicles. Please try again later.";
    vehiclesContainer.appendChild(errorMsg);
    return;
  }

  vehicleList.forEach((vehicle) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const vehicleImage = document.createElement("img");
    vehicleImage.classList.add("card__image");
    vehicleImage.src =
      vehicleImages[vehicle.name] || "/assets/images/default.jpg";
    card.append(vehicleImage);

    const info = [
      `Model: ${vehicle.model}`,
      `Manufacturer: ${vehicle.manufacturer}`,
      `Cost in Credits: ${vehicle.cost_in_credits}`,
      `Length: ${vehicle.length} m`,
      `Crew: ${vehicle.crew}`,
      `Passengers: ${vehicle.passengers}`,
      `Cargo Capacity: ${vehicle.cargo_capacity}`,
    ];

    info.forEach((text) => {
      const p = document.createElement("p");
      p.classList.add("card__info");
      p.textContent = text;
      card.append(p);
    });

    vehiclesContainer.appendChild(card);
  });
};

export default renderVehicles;
