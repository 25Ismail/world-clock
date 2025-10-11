// src/components/AddCityForm.tsx
import { useState } from "react";
import type { City } from "../types/City";

// Define a type for the city input. 
// We exclude "id" and "imageUrl" because those will be handled by the parent component.
type CityInput = Omit<City, "id" | "imageUrl">;

// Props that this component expects to receive from its parent.
// - onAddCity: a function that will be called when a new city is added.
// - nextId: prepared for generating an id for the next city (not used here yet).
interface AddCityFormProps {
  onAddCity: (city: CityInput) => void;
 
}

// A predefined list of timezones that the user can choose from.
// This avoids free text input and ensures correct values.
const timezones = [
  "Europe/Stockholm",
  "Europe/London",
  "Europe/Paris",
  "America/New_York",
  "America/Los_Angeles",
  "America/Chicago",
  "Asia/Tokyo",
  "Asia/Dubai",
  "Australia/Sydney",
  "Africa/Cairo",
  "Africa/Johannesburg",
];

// Functional component for the form that allows adding a new city.
export function AddCityForm({ onAddCity }: AddCityFormProps) {
  // Local state variables to store the input values (city name and timezone).
  const [name, setName] = useState("");
  const [timezone, setTimezone] = useState("");

  // Function that runs when the form is submitted.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevents the default behavior (page reload).
    if (!name || !timezone) return; // If required fields are empty, stop execution.

    // Call the parent function and send the new city data upwards.
    // "country" is set to an empty string here, but could be expanded later.
    onAddCity({ name, timezone, country: "" });
    console.log("New city submitted:", { name, timezone }); 

    // Clear the form fields after submission.
    setName("");
    setTimezone("");
  };

  return (
    // Form with inline styling for layout (flexbox and spacing).
    <form onSubmit={handleSubmit} style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
      {/* Input field for the city name. 
          It is controlled by the "name" state. */}
      <input
        type="text"
        placeholder="City name"
        value={name}
        onChange={(e) => setName(e.target.value)} // Updates the state when typing.
        required
      />
      
      {/* Dropdown menu for selecting a timezone. 
          Options are generated dynamically from the "timezones" array. */}
      <select value={timezone} onChange={(e) => setTimezone(e.target.value)} required>
        <option value="">Select timezone</option>
        {timezones.map((tz) => (
          <option key={tz} value={tz}>
            {tz}
          </option>
        ))}
      </select>
      
      {/* Button that submits the form. 
          When clicked, it triggers handleSubmit(). */}
      <button type="submit">Add city</button>
    </form>
  );
}
