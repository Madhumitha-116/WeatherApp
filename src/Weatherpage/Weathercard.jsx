import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useLocation, useNavigate } from "react-router-dom";

function WeatherCard() {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state?.weatherData;

  if (!data) {
    return (
      <center style={{ marginTop: "100px" }}>
        <h2>No data found. Please search again.</h2>
        <Button variant="contained" onClick={() => navigate("/search")}>Go Back</Button>
      </center>
    );
  }

  const info = {
    city: data.name,
    temp: data.main.temp,
    feelsLike: data.main.feels_like,
    humidity: data.main.humidity,
    tempMin: data.main.temp_min,
    tempMax: data.main.temp_max,
    weather: data.weather[0].description,
  };

  return (
    <center style={{ marginTop: "50px" }}>
      <Card sx={{ maxWidth: 400, padding: "20px" }}>
        <Typography variant="h4" gutterBottom>{info.city}</Typography>
        <Typography variant="h6">Weather: {info.weather}</Typography>
        <Typography>Temperature: {info.temp}°C</Typography>
        <Typography>Feels Like: {info.feelsLike}°C</Typography>
        <Typography>Humidity: {info.humidity}%</Typography>
        <Typography>Min: {info.tempMin}°C | Max: {info.tempMax}°C</Typography>
        <br />
        <Button variant="contained" onClick={() => navigate("/search")}>Back</Button>
      </Card>
    </center>
  );
}

export default WeatherCard;
