import { Routes, Route } from "react-router-dom";
import Welcome from "./Homepage/Welcome";
import Searchbox from "./Searchpage/Searchbox";
import WeatherCard from "./Weatherpage/Weathercard";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/search" element={<Searchbox />} />
      <Route path="/weather" element={<WeatherCard />} />
    </Routes>
  );
}
export default App;
