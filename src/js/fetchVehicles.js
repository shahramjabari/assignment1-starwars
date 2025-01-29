const fetchVehicles = async () => {
  try {
    const response = await fetch("https://swapi.py4e.com/api/vehicles");
    const data = await response.json();

    const makeVehicles = async () => {
      const vehicles = data.results;
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
    console.log("Error fetching vehicles:");
    return;
  }
};
export default fetchVehicles;
