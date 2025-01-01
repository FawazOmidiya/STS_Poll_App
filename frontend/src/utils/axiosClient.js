import axios from "axios";

BaseURL = "http://127.0.0.1:8000/api/";
axios
  .get(BaseURL + "polling")
  .then((response) => {
    setPollingData(response.data); // Set the API data to state
  })
  .catch((err) => {
    setError("Failed to fetch data"); // Handle errors
    console.error(err);
  });
