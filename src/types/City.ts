// The City interface defines the structure of a city object
export interface City {
  id: number;        // Unique identifier for each city
  name: string;      // City name (e.g., "Rome")
  timezone: string;  // IANA timezone string (e.g., "Europe/Rome")
  country?: string;  // ( Country name the city belongs to
  imageUrl?: string; //  Image representing the city
}

