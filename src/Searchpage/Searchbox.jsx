import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBox() {
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "fdf23395122a45b41bc08734772b67e6";
  const bgimg =
    "https://media.istockphoto.com/id/1322717990/photo/thick-dark-black-heavy-storm-clouds-covered-summer-sunset-sky-horizon-gale-speed-wind-blowing.jpg?s=612x612&w=0&k=20&c=2YasxBShNC0YX7a-gwZJuCJRjEepEKTngyiyq3PvTws=";

  const [city, setCity] = useState("");
  const navigate = useNavigate();

  const getWeatherInfo = async (city) => {
    try {
      const response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      if (!response.ok) {
        alert("City not found! Try again.");
        return;
      }
      const data = await response.json();
      navigate("/weather", { state: { weatherData: data } });
    } catch (error) {
      console.log("Error fetching data:", error);
      alert("Network error. Try again later.");
    }
  };

  const handleChange = (e) => setCity(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() === "") return;
    getWeatherInfo(city);
    setCity("");
  };

  return (
    <div
      style={{
        backgroundImage: `url(${bgimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <form onSubmit={handleSubmit}>
        <h2>Search for the Weather</h2>
        <TextField
          id="outlined-basic"
          label="City Name"
          variant="outlined"
          onChange={handleChange}
          value={city}
          required
          sx={{ backgroundColor: "white", borderRadius: "5px" }}
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>
    </div>
  );
}

export default SearchBox;
