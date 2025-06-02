// renderCharacter.js
import fetchCharacter from "./fetchCharacters.js";

const characterImages = {
  "Luke Skywalker": "./src/assets/images/lukesky.jpg",
  "C-3PO": "./src/assets/images/c-3po.jpg",
  "R2-D2": "./src/assets/images/r2d2.jpg",
  "Darth Vader": "./src/assets/images/darth-vader.jpg",
  "Leia Organa": "./src/assets/images/leia.jpg",
  "Owen Lars": "./src/assets/images/owen.jpg",
};

const renderCharacter = async () => {
  const characterList = await fetchCharacter();
  const peopleContainer = document.querySelector(".cards-container");
  peopleContainer.innerHTML = "";

  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("button-container-top");

  const homePageButton = document.createElement("button");
  homePageButton.classList.add("home-page__button");
  homePageButton.textContent = "Back To Homepage";
  homePageButton.addEventListener("click", () => {
    window.location.href = "./index.html";
  });

  buttonContainer.appendChild(homePageButton);
  peopleContainer.appendChild(buttonContainer);

  if (!characterList || characterList.length === 0) {
    const errorMessage = document.createElement("p");
    errorMessage.classList.add("error-message");
    errorMessage.textContent =
      "Failed to load characters. Please check your internet connection or try again later.";
    peopleContainer.appendChild(errorMessage);
    return;
  }

  characterList.forEach((character) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const characterImage = document.createElement("img");
    characterImage.classList.add("card__image");
    characterImage.src =
      characterImages[character.name] || "./assets/images/default.jpg";
    card.append(characterImage);

    const title = document.createElement("h3");
    title.classList.add("card__title");
    title.textContent = character.name;
    card.append(title);

    const infoList = [
      `Height: ${character.height} cm`,
      `Mass: ${character.mass} kg`,
      `Hair Color: ${character.hair_color}`,
      `Skin Color: ${character.skin_color}`,
      `Eye Color: ${character.eye_color}`,
      `Birth Year: ${character.birth_year}`,
    ];

    infoList.forEach((text) => {
      const p = document.createElement("p");
      p.classList.add("card__info");
      p.textContent = text;
      card.append(p);
    });

    peopleContainer.appendChild(card);
  });
};

export default renderCharacter;
