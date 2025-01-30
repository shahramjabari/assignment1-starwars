const fetchCharacter = async () => {
  try {
    const response = await fetch("https://swapi.py4e.com/api/people");
    const data = await response.json();

    // henter fra render "peoplecontainer"
    const makeCharacter = (peopleContainer) => {
      const characters = peopleContainer.slice(0, 10);
      return characters.map((character, index) => ({
        name: character.name,
        height: character.height,
        mass: character.mass,
        hair_color: character.hair_color,
        skin_color: character.skin_color,
        eye_color: character.eye_color,
        birth_year: character.birth_year,
      }));
    };
    const characterList = makeCharacter(data.results);
    console.log(characterList);
    return characterList;
  } catch (error) {
    console.log("Error fetching characters:");
    return;
  }
};
export default fetchCharacter;
