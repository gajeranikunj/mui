import { Box } from '@mui/material'
import React from 'react'
import { SlSocialFacebook } from "react-icons/sl";
import { RiTwitterXFill } from "react-icons/ri";
import { FaGooglePlusG, FaPinterestP, FaYoutube } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import { BiLogoInstagram, BiLogoYelp } from "react-icons/bi";
import { SiBehance } from 'react-icons/si';

function Footer() {
    return (
        <>
            <Box sx={{ backgroundColor: "#00233D", padding: "30px 0px", color: "white" }}>
                <Box sx={{ width: "80%", margin: "auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" }}>
                    <Box sx={{ display: "flex", alignItems: "center", width: "100px" }}>
                        <SlSocialFacebook />
                        <Box sx={{ marginLeft: "5px" }}>Facebook</Box>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", width: "100px" }}>
                        <RiTwitterXFill />
                        <Box sx={{ marginLeft: "5px" }}> Twitter </Box>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", width: "100px" }}>
                        <FaGooglePlusG />
                        <Box sx={{ marginLeft: "5px" }}>Google +</Box>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", width: "100px" }}>
                        <TiSocialLinkedin />
                        <Box sx={{ marginLeft: "5px" }}>Linkedin</Box>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", width: "100px" }}>
                        <BiLogoInstagram />
                        <Box sx={{ marginLeft: "5px" }}> Instagram </Box>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", width: "100px" }}>
                        <FaPinterestP />
                        <Box sx={{ marginLeft: "5px" }}> Pinterest </Box>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", width: "100px" }}>
                        <BiLogoYelp />
                        <Box sx={{ marginLeft: "5px" }}> Yelp </Box>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", width: "100px" }}>
                        <SiBehance />
                        <Box sx={{ marginLeft: "5px" }}> Behance </Box>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", width: "100px" }}>
                        <FaYoutube />
                        <Box sx={{ marginLeft: "5px" }}> Youtube </Box>
                    </Box>
                </Box>
                <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", marginTop: "50px"}}>
                    <img src="https://demo18.houzez.co/wp-content/themes/houzez/img/logo-houzez-white.png" style={{ width: "150px" }} alt="" />
                </Box>
                <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", marginTop: "50px"}}>
                © Houzez - All rights reserved
                </Box>
            </Box>
        </>
    )
}

export default Footer