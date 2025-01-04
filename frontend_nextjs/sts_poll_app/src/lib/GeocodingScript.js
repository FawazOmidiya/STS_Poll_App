const fetchCoordinates = async (location) => {
  const response = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=AIzaSyCOTVvrMOHC3wpucx5BMdfTgPdW-8rqs3k`
  );
  const data = await response.json();

  if (data.results && data.results.length > 0) {
    return data.results[0].geometry.location; // Return { lat, lng }
  } else {
    console.error("Location not found!");
    console.log("Full API response:", data);

    return { lat: 37.7749, lng: -122.4194 }; // Default to San Francisco
  }
};

export default fetchCoordinates;
