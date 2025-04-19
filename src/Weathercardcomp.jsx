import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const Weathercardcomp = ({ data }) => {
  const { name, main, weather, wind,sys } = data;
  const sunrise = new Date(sys.sunrise * 1000).toLocaleTimeString();
  const sunset = new Date(sys.sunset * 1000).toLocaleTimeString();
  
  const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

  return (
    <Card sx={{ maxWidth: 400, margin: 'auto', mt: 4, boxShadow: 3, borderRadius: 3 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Weather in {name}
        </Typography>
        
        <img src={iconUrl} alt="weather icon" />

<Typography>Sunrise: {sunrise}</Typography>
<Typography>Sunset: {sunset}</Typography>

        <Typography variant="h6">Temperature: {main.temp}°C</Typography>
        <Typography>Feels Like: {main.feels_like}°C</Typography>
        <Typography>Humidity: {main.humidity}%</Typography>
        <Typography>Condition: {weather[0].description}</Typography>
        <Typography>Wind Speed: {wind.speed} m/s</Typography>

      </CardContent>
    </Card>
  );
};

export default Weathercardcomp;
