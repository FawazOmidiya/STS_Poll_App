import React, { useEffect, useState } from "react";
import axios from "axios";

const PollingData = () => {
  const [pollingData, setPollingData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the Django API
    axios
      .get("http://127.0.0.1:8000/api/polling/")
      .then((response) => {
        setPollingData(response.data); // Set the API data to state
      })
      .catch((err) => {
        setError("Failed to fetch data"); // Handle errors
        console.error(err);
      });
  }, []); // Empty dependency array ensures this runs only once

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Polling Data</h1>
      {pollingData.length > 0 ? (
        <ul>
          {pollingData.map((item, index) => (
            <li key={index}>
              {item.state} ({item.demographic}): {item.percentage}%
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PollingData;
