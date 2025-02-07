const fetchPlanets = async () => {
  try {
    const response = await fetch("https://swapi.py4e.com/api/planets");
    const data = await response.json();

    const makePlanets = async (planetsContainer) => {
      const planets = planetsContainer.slice(0, 6);
      return planets.map((planet) => ({
        name: planet.name,
        population: planet.population,
        diameter: planet.diameter,
        rotation_period: planet.rotation_period,
        orbital_period: planet.orbital_period,
        gravity: planet.gravity,
        terrain: planet.terrain,
        surface_water: planet.surface_water,
      }));
    };
    const planetList = makePlanets(data.results);
    return planetList;
  } catch (error) {
    return;
  }
};
export default fetchPlanets;
