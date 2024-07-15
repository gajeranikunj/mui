import { Box, Button, Container, Grid } from '@mui/material'
import React from 'react'

function Section7() {
    return (
        <Box sx={{ backgroundImage: "url(https://demo18.houzez.co/wp-content/uploads/2020/09/gallery-3.jpg)", minHeight: "860px",backgroundAttachment:"fixed" }}>
            <Container sx={{ height: "860px", display: "flex", justifyContent: "center", alignItems: "center" }} >
                <Grid container sx={{ width:{ xs:"70%", md: "98%" } }}>
                    <Grid md={6} sx={{ display: { xs: "none", md: "block" } }}>
                        
                    </Grid>
                    <Grid md={6} xs={12} sx={{ backgroundColor: "white", padding: "81px" }}>
                        <Box sx={{ fontSize: "45px", fontWeight: "700", }}>
                            Only high-end quality materials
                        </Box>
                        <Box sx={{ fontSize: "20px", fontWeight: "300", marginTop: "30px" }}>
                            This demo can be used by developer companies which want to present their real estate projects taking advantage of the Houzez features
                        </Box>
                        <Button sx={{ color: "white", padding: "10px 25px", backgroundColor: "#16BFBF", marginTop: "30px" }}>
                            Request our brochure
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Section7