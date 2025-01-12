"use client";

import React, { useEffect } from "react";

const GoogleMapsScript = () => {
  useEffect(() => {
    // Check if the script is already loaded
    if (document.querySelector("#google-maps-script")) {
      console.log("Google Maps script is already loaded.");
      return;
    }

    const script = document.createElement("script");
    script.id = "google-maps-script";
    script.src =
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyCOTVvrMOHC3wpucx5BMdfTgPdW-8rqs3k&loading=async&libraries=maps&v=beta";
    script.defer = true;
    document.body.appendChild(script);

    script.onload = () => {
      console.log("Google Maps script loaded.");
    };

    script.onerror = () => {
      console.error("Failed to load Google Maps script.");
    };

    // Do not remove the script when the component unmounts
  }, []);

  return null;
};

export default GoogleMapsScript;
