// src/pages/CityListPage.tsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cities as initialCities } from "../data/cities";
import type { City } from "../types/City";
import { Clock } from "../components/Clock";
import { AddCityForm } from "../components/AddCityForm";
import { saveCities, loadCities, clearCities } from "../utils/storage";
import { isCity } from "../utils/guards";

// Utility function to calculate the next available ID.
// If the list is not empty, it finds the maximum ID and adds 1.
// Otherwise, it starts from 1.
function nextId(cityList: City[]) {
  return cityList.length > 0 ? Math.max(...cityList.map((c) => c.id)) + 1 : 1;
}

// Page component that shows the list of cities and allows adding new ones
export function CityListPage() {
  // Load initial data from localStorage.
  // If no valid data is stored, fall back to the predefined city list.
  const [cityList, setCityList] = useState<City[]>(() => {
    const stored = loadCities();
    const valid = stored.filter(isCity); // Ensure data matches City type
    return valid.length > 0 ? valid : initialCities;
  });

  // Function for adding a new city
  const handleAddCity = (city: Omit<City, "id" | "imageUrl">) => {
    // Prevent duplicates: check if the timezone already exists in the list
    if (cityList.some((c) => c.timezone === city.timezone)) {
      alert("This timezone already exists in the list.");
      return;
    }

    // Add an ID to the new city
    const withId: City = { ...city, id: nextId(cityList) };

    // Update the state and save the new list
    const updated = [...cityList, withId];
    setCityList(updated);
    saveCities(updated);
  };

  // Save the city list to localStorage every time it changes
  useEffect(() => {
    saveCities(cityList);
  }, [cityList]);

  return (
    <div className="container">
      <h1>World Clock</h1>

      {/* Button to clear saved cities and reset to default */}
      <button
        onClick={() => {
          clearCities();
          setCityList(initialCities); // Reset instead of empty list
        }}
      >
        Clear saved cities
      </button>

      {/* Form for adding a new city */}
      <AddCityForm 
        onAddCity={handleAddCity} 
        nextId={nextId(cityList)} 
      />

      {/* List of cities with links and live clocks */}
      <ul>
        {cityList.map((city) => (
          <li key={city.id}>
            {/* Link to detailed city page */}
            <Link to={`/city/${city.id}`}>{city.name}</Link>
            {/* Display a small digital clock for each city */}
            <Clock timezone={city.timezone} />
          </li>
        ))}
      </ul>
    </div>
  );
}
