// Function to save data to local storage
export function saveDataToLocalStorage(key, data) {
  try {
    const jsonData = JSON.stringify(data);
    localStorage.setItem(key, jsonData);
    console.log(`Data saved to local storage with key: ${key}`);
  } catch (error) {
    console.error("Error saving data to local storage:", error);
  }
}

// Function to retrieve data from local storage
export function getDataFromLocalStorage(key) {
  try {
    const jsonData = localStorage.getItem(key);
    if (jsonData === null) {
      console.log(`No data found in local storage for key: ${key}`);
      return 0;
    }

    const data = Number(JSON.parse(jsonData));

    console.log(`Data retrieved from local storage with key: ${key}`);
    return data;
  } catch (error) {
    console.error("Error retrieving data from local storage:", error);
    return null;
  }
}

// Example usage:
const userData = { username: "john_doe", score: 100 };
const localStorageKey = "user_data";

// Save data to local storage
saveDataToLocalStorage(localStorageKey, userData);

// Retrieve data from local storage
const retrievedData = getDataFromLocalStorage(localStorageKey);
console.log("Retrieved data:", retrievedData);
