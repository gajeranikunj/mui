import { Box, Container, Grid } from '@mui/material';
import React from 'react';

function As2() {
    
    return (
        <>
            <Box>
                <Container>
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Box sx={{ width: "150px", height: "3px", backgroundColor: "#16BFBF" }}>
                        </Box>
                    </Box>
                    <Box sx={{ textAlign: "center", fontSize: "40px", fontWeight: "700" }}>
                        We have been building houses for over 150 years
                    </Box>
                    <Grid container spacing={2} sx={{ color: "#54595F", lineHeight: "1.8", marginTop: "70px" }}>
                        <Grid item xs={12} md={6}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam massa purus, bibendum gravida orci nec, porta efficitur tellus. Nullam lacus enim, venenatis at enim et, fringilla sodales odio. Donec nec erat ac elit blandit facilisis dictum a neque. Vestibulum sem lectus, aliquet semper erat at, elementum congue mauris. Phasellus non rhoncus justo. Aliquam id porttitor massa. Vestibulum ornare ornare arcu, eget convallis nisl fringilla non.
                        </Grid>
                        <Grid item xs={12} md={6}>
                            Cras cursus est a leo volutpat, vitae convallis mauris bibendum. In vel ante nec lectus posuere blandit. Fusce suscipit pellentesque quam, nec consectetur orci molestie eu. Nunc ultricies erat ac erat aliquet, a consectetur dui mollis. Donec ut ex tellus. Donec commodo consectetur massa nec laoreet. Duis enim est, hendrerit in odio nec, venenatis fermentum nunc. Nulla egestas magna non lorem sollicitudin, eu pharetra sem convallis.
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} className='numlist' style={{ marginTop: "10px" }} >
                        <Grid item xs={12} md={3}>{`100+`}</Grid>
                        <Grid item xs={12} md={3}>{`150+`}</Grid>
                        <Grid item xs={12} md={3}>{`78+`}</Grid>
                        <Grid item xs={12} md={3}>{`230+`}</Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    )
}

export default As2;
