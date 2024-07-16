import { Box, Container, Grid } from '@mui/material'
import React from 'react'
import { IoArrowForwardCircleOutline } from "react-icons/io5";
function Section6() {
    return (
        <Box sx={{ width: "100%" }}>
            <Container sx={{ marginTop: '50px' }}>
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Box sx={{ width: "90px", height: "3px", backgroundColor: "#16BFBF" }}>
                    </Box>
                </Box>
                <Box sx={{ display: "flex",flexWrap:"wrap",textAlign:"center", justifyContent: "center", alignItems: "center", fontSize: "40px", fontWeight: "700" }}>
                    <Box>
                        How we create our
                    </Box>
                    <Box sx={{ marginLeft: "10px", color: "#16bfbf" }}>
                        prefab
                    </Box>
                    <Box sx={{ marginLeft: "10px" }}>
                        homes
                    </Box>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "20px", fontWeight: "200", textAlign: "center", marginTop: "30px" }}>
                    <Box sx={{ width: "60%" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis et sem sed sollicitudin. Donec non odio neque.
                    </Box>
                </Box>
                <Grid container spacing={2} sx={{ marginTop: "50px" }}>

                    <Grid item xs={12} md={4} >
                        <Box>
                            <img src="https://demo18.houzez.co/wp-content/uploads/2020/09/image-13-1024x683.jpg" alt="" style={{ width: "100%" }} />
                        </Box>
                        <Box sx={{ fontSize: "27px", fontWeight: "700", marginTop: "10px" }}>
                            Design quality
                        </Box>
                        <Box sx={{ fontSize: "20px", fontWeight: "300", marginTop: "10px" }}>
                            Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center", color: "#16bfbf", marginTop: "10px", fontSize: "23px" }}>
                            <IoArrowForwardCircleOutline />
                            <Box sx={{ fontSize: "18px", marginLeft: "10px" }}>
                                FIND MORE
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4} >
                        <Box>
                            <img src="https://demo18.houzez.co/wp-content/uploads/2020/09/image-1-1024x683.jpg" alt="" style={{ width: "100%" }} />
                        </Box>
                        <Box sx={{ fontSize: "27px", fontWeight: "700", marginTop: "10px" }}>
                            Energy efficiency
                        </Box>
                        <Box sx={{ fontSize: "20px", fontWeight: "300", marginTop: "10px" }}>
                            Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center", color: "#16bfbf", marginTop: "10px", fontSize: "23px" }}>
                            <IoArrowForwardCircleOutline />
                            <Box sx={{ fontSize: "18px", marginLeft: "10px" }}>
                                FIND MORE
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4} >
                        <Box>
                            <img src="https://demo18.houzez.co/wp-content/uploads/2020/09/cozy-1-1024x683.jpg" alt="" style={{ width: "100%" }} />
                        </Box>
                        <Box sx={{ fontSize: "27px", fontWeight: "700", marginTop: "10px" }}>
                            High comfort
                        </Box>
                        <Box sx={{ fontSize: "20px", fontWeight: "300", marginTop: "10px" }}>
                            Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center", color: "#16bfbf", marginTop: "10px", fontSize: "23px" }}>
                            <IoArrowForwardCircleOutline />
                            <Box sx={{ fontSize: "18px", marginLeft: "10px" }}>
                                FIND MORE
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
                <Box sx={{ width: "100%", height: "80px" }}></Box>
            </Container>
        </Box>
    )
}

export default Section6