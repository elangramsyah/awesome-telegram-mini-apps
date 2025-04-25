fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) {
      throw new Error(`API Error: ${response.status} - ${response.statusText}`);
    }
    return response.json();
  })
  .then(data => {
    console.log("Data retrieved successfully:", data);
  })
  .catch(error => {
    console.error("An error occurred while accessing the API:");
    console.error(error.message);
  });