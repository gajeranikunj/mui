import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function Sfooter() {
    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'instant' }); 
    };
    return (
        <>
            <Box sx={{
                position: "relative", overflow: "hidden", backgroundImage: "url(https://demo18.houzez.co/wp-content/uploads/2020/09/image-6-584x438.jpg)",
                backgroundColor: '#00213ad0',
                backgroundBlendMode: "multiply",
                paddingBottom: "50px"
            }}>
                <Box sx={{ width: "75%", margin: "auto", paddingTop: "50px" }}>
                    <Typography sx={{ fontSize: { xs: "30px", sm: "40px", md: "50px" }, display: "flex", justifyContent: "center", flexWrap: "wrap", fontWeight: "600", color: "white", paddingTop: "60px", lineHeight: "1" }}>
                        Would you like to
                        <Box sx={{ marginLeft: "10px", marginRight: "10px", color: "#16BFBF", }}>
                            speak to an expert?
                        </Box>
                    </Typography>
                    <Typography sx={{ fontSize: { xs: "17px", sm: "20px", md: "23px", textAlign: "center" }, fontWeight: "600", color: "white", marginTop: "30px", lineHeight: "1.2" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis et sem sed sollicitudin. Donec non odio neque.
                    </Typography>
                    <Link to={"/Contact_us"} style={{ color: "white", textDecoration: "none" }} onClick={handleClick}>
                        <Button
                            variant='contained'
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                margin: "auto",
                                width: '260px',
                                height: { xs: '50px', sm: '60px' },
                                marginTop: '20px',
                                backgroundColor: '#16bfbfab',
                                '&:hover': {
                                    backgroundColor: '#16BFBF',
                                },
                            }}
                        >
                            Request a consultation
                        </Button>
                    </Link>
                </Box>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" style={{ position: "absolute", top: "0", height: "50px", width: "100%", zIndex: "99" }} >
                    <path fill='white' d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
	c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
	c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"></path>
                </svg>
            </Box>

        </>
    )
}

export default Sfooter