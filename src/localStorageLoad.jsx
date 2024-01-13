// Function to save data to local storage
export function saveDataToLocalStorage(key, data) {
  try {
    const jsonData = JSON.stringify(data);
    localStorage.setItem(key, jsonData);
  } catch (error) {
    console.error("Error saving data to local storage:", error);
  }
}

// Function to retrieve data from local storage
export function getDataFromLocalStorage(key) {
  try {
    const jsonData = localStorage.getItem(key);
    if (jsonData === null) {
      return 0;
    }
    const data = Number(JSON.parse(jsonData));
    return data;
  } catch (error) {
    console.error("Error retrieving data from local storage:", error);
    return null;
  }
}
