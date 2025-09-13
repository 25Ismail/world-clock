import type { City } from "../types/City";

// Predefined list of cities with their timezones.
// Each city follows the City type structure: 
// - id: unique identifier
// - name: city name
// - timezone: IANA timezone string
export const cities: City[] = [
  { id: 1, name: "Reykjavik", timezone: "Atlantic/Reykjavik" },
  { id: 2, name: "Lisbon", timezone: "Europe/Lisbon" },
  { id: 3, name: "Madrid", timezone: "Europe/Madrid" },
  { id: 4, name: "Rome", timezone: "Europe/Rome" },
  { id: 5, name: "Athens", timezone: "Europe/Athens" },
  { id: 6, name: "Warsaw", timezone: "Europe/Warsaw" },
  { id: 7, name: "Helsinki", timezone: "Europe/Helsinki" },
  { id: 8, name: "Tallinn", timezone: "Europe/Tallinn" },
  { id: 9, name: "Bangkok", timezone: "Asia/Bangkok" },
  { id: 10, name: "Jakarta", timezone: "Asia/Jakarta" },
  { id: 11, name: "Manila", timezone: "Asia/Manila" },
  { id: 12, name: "Kuala Lumpur", timezone: "Asia/Kuala_Lumpur" },
  { id: 13, name: "Hong Kong", timezone: "Asia/Hong_Kong" },
  { id: 14, name: "Shanghai", timezone: "Asia/Shanghai" },
  { id: 15, name: "Tehran", timezone: "Asia/Tehran" },
  { id: 16, name: "Karachi", timezone: "Asia/Karachi" },
  { id: 17, name: "Honolulu", timezone: "Pacific/Honolulu" },
  { id: 18, name: "Anchorage", timezone: "America/Anchorage" },
  { id: 19, name: "Santiago", timezone: "America/Santiago" },
  { id: 20, name: "Lima", timezone: "America/Lima" },
];


