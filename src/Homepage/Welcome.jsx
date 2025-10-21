import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import "./Welcome.css";

function Welcome() {
  const navigate = useNavigate();
  const IMG_URL =
    "https://media.istockphoto.com/id/1133867403/photo/weather-satellite-for-observing-powerful-thunderstorms-of-storms-and-tornadoes-in-space.jpg?s=612x612&w=0&k=20&c=KV7cHIaaXRepeltJ-m2KXA6q8UDst4NA7rk6BbxKypE=";

  const handleStart = () => {
    navigate("/search");
  };

  return (
        
<div
  style={{
    backgroundImage: `url(${IMG_URL})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed", 
    height: "100vh",
    width: "100%",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  }}
>

    
      <center style={{ marginTop: "200px" }}>
        <h1 >🌤️ Welcome to the Weather App</h1>         
        <Button variant="contained" onClick={handleStart}>
          Start
        </Button>
      </center>
    </div>
  );
}

export default Welcome;
