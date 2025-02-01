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

  if (characterList && characterList.length > 0) {
    const peopleContainer = document.querySelector(".cards-container");
    peopleContainer.innerHTML = "";

    characterList.forEach((character) => {
      const card = document.createElement("div");
      card.classList.add("card");

      const characterImage = document.createElement("img");
      characterImage.classList.add("card__image");
      characterImage.src = characterImages[character.name];
      card.append(characterImage);

      const title = document.createElement("h3");
      title.classList.add("card__title");
      title.textContent = character.name;
      card.append(title);

      const height = document.createElement("p");
      height.classList.add("card__info");
      height.textContent = `Height: ${character.height} cm`;
      card.append(height);

      const mass = document.createElement("p");
      mass.classList.add("card__info");
      mass.textContent = `Mass: ${character.mass} kg`;
      card.append(mass);

      const hairColor = document.createElement("p");
      hairColor.classList.add("card__info");
      hairColor.textContent = `Hair Color: ${character.hair_color}`;
      card.append(hairColor);

      const skinColor = document.createElement("p");
      skinColor.classList.add("card__info");
      skinColor.textContent = `Skin Color: ${character.skin_color}`;
      card.append(skinColor);

      const eyeColor = document.createElement("p");
      eyeColor.classList.add("card__info");
      eyeColor.textContent = `Eye Color: ${character.eye_color}`;
      card.append(eyeColor);

      const birthYear = document.createElement("p");
      birthYear.classList.add("card__info");
      birthYear.textContent = `Birth Year: ${character.birth_year}`;
      card.append(birthYear);

      peopleContainer.append(card);
    });
    const homePageButton = document.createElement("button");
    homePageButton.classList.add("home-page__button");
    homePageButton.textContent = "Back To Homepage";
    homePageButton.addEventListener("click", () => {
      window.location.href = "./index.html";
    });

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");
    peopleContainer.append(buttonContainer);
    buttonContainer.append(homePageButton);
  }
};

export default renderCharacter;
