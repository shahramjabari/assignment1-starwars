import fetchMovies from "./fetchMovies.js";

const movieImages = {
  "A New Hope": "./src/assets/images/a-new-hope.jpg",
  "The Empire Strikes Back": "./src/assets/images/the-empire-strikes-back.jpg",
  "Return of the Jedi": "./src/assets/images/return-of-the-jedi.jpg",
  "The Phantom Menace": "./src/assets/images/The-Phantom-Menace.jpg",
  "Attack of the Clones": "./src/assets/images/Attack-of-the-Clones.jpg",
  "Revenge of the Sith": "./src/assets/images/Revenge-of-the-Sith.jpg",
};

const renderMovies = async () => {
  const movieList = await fetchMovies();

  if (movieList && movieList.length > 0) {
    const moviesContainer = document.querySelector(".cards-container");
    moviesContainer.innerHTML = "";

    movieList.forEach((movie) => {
      const card = document.createElement("div");
      card.classList.add("card");

      const movieImage = document.createElement("img");
      movieImage.classList.add("card__image");
      movieImage.src =
        movieImages[movie.title] || "./src/assets/images/default.jpg";
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

      moviesContainer.append(card);
    });

    const homePageButton = document.createElement("button");
    homePageButton.classList.add("home-page__button");
    homePageButton.textContent = "Back To Homepage";
    homePageButton.addEventListener("click", () => {
      window.location.href = "./index.html";
    });

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");
    moviesContainer.append(buttonContainer);
    buttonContainer.append(homePageButton);
  }
};

export default renderMovies;
