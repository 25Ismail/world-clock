import { useParams, Link } from "react-router-dom";
import { cities } from "../data/cities";
import { loadCities } from "../utils/storage";
import { Clock } from "../components/Clock";
import { AnalogClock } from "../components/AnalogClock";

// Component for displaying detailed information about a single city
export function CityDetailPage() {
  // Extract the "id" parameter from the URL using React Router
  const { id } = useParams<{ id: string }>(); 

  const stored = loadCities();
  const cityList = stored.length > 0 ? stored : cities
 

  // Find the matching city in the list based on the id from the URL
  const city = cityList.find((c) => c.id === Number(id));

  // If no city is found, show an error message
  if (!city) {
    return <h2>City not found</h2>;
  }

  // If a city is found, render its details
  return (
    <div className="city-detail">
      {/* Display city name */}
      <h2>{city.name}</h2>

      {/* Digital clock showing the current time in the city’s timezone */}
      <Clock timezone={city.timezone} />

      {/* Analog clock showing the same time (with custom size) */}
      <AnalogClock timezone={city.timezone} size={200} />

      {/* Show the timezone string */}
      <p>Timezone: {city.timezone}</p>

      {/* Link back to the main page */}
      <Link to="/" className="back-link">⬅ Back</Link>
    </div>
  );
}