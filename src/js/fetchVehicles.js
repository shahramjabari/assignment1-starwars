const fetchVehicles = async () => {
  try {
    const response = await fetch("https://swapi.py4e.com/api/vehicles");
    const data = await response.json();

    const makeVehicles = (vehiclesContainer) => {
      const vehicles = vehiclesContainer.slice(0, 6);
      return vehicles.map((vehicle) => ({
        name: vehicle.name,
        model: vehicle.model,
        manufacturer: vehicle.manufacturer,
        cost_in_credits: vehicle.cost_in_credits,
        length: vehicle.length,
        crew: vehicle.crew,
        passengers: vehicle.passengers,
        cargo_capacity: vehicle.cargo_capacity,
      }));
    };

    return makeVehicles(data.results);
  } catch (error) {
    console.error("Failed to fetch vehicles:", error);
    return null;
  }
};

export default fetchVehicles;
