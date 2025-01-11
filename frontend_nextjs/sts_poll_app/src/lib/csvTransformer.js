import Papa from "papaparse";

export const parseCsv = (csvString) => {
  return new Promise((resolve, reject) => {
    Papa.parse(csvString, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => resolve(results.data),
      error: (error) => reject(error),
    });
  });
};

export const transformCsvData = (csvData) => {
  const transformed = {};

  csvData.forEach((row) => {
    const date = new Date(row.Date).toISOString().split("T")[0]; // Format date (e.g., "2024-09-19")
    if (!transformed[date]) {
      transformed[date] = { date }; // Initialize date entry
    }

    // Convert CloseSharePrice from string to float
    const closePrice = parseFloat(row.CloseSharePrice.replace("$", ""));
    transformed[date][row.ContractName] = closePrice;
  });

  return Object.values(transformed); // Convert object to array for Recharts
};
