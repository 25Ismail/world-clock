import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CityListPage } from "./pages/CityListPage";
import { CityDetailPage } from "./pages/CityDetailPage";

/**
 * Main application component.
 * 
 * Sets up routing for the app using React Router:
 * - "/" → CityListPage (shows the list of cities and clocks)
 * - "/city/:id" → CityDetailPage (shows details for a selected city)
 */
function App() {
  return (
    <Router>
      <Routes>
        {/* Route for the home page with a list of cities */}
        <Route path="/" element={<CityListPage />} />

        {/* Route for the city detail page, using dynamic id from the URL */}
        <Route path="/city/:id" element={<CityDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;


