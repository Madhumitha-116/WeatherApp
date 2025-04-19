import React, { useState } from 'react';
import { TextField, Button, CircularProgress, Typography, Box } from '@mui/material';
import WeatherCard from './Weathercardcomp';
import axios from 'axios';

const  Searchbox = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const API_KEY = '76618f09a4e03a783c411c3b942c2b04';

  const fetchWeather = async () => {
    if (!city) return;

    setLoading(true);
    setError('');
    setWeatherData(null);

    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric `
      );
      setWeatherData(res.data);
      console.log(res.data);
      
    } catch (err) {
      setError('City not found or API error.');
    } finally {
      setLoading(false);
    }
    setCity("")
  };

  return (
    <Box sx={{ textAlign: 'center', mt: 5 }}>
      <h1>Weather App🌦️</h1>
      <TextField
        label="Enter City"
        variant="outlined"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        sx={{ mr: 2 }}
      />
      <br /><br />
      <Button variant="contained" onClick={fetchWeather}>
        Search
      </Button>

      <Box sx={{ mt: 4 }}>
        {loading && <CircularProgress />}
        {error && <Typography color="error">{error}</Typography>}
        {weatherData && <WeatherCard data={weatherData} />}
      </Box>
    </Box>
  );
};

export default Searchbox;
