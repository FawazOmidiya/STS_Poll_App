import React, { useState, useEffect } from "react";
import axios from "axios";

const BarGraph = ({ stateName }) => {
  const [imageUrl, setImageUrl] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBarGraph = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/state_polling/bar/${stateName}`, // Backend API URL
          { responseType: "blob" } // Ensure the response is treated as binary data
        );

        // Convert the binary response to a URL
        const blob = new Blob([response.data], { type: "image/png" });
        const url = URL.createObjectURL(blob);
        setImageUrl(url);
      } catch (err) {
        setError("Failed to load the bar graph.");
        console.error(err);
      }
    };

    fetchBarGraph();
  }, [stateName]);

  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Polling Results for {stateName}</h1>
      {imageUrl ? (
        <img src={imageUrl} alt={`Polling Results for ${stateName}`} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default BarGraph;
