import { useState, useRef } from 'react';
import { TextField, Button, CircularProgress, Box } from '@mui/material';

export default function Samplemain() {
    const [loading, setLoading] = useState(false);
    const cardRef = useRef(null); // <-- Fix here

    function working() {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            if (cardRef.current) {
                cardRef.current.style.display = 'block';
            }
        }, 2000);
    }

    return (
        <Box sx={{ textAlign: 'center', mt: 5 }}>
            <h1>Weather App🌦️</h1>
            <TextField
                label="Enter City"
                variant="outlined"
                sx={{ mr: 2 }}
            />
            <br /><br />
            <Button variant="contained" onClick={working}>
                Search
            </Button>
            <Box sx={{ mt: 4 }}>
                {loading && <CircularProgress />}
            </Box>
            <Box
                ref={cardRef}
                sx={{
                    border: '2px solid #4a148c',
                    margin: '20px auto',
                    padding: '16px 24px',
                    borderRadius: '12px',
                    display: 'none',
                    width: 'fit-content',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                    transition: 'all 0.3s ease-in-out'
                }}
            >
                <h2 style={{
                    fontFamily: "'Segoe UI', cursive",
                    color: '#4a148c',
                    fontWeight: '600',
                    fontSize: '1.8rem',
                    margin: 0,
                    letterSpacing: '0.5px'
                }}>
                    Go and See Outside 😊😛
                </h2>
            </Box>
        </Box>
    );
}
