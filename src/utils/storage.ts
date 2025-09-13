import type { City } from "../types/City";
import { isCity } from "./guards";

const STORAGE_KEY = "worldClockCities";

/**
 * Spara städer till localStorage
 */
export function saveCities(cities: City[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cities));
  } catch (err) {
    console.error("Kunde inte spara städer:", err);
  }
}

/**
 * Ladda städer från localStorage
 * - Filtrerar bort ogiltiga objekt med isCity
 * - Returnerar [] om inget hittas eller JSON är trasigt
 */
export function loadCities(): City[] {
  const data = localStorage.getItem(STORAGE_KEY);
  if (!data) return [];

  try {
    const parsed = JSON.parse(data);
    if (Array.isArray(parsed)) {
      const validCities = parsed.filter(isCity);
      console.log("Laddade städer:", validCities); // 👈 för debugging
      return validCities;
    }
    return [];
  } catch (err) {
    console.error("Fel vid laddning av städer:", err);
    return [];
  }
}

/**
 * Rensa alla sparade städer (för debugging/reset)
 */
/**
 * Rensa alla sparade städer (för debugging/reset)
 */
export function clearCities() {
  try {
    localStorage.removeItem(STORAGE_KEY);
    console.log("Alla sparade städer rensade ✅");
  } catch (err) {
    console.error("Kunde inte rensa städer:", err);
  }
}





