import React, { useState } from "react";
import CNavbare from "../CNavbare";
import Footer from "../Footer";
import Titels from "../Titels";
import { Box, Container, Grid, MenuItem, Select, TextField } from "@mui/material";

function Contact_us() {
  const [age, setAge] = React.useState('');
  const [type, settype] = React.useState('');

  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const handleChange2 = (event) => {
    settype(event.target.value);
  };
  return (
    <>
      <CNavbare />
      <Titels
        url={"https://demo18.houzez.co/wp-content/uploads/2020/09/image-14.jpg"}
        Name={"Contact us"}
      />
      <Box>
        <Container maxWidth="md">
          <Box sx={{ width: "85%", margin: "auto" }}>

            <Box sx={{ fontSize: "22px", color: "gray" }}>
              The Inquiry Form widget allows you to design unique forms to capture your leads. This form automatically connects with the integrated Houzez CRM and your email inbox to keep everything on track.
            </Box>
            <form>
              <Box sx={{ marginTop: "80px", fontSize: "25px" }}>
                Information
              </Box>
              <Select
                value={age}
                onChange={handleChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
                sx={{ width: "100%", marginTop: "10px" }}

              >
                <MenuItem value="">I'm a</MenuItem>
                <MenuItem value={20}>I'm a real estate agent</MenuItem>
                <MenuItem value={30}>I'm a property owner</MenuItem>
              </Select>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} sx={{ marginTop: "15px" }}>
                  <TextField
                    aria-required
                    id="outlined-required"
                    label="First Name"
                    type="text"
                    sx={{ width: "100%" }}
                  />
                </Grid>
                <Grid item xs={12} sm={6} sx={{ marginTop: "15px" }}>
                  <TextField
                    aria-required
                    id="outlined-required"
                    label="Last Name"
                    type="text"
                    sx={{ width: "100%" }}
                  />
                </Grid>
                <Grid item xs={12} sm={6} >
                  <TextField
                    aria-required
                    id="outlined-required"
                    label="Email Address"
                    type="email"
                    sx={{ width: "100%" }}
                  />
                </Grid>
                <Grid item xs={12} sm={6} >
                  <TextField
                    aria-required
                    id="outlined-basic"
                    label="Mobile"
                    type="number"
                    variant="outlined"
                    value={inputValue}
                    onInput={(e) => {
                      let value = e.target.value;
                      value = value.replace(/\D/g, '').slice(0, 10);
                      setInputValue(value);
                      if (value.length === 10) {
                        console.log(value);
                      }
                    }}
                    sx={{ width: "100%" }}
                  />
                </Grid>
              </Grid>

              <Box sx={{ marginTop: "30px", fontSize: "25px" }}>
                Property

              </Box>
              <Select
                value={type}
                onChange={handleChange2}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
                sx={{ width: "100%", marginTop: "10px" }}

              >
                <MenuItem value="">Select type</MenuItem>
                <MenuItem value="Large Luxury Villa"> Large Luxury Villa</MenuItem>
                <MenuItem value=" Single Family Home"> Single Family Home</MenuItem>
              </Select>
              <Grid container spacing={2}>
                <Grid item xs={12} sx={{ marginTop: "15px" }}>
                  <TextField
                    aria-required
                    label="Your budget"
                    type="number"
                    sx={{ width: "100%" }}
                  />
                </Grid>

                <Grid item xs={12} sm={6} >
                  <TextField
                    aria-required
                    id="outlined-required"
                    label="Email Address"
                    type="email"
                    sx={{ width: "100%" }}
                  />
                </Grid>
                <Grid item xs={12} sm={6} >
                  <TextField
                    onChange={handleChange}
                    aria-required
                    id="outlined-basic"
                    label="Mobile"
                    type="number"
                    variant="outlined"
                    value={inputValue}
                    onInput={(e) => {
                      let value = e.target.value;
                      value = value.replace(/\D/g, '').slice(0, 10);
                      setInputValue(value);
                      if (value.length === 10) {
                        console.log(value);
                      }
                    }}
                    sx={{ width: "100%" }}
                  />
                </Grid>
              </Grid>



            </form>
          </Box>

        </Container>
      </Box>
      <Footer />
    </>
  );
}

export default Contact_us;
