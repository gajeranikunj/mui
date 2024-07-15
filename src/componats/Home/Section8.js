import { Box, Container, Grid } from '@mui/material'
import React from 'react'
import { IoArrowForwardCircleOutline } from 'react-icons/io5'

function Section8() {
    return (
        <Box sx={{ width: "100%" }}>
            <Container sx={{ marginTop: '50px' }}>
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Box sx={{ width: "150px", height: "3px", backgroundColor: "#16BFBF" }}>
                    </Box>
                </Box>
                <Box sx={{ textAlign: "center", fontSize: "40px", fontWeight: "700" }}>
                    Testimonials & Partners
                </Box>
                <Grid container spacing={2} sx={{ marginTop: "50px" }}>

                    <Grid item xs={12} md={4} >
                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <img src="https://demo18.houzez.co/wp-content/uploads/2020/10/HomeyHost19-150x150.jpg" alt="" style={{ width: "150px", borderRadius: "50%" }} />
                        </Box>

                        <Box sx={{ fontSize: "20px", fontWeight: "300", marginTop: "10px", textAlign: "center" }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam massa purus, bibendum gravida orci nec, porta efficitur tellus
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "15px", fontSize: "18px" }}>
                            <Box>
                                by
                            </Box>
                            <Box sx={{ marginLeft: "10px", fontWeight: "600" }}>
                                Mike Sandoval
                            </Box>
                        </Box>
                        <Box sx={{ textAlign: "center", fontSize: "20px", fontWeight: "300" }}>
                            Project Manager, Constructions Inc.
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={4} >
                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <img src="https://demo18.houzez.co/wp-content/uploads/2020/10/HomeyHost08-150x150.jpg" alt="" style={{ width: "150px", borderRadius: "50%" }} />
                        </Box>

                        <Box sx={{ fontSize: "20px", fontWeight: "300", marginTop: "10px", textAlign: "center" }}>
                            Nullam lacus enim, venenatis at enim et, fringilla sodales odio. Donec nec erat ac elit blandit facilisis dictum a neque.
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "15px", fontSize: "18px" }}>
                            <Box>
                                by
                            </Box>
                            <Box sx={{ marginLeft: "10px", fontWeight: "600" }}>
                                Sam Peterson
                            </Box>
                        </Box>
                        <Box sx={{ textAlign: "center", fontSize: "20px", fontWeight: "300" }}>
                            Manager, Company Inc.
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4} >
                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <img src="https://demo18.houzez.co/wp-content/uploads/2020/10/HomeyRenter04-150x150.jpg" alt="" style={{ width: "150px", borderRadius: "50%" }} />
                        </Box>

                        <Box sx={{ fontSize: "20px", fontWeight: "300", marginTop: "10px", textAlign: "center" }}>
                            Vestibulum sem lectus, aliquet semper erat at, elementum congue mauris. Phasellus non rhoncus justo. Aliquam id porttitor massa.
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "15px", fontSize: "18px" }}>
                            <Box>
                                by
                            </Box>
                            <Box sx={{ marginLeft: "10px", fontWeight: "600" }}>
                                Kenya Soval
                            </Box>
                        </Box>
                        <Box sx={{ textAlign: "center", fontSize: "20px", fontWeight: "300" }}>
                            Manager, Buildings Inc.
                        </Box>
                    </Grid>

                </Grid>
                <Box sx={{ width: "100%", height: "80px" }}></Box>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" }}>
                    <Box sx={{ width: "200px", padding: "10px" }}>
                        <img src="https://demo18.houzez.co/wp-content/uploads/2020/09/partner-02-e1582734691936.jpg" alt="" />
                    </Box>
                    <Box sx={{ width: "200px", padding: "10px" }}>
                        <img src="https://demo18.houzez.co/wp-content/uploads/2020/09/partner-01-e1582734705113.jpg" alt="" />
                    </Box>
                    <Box sx={{ width: "200px", padding: "10px" }}>
                        <img src="https://demo18.houzez.co/wp-content/uploads/2020/09/partner-03-e1582734671602.jpg" alt="" />
                    </Box>
                    <Box sx={{ width: "200px", padding: "10px" }}>
                        <img src="https://demo18.houzez.co/wp-content/uploads/2020/09/partner-05-e1582734603812.jpg" alt="" />
                    </Box>
                    <Box sx={{ width: "200px", padding: "10px" }}>
                        <img src="https://demo18.houzez.co/wp-content/uploads/2020/09/partner-04-e1582734649458.jpg" alt="" />
                    </Box>
                </Box>
            </Container>

        </Box>
    )
}

export default Section8