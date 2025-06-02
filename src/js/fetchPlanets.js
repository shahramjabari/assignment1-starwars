const fetchPlanets = async () => {
  try {
    const response = await fetch("https://swapi.py4e.com/api/planets");
    const data = await response.json();

    const makePlanets = (planetsContainer) => {
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

    return makePlanets(data.results);
  } catch (error) {
    console.error("Failed to fetch planets:", error);
    return null;
  }
};

export default fetchPlanets;
