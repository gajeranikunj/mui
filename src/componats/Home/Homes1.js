import React from "react";
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { EffectFade, Autoplay } from "swiper/modules";
import { Box, Button } from "@mui/material";

function Homes1() {
  return (
    <>
      <Box sx={{ position: "relative" }}>
        <Swiper
          style={{ height: "800px" }}
          spaceBetween={30}
          effect={"fade"}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[EffectFade, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide style={{ position: "relative", overflow: "hidden" }}>
            <img src="https://demo18.houzez.co/wp-content/uploads/2020/09/image-9.jpg" style={{ width: "100%", position: "absolute", top: "0", left: "0" }} />
          </SwiperSlide>
          <SwiperSlide style={{ position: "relative", overflow: "hidden" }}>
            <img src="https://demo18.houzez.co/wp-content/uploads/2020/09/image-7.jpg" style={{ width: "100%", position: "absolute", top: "0", left: "0" }} />
          </SwiperSlide>
          <SwiperSlide style={{ position: "relative", overflow: "hidden" }}>
            <img src="https://demo18.houzez.co/wp-content/uploads/2020/09/image-12.jpg" style={{ width: "100%", position: "absolute", top: "0", left: "0" }} />
          </SwiperSlide>
        </Swiper>
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundColor: "black",
            opacity: "0.5",
            top: "0",
            left: "0",
            zIndex: "10",
          }}
        ></Box>
        <Box
          sx={{
            position: "absolute",
            top: { xs: "100px", md: "150px" },
            zIndex: "100",
            color: "white",
            width: { xs: "70%", md: "51%" },
            left: { xs: "50px", md: "10px" },
          }}
        >
          <Box sx={{ fontSize: { xs: "50px", md: "70px" }, lineHeight: "1.2", fontWeight: "700" }}>
            We have been building houses for over 150 years
          </Box>
          <Box
            sx={{
              fontSize: "25px",
              lineHeight: "1.2",
              fontWeight: "400",
              marginTop: "26px",
              width: "98%",
            }}
          >
            This demo can be used by developer companies which want to present
            their real estate projects taking advantage of the Houzez features
          </Box>
          <Button
            sx={{
              backgroundColor: "#2FA6A4",
              padding: "10px 20px",
              color: "white",
              fontSize: "20px",
              marginTop: "30px",
            }}
          >
            Request our brochure
          </Button>
        </Box>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          style={{
            backgroundColor: "transparent",
            position: "absolute",
            zIndex: "99",
            bottom: "0",
            width: "100%",
            height: "30px",
          }}
          preserveAspectRatio="none"
        >
          <path
            class="elementor-shape-fill"
            style={{ fill: "white" }}
            d="M790.5,93.1c-59.3-5.3-116.8-18-192.6-50c-29.6-12.7-76.9-31-100.5-35.9c-23.6-4.9-52.6-7.8-75.5-5.3
	c-10.2,1.1-22.6,1.4-50.1,7.4c-27.2,6.3-58.2,16.6-79.4,24.7c-41.3,15.9-94.9,21.9-134,22.6C72,58.2,0,25.8,0,25.8V100h1000V65.3
	c0,0-51.5,19.4-106.2,25.7C839.5,97,814.1,95.2,790.5,93.1z"
          ></path>
        </svg>
      </Box>
    </>
  );
}

export default Homes1;
