import React from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
import CNavbare from '../CNavbare'
import Footer from '../Footer'
import Titels from '../Titels'
import Sfooter from '../Sfooter'
import Gotop from '../gotop/Gotop'

function Services() {
    return (
        <>
            <CNavbare />
            <Titels url={"https://demo18.houzez.co/wp-content/uploads/2020/09/image-10.jpg"} Name={"Services"} />

            <Container sx={{ marginBottom: "50px" }}>
                <Grid container sx={{ justifyContent: "space-around", marginTop: '50px' }}>
                    <Grid lg={5} ><img src="https://demo18.houzez.co/wp-content/uploads/elementor/thumbs/image-14-ovlybm96lfqpjhmpwlmp835quzmmuwwwzi4qlq9g00.jpg" alt="" width={'100%'} /></Grid>
                    <Grid lg={5}>
                        <Typography sx={{ fontSize: "30px", color: '#16BFBF' }}>Design</Typography>

                        <Typography sx={{ fontSize: "40px", fontWeight: "600", lineHeight: "1", marginTop: '20px' }}>Vivamus eu sem vehicula, commodo massa at</Typography>
                        <Typography variant='h6' sx={{ marginTop: "40px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis et sem sed sollicitudin. Donec non odio neque.</Typography>
                    </Grid>
                </Grid>


                <Grid container sx={{ justifyContent: "space-around", marginTop: '50px' }}>
                    <Grid lg={5} order={{ xs: 2, lg: 1 }}>
                        <Typography sx={{ fontSize: "30px", color: '#16BFBF' }}>Production</Typography>
                        <Typography sx={{ fontSize: "40px", fontWeight: "600", lineHeight: "1", marginTop: '20px' }}>Sed vitae nibh aliquam neque porta tempor</Typography>
                        <Typography variant='h6' sx={{ marginTop: "40px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis et sem sed sollicitudin. Donec non odio neque.</Typography>
                    </Grid>

                    <Grid lg={5} order={{ xs: 1, lg: 2 }}   ><img src="https://demo18.houzez.co/wp-content/uploads/elementor/thumbs/gallery-3-ovgv0urxx0j618pb1qyucrggly3cpza4qnoeu0bbk0.jpg" alt="" width={'100%'} /></Grid>
                </Grid>


                <Grid container sx={{ justifyContent: "space-around", marginTop: '50px' }}>
                    <Grid lg={5} > <img src="https://demo18.houzez.co/wp-content/uploads/elementor/thumbs/image-16-ovlyiavv70w43nx6vhn6yefqxmollfg78l51gkcnr4.jpg" alt="" width={'100%'} /></Grid>
                    <Grid lg={5}>
                        <Typography sx={{ fontSize: "30px", color: '#16BFBF' }}>
                            Delivery</Typography>
                        <Typography sx={{ fontSize: "40px", fontWeight: "600", lineHeight: "1", marginTop: '20px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Typography>
                        <Typography variant='h6' sx={{ marginTop: "40px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis et sem sed sollicitudin. Donec non odio neque.</Typography>
                    </Grid>
                </Grid>
            </Container>
            <Sfooter />
            <Footer />
            <Gotop/>

        </>
    )
}

export default Services