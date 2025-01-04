import React, { useEffect, useRef, useState } from "react";
import fetchCoordinates from "@/lib/GeocodingScript"; // Ensure fetchCoordinates is an async function

function GoogleMap({ location }) {
  const mapRef = useRef(null); // Reference to the map container
  const [map, setMap] = useState(null); // Google Map instance

  // Initialize the map
  useEffect(() => {
    const initMap = async () => {
      const defaultCoordinates = await fetchCoordinates("Arizona");
      console.log(defaultCoordinates);

      if (mapRef.current) {
        const mapInstance = new window.google.maps.Map(mapRef.current, {
          center: defaultCoordinates, // Default to San Francisco
          zoom: 7,
          mapTypeId: "satellite",
        });
        setMap(mapInstance); // Save the map instance for later updates
      }
    };

    // Wait for the Google Maps script to load
    if (window.google && window.google.maps) {
      initMap();
    } else {
      const timer = setInterval(() => {
        if (window.google && window.google.maps) {
          clearInterval(timer);
          initMap();
        }
      }, 100); // Check every 100ms
    }
  }, []);

  // Update map center dynamically based on location prop
  useEffect(() => {
    const updateMapCenter = async () => {
      if (map && location) {
        const coordinates = await fetchCoordinates(location); // Fetch coordinates for the selected location
        map.panTo(coordinates); // Update map center
        map.setZoom(6.5); // Adjust zoom level
      }
    };

    updateMapCenter();
  }, [location, map]);

  return (
    <div
      ref={mapRef}
      style={{
        height: "500px",
        width: "100%",
      }}
    ></div>
  );
}

export default GoogleMap;
