"use client";
import React, { useEffect } from "react";

const GoogleMapsScript = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyCOTVvrMOHC3wpucx5BMdfTgPdW-8rqs3k&loading=async&libraries=maps&v=beta";
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default GoogleMapsScript;
