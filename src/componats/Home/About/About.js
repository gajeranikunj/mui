import React from 'react'
import CNavbare from '../../CNavbare'
import Footer from '../../Footer'
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import As1 from './As1';
import As2 from './As2';
function About() {
    return (
        <>
            <CNavbare />
            <As1 />
            <As2 />

            <Footer />
        </>
    )
}

export default About