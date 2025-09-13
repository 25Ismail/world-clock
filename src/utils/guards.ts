import type { City } from "../types/City";

/**
 * Type guard function that checks if a given value is a valid City object.
 * 
 * This is useful when working with external data sources (like localStorage or APIs),
 * where the data may not always match the expected structure.
 * 
 * @param obj - The value to check
 * @returns true if the object matches the City interface, false otherwise
 */
export function isCity(obj: any): obj is City {
  return (
    typeof obj === "object" && // The value must be an object
    obj !== null &&            // It cannot be null
    typeof obj.id === "number" &&     // id must be a number
    typeof obj.name === "string" &&   // name must be a string
    typeof obj.timezone === "string"  // timezone must be a string
  );
}

