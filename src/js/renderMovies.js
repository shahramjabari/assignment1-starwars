// renderMovies.js
import fetchMovies from "./fetchMovies.js";

const movieImages = {
  "A New Hope": "/assets/images/a-new-hope.jpg",
  "The Empire Strikes Back": "/assets/images/the-empire-strikes-back.jpg",
  "Return of the Jedi": "/assets/images/return-of-the-jedi.jpg",
  "The Phantom Menace": "/assets/images/The-Phantom-Menace.jpg",
  "Attack of the Clones": "/assets/images/Attack-of-the-Clones.jpg",
  "Revenge of the Sith": "/assets/images/Revenge-of-the-Sith.jpg",
};

const renderMovies = async () => {
  const movieList = await fetchMovies();
  const moviesContainer = document.querySelector(".cards-container");
  moviesContainer.innerHTML = "";

  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("button-container-top");

  const homePageButton = document.createElement("button");
  homePageButton.classList.add("home-page__button");
  homePageButton.textContent = "Back To Homepage";
  homePageButton.addEventListener("click", () => {
    window.location.href = "./index.html";
  });

  buttonContainer.appendChild(homePageButton);
  moviesContainer.appendChild(buttonContainer);

  if (!movieList || movieList.length === 0) {
    const errorMsg = document.createElement("p");
    errorMsg.classList.add("error-message");
    errorMsg.textContent = "Failed to load movies. Please try again later.";
    moviesContainer.appendChild(errorMsg);
    return;
  }

  movieList.forEach((movie) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const movieImage = document.createElement("img");
    movieImage.classList.add("card__image");
    movieImage.src = movieImages[movie.title] || "/assets/images/default.jpg";
    card.append(movieImage);

    const title = document.createElement("h3");
    title.classList.add("card__title");
    title.textContent = movie.title;
    card.append(title);

    const episode = document.createElement("p");
    episode.classList.add("card__info");
    episode.textContent = `Episode: ${movie.episode_id}`;
    card.append(episode);

    const director = document.createElement("p");
    director.classList.add("card__info");
    director.textContent = `Director: ${movie.director}`;
    card.append(director);

    const producer = document.createElement("p");
    producer.classList.add("card__info");
    producer.textContent = `Producer: ${movie.producer}`;
    card.append(producer);

    const releaseDate = document.createElement("p");
    releaseDate.classList.add("card__info");
    releaseDate.textContent = `Release Date: ${movie.release_date}`;
    card.append(releaseDate);

    moviesContainer.appendChild(card);
  });
};

export default renderMovies;
