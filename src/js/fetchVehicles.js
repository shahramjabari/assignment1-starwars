const fetchVehicles = async () => {
  try {
    const response = await fetch("https://swapi.py4e.com/api/vehicles");
    const data = await response.json();

    const makeVehicles = async (vehiclesContainer) => {
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
    const vehicleList = makeVehicles(data.results);
    return vehicleList;
  } catch (error) {
    return;
  }
};
export default fetchVehicles;
