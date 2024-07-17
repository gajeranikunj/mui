import React from 'react'
import CNavbare from '../CNavbare'
import Footer from '../Footer'
import Sfooter from '../Sfooter'
import Titels from '../Titels'
import { Container, Grid } from '@mui/material'

function Portfolio() {
  return (
    <>
      <CNavbare />
      <Titels Name={"Portfolio"} url={"https://demo18.houzez.co/wp-content/uploads/2020/09/gallery-3.jpg"} />
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>

          </Grid>
          <Grid item xs={12} md={6}>

          </Grid>

        </Grid>
      </Container>
      <Sfooter />
      <Footer />
    </>
  )
}

export default Portfolio