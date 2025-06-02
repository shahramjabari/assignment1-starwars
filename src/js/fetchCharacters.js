// fetchCharacters.js
const fetchCharacter = async () => {
  try {
    const response = await fetch("https://swapi.py4e.com/api/people");
    const data = await response.json();

    const makeCharacter = (peopleContainer) => {
      const characters = peopleContainer.slice(0, 6);
      return characters.map((character) => ({
        name: character.name,
        height: character.height,
        mass: character.mass,
        hair_color: character.hair_color,
        skin_color: character.skin_color,
        eye_color: character.eye_color,
        birth_year: character.birth_year,
      }));
    };
    return makeCharacter(data.results);
  } catch (error) {
    console.error("Failed to fetch characters:", error);
    return null;
  }
};
export default fetchCharacter;
