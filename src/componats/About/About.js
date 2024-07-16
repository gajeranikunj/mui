import React from 'react'
import CNavbare from '../CNavbare'
import Footer from '../Footer'
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Box, Grid, Typography } from '@mui/material';
import Titels from '../Titels';
function About() {
    return (
        <>
            <CNavbare />
            <Titels url={"https://demo18.houzez.co/wp-content/uploads/2020/09/image-2.jpg"} Name={"About"} />
            <Box sx={{marginBottom:"50px"}}>
                <Box sx={{ width: "90%", margin: "auto", paddingTop: "50px" }}>
                    <Box sx={{ width: "200px", height: "10px", backgroundColor: "#16BFBF", margin: "auto" }}></Box>
                    <Typography sx={{ fontSize: { xs: "30px", sm: "30px", md: "40px" }, display: "flex", flexWrap: "wrap", fontWeight: "600", color: "black", paddingTop: "60px", lineHeight: "1", justifyContent: "center", alignItems: "center" }}>
                        We have been building houses for over 150 years
                    </Typography>
                    <Grid container sx={{ marginTop: "50px", justifyContent: "space-around" }}>
                        <Grid lg={5}>
                            <Typography variant='h6' sx={{ marginTop: "40px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam massa purus, bibendum gravida orci nec, porta efficitur tellus. Nullam lacus enim, venenatis at enim et, fringilla sodales odio. Donec nec erat ac elit blandit facilisis dictum a neque. Vestibulum sem lectus, aliquet semper erat at, elementum congue mauris. Phasellus non rhoncus justo. Aliquam id porttitor massa. Vestibulum ornare ornare arcu, eget convallis nisl fringilla non.</Typography>
                        </Grid>
                        <Grid lg={5}>
                            <Typography variant='h6' sx={{ marginTop: "40px" }}>Cras cursus est a leo volutpat, vitae convallis mauris bibendum. In vel ante nec lectus posuere blandit. Fusce suscipit pellentesque quam, nec consectetur orci molestie eu. Nunc ultricies erat ac erat aliquet, a consectetur dui mollis. Donec ut ex tellus. Donec commodo consectetur massa nec laoreet. Duis enim est, hendrerit in odio nec, venenatis fermentum nunc. Nulla egestas magna non lorem sollicitudin, eu pharetra sem convallis. </Typography>
                        </Grid>
                    </Grid>

                    <Grid container sx={{ marginTop: "50px", justifyContent: "space-around" }}>
                        <Grid lg={3} xs={12} sx={{ marginTop: "30px", textAlign: "center" }}>
                            <Typography variant='h2' >
                                250
                                +</Typography>
                            <Typography sx={{ color: "#16BFBF", fontSize: "20px", fontWeight: "600" }}>Realized Projects</Typography>

                        </Grid>
                        <Grid lg={3} xs={12} sx={{ marginTop: "30px", textAlign: "center" }}>
                            <Typography variant='h2'>
                                250
                                +</Typography>
                            <Typography sx={{ color: "#16BFBF", fontSize: "20px", fontWeight: "600" }}>Staff Members</Typography>
                        </Grid>
                        <Grid lg={3} xs={12} sx={{ marginTop: "30px", textAlign: "center" }}>
                            <Typography variant='h2' >
                                50
                                +</Typography>
                            <Typography sx={{ color: "#16BFBF", fontSize: "20px", fontWeight: "600" }}> Offices</Typography>
                        </Grid>
                        <Grid lg={3} xs={12} sx={{ marginTop: "30px", textAlign: "center" }}>
                            <Typography variant='h2'>
                                450
                                +</Typography>
                            <Typography sx={{ color: "#16BFBF", fontSize: "20px", fontWeight: "600" }}>Local Experts</Typography>
                        </Grid>
                    </Grid>
                    <Box sx={{ width: "200px", height: "10px", backgroundColor: "#16BFBF", margin: "auto", marginTop: "100px" }}></Box>
                    <Typography sx={{ fontSize: { xs: "30px", sm: "30px", md: "40px" }, display: "flex", flexWrap: "wrap", fontWeight: "600", color: "black", paddingTop: "60px", lineHeight: "1", justifyContent: "center", alignItems: "center" }}>
                        our team
                    </Typography>
                    <Grid container sx={{ marginTop: "50px", justifyContent: "space-around" }}>
                        <Grid lg={3} xs={12} sx={{ marginTop: "30px", textAlign: "center" }}>
                            <img src="https://demo18.houzez.co/wp-content/uploads/2020/09/Artboard-1team.jpg" alt="" width={'100%'} />
                        </Grid>
                        <Grid lg={3} xs={12} sx={{ marginTop: "30px", textAlign: "center" }}>
                            <img src="https://demo18.houzez.co/wp-content/uploads/2020/09/Artboard-3team.jpg" alt="" width={'100%'} />
                        </Grid>
                        <Grid lg={3} xs={12} sx={{ marginTop: "30px", textAlign: "center" }}>
                            <img src="https://demo18.houzez.co/wp-content/uploads/2020/09/Artboard-2team.jpg" alt="" width={'100%'} />
                        </Grid>
                        <Grid lg={3} xs={12} sx={{ marginTop: "30px", textAlign: "center" }}>
                            <img src="https://demo18.houzez.co/wp-content/uploads/2020/09/Artboard-4team.jpg" alt="" width={'100%'} />
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Footer />
        </>
    )
}

export default About