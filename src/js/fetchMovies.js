const fetchMovies = async () => {
  try {
    const response = await fetch("https://swapi.py4e.com/api/films");
    const data = await response.json();

    const makeMovies = (moviesContainer) => {
      const movies = moviesContainer.slice(0, 6);
      return movies.map((movie) => ({
        title: movie.title,
        episode_id: movie.episode_id,
        director: movie.director,
        producer: movie.producer,
        release_date: movie.release_date,
      }));
    };

    return makeMovies(data.results);
  } catch (error) {
    console.error("Failed to fetch movies:", error);
    return null;
  }
};

export default fetchMovies;
