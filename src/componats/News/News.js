import React, { useEffect, useState } from 'react'
import CNavbare from '../CNavbare'
import Footer from '../Footer'
import { Avatar, Box, Button, Container, Grid, Pagination } from '@mui/material'
import { MdKeyboardArrowRight } from "react-icons/md"
import { FaRegCalendarAlt } from "react-icons/fa";
import { LiaTagSolid } from "react-icons/lia";
import { LuMessageSquare } from "react-icons/lu";
import Gotop from '../gotop/Gotop'

function News() {

    const [page, setPage] = useState(1);
    const rowsPerPage = 10;

    const handleChange = (event, value) => {
        setPage(value);
    };
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }, [page])
    const [typeofdata, settypeofdata] = useState("All");
    const [tod, settog] = useState(true);
    const data = [{
        url: "https://demo18.houzez.co/wp-content/uploads/2020/09/gallery-3.jpg",
        p1: "Skills That You Can Learn In The Real Estate Market",
        p2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis et sem sed sollicitudin. Donec non odio neque. Aliquam hendrerit sollicitudin purus, quis rutrum mi accumsan nec. Quisque bibendum orci ac nibh facilisis, at malesuada orci congue. Nullam tempus sollicitudin cursus. Ut et adipiscing erat. Curabitur this is a text link libero tempus congue. Duis mattis laoreet neque, et...",
        type: "Business",
        time: "March 2016"
    }, {
        url: "https://demo18.houzez.co/wp-content/uploads/2020/09/cozy-1-1024x683.jpg",
        p1: "Learn The Truth About Real Estate Industry",
        p2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis et sem sed sollicitudin. Donec non odio neque. Aliquam hendrerit sollicitudin purus, quis rutrum mi accumsan nec. Quisque bibendum orci ac nibh facilisis, at malesuada orci congue. Nullam tempus sollicitudin cursus. Ut et adipiscing erat. Curabitur this is a text link libero tempus congue. Duis mattis laoreet neque, et...",
        type: "Construction",
        time: "March 2016"
    }, {
        url: "https://demo18.houzez.co/wp-content/uploads/2020/09/image-7.jpg",
        p1: "10 Quick Tips About Business Development",
        p2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis et sem sed sollicitudin. Donec non odio neque. Aliquam hendrerit sollicitudin purus, quis rutrum mi accumsan nec. Quisque bibendum orci ac nibh facilisis, at malesuada orci congue. Nullam tempus sollicitudin cursus. Ut et adipiscing erat. Curabitur this is a text link libero tempus congue. Duis mattis laoreet neque, et...",
        type: "Real Estate",
        time: "March 2016"
    }, {
        url: "https://demo18.houzez.co/wp-content/uploads/2020/09/image-2-1024x683.jpg",
        p1: "14 Common Misconceptions About Business Development",
        p2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis et sem sed sollicitudin. Donec non odio neque. Aliquam hendrerit sollicitudin purus, quis rutrum mi accumsan nec. Quisque bibendum orci ac nibh facilisis, at malesuada orci congue. Nullam tempus sollicitudin cursus. Ut et adipiscing erat. Curabitur this is a text link libero tempus congue. Duis mattis laoreet neque, et...",
        type: "Real Estate",
        time: "March 2016"
    }, {
        url: "https://demo18.houzez.co/wp-content/uploads/2020/09/gallery-4-1024x683.jpg",
        p1: "10 Things Your Competitors Can Teach You About Real Estate",
        p2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis et sem sed sollicitudin. Donec non odio neque. Aliquam hendrerit sollicitudin purus, quis rutrum mi accumsan nec. Quisque bibendum orci ac nibh facilisis, at malesuada orci congue. Nullam tempus sollicitudin cursus. Ut et adipiscing erat. Curabitur this is a text link libero tempus congue. Duis mattis laoreet neque, et...",
        type: "Business",
        time: "March 2016"
    }, {
        url: "https://demo18.houzez.co/wp-content/uploads/2020/09/gallery-1-1024x683.jpg",
        p1: "Why We Love Real Estate",
        p2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis et sem sed sollicitudin. Donec non odio neque. Aliquam hendrerit sollicitudin purus, quis rutrum mi accumsan nec. Quisque bibendum orci ac nibh facilisis, at malesuada orci congue. Nullam tempus sollicitudin cursus. Ut et adipiscing erat. Curabitur this is a text link libero tempus congue. Duis mattis laoreet neque, et...",
        type: "Construction",
        time: "March 2016"
    }, {
        url: "https://demo18.houzez.co/wp-content/uploads/2020/09/gallery-6-1024x683.jpg",
        p1: "10 Quick Tips About Real Estate",
        p2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis et sem sed sollicitudin. Donec non odio neque. Aliquam hendrerit sollicitudin purus, quis rutrum mi accumsan nec. Quisque bibendum orci ac nibh facilisis, at malesuada orci congue. Nullam tempus sollicitudin cursus. Ut et adipiscing erat. Curabitur this is a text link libero tempus congue. Duis mattis laoreet neque, et...",
        type: "Real Estate",
        time: "March 2016"
    }, {
        url: "https://demo18.houzez.co/wp-content/uploads/2020/09/image-6.jpg",
        p1: "15 Best Blogs To Follow About Real Estate",
        p2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis et sem sed sollicitudin. Donec non odio neque. Aliquam hendrerit sollicitudin purus, quis rutrum mi accumsan nec. Quisque bibendum orci ac nibh facilisis, at malesuada orci congue. Nullam tempus sollicitudin cursus. Ut et adipiscing erat. Curabitur this is a text link libero tempus congue. Duis mattis laoreet neque, et...",
        type: "Real Estate",
        time: "March 2016"
    }, {
        url: "https://demo18.houzez.co/wp-content/uploads/2020/09/image-3-1024x683.jpg",
        p1: "5 Tools Everyone In The Real Estate Industry Should Be Using",
        p2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis et sem sed sollicitudin. Donec non odio neque. Aliquam hendrerit sollicitudin purus, quis rutrum mi accumsan nec. Quisque bibendum orci ac nibh facilisis, at malesuada orci congue. Nullam tempus sollicitudin cursus. Ut et adipiscing erat. Curabitur this is a text link libero tempus congue. Duis mattis laoreet neque, et...",
        type: "Business",
        time: "March 2016"
    }
        , {
        url: "https://demo18.houzez.co/wp-content/uploads/2020/09/gallery-7-1024x683.jpg",
        p1: "The Ultimate Cheat Sheet On Real Estate",
        p2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis et sem sed sollicitudin. Donec non odio neque. Aliquam hendrerit sollicitudin purus, quis rutrum mi accumsan nec. Quisque bibendum orci ac nibh facilisis, at malesuada orci congue. Nullam tempus sollicitudin cursus. Ut et adipiscing erat. Curabitur this is a text link libero tempus congue. Duis mattis laoreet neque, et...",
        type: "Construction",
        time: "March 2016"
    }
        , {
        url: "https://demo18.houzez.co/wp-content/uploads/2020/09/gallery-5-1024x683.jpg",
        p1: "Understand The Real Estate Market",
        p2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis et sem sed sollicitudin. Donec non odio neque. Aliquam hendrerit sollicitudin purus, quis rutrum mi accumsan nec. Quisque bibendum orci ac nibh facilisis, at malesuada orci congue. Nullam tempus sollicitudin cursus. Ut et adipiscing erat. Curabitur this is a text link libero tempus congue. Duis mattis laoreet neque, et...",
        type: "Business",
        time: "January 2016"
    }, {
        url: "https://demo18.houzez.co/wp-content/uploads/2020/09/image-5-1024x683.jpg",
        p1: "Real Estate Industry and Competitors",
        p2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis et sem sed sollicitudin. Donec non odio neque. Aliquam hendrerit sollicitudin purus, quis rutrum mi accumsan nec. Quisque bibendum orci ac nibh facilisis, at malesuada orci congue. Nullam tempus sollicitudin cursus. Ut et adipiscing erat. Curabitur this is a text link libero tempus congue. Duis mattis laoreet neque, et...",
        type: "Construction",
        time: "January 2016"
    }
    ]

    const [showdata, setshowdata] = useState(data)

    useEffect(() => {
        window.scrollTo({ top: 0 })
        if (typeofdata != "All") {
            if (tod) {
                setshowdata(
                    data.filter((item) => {
                        return item.type == typeofdata
                    })
                )
            } else {
                setshowdata(
                    data.filter((item) => {
                        return item.time == typeofdata
                    })
                )
            }
        } else {
            setshowdata(data)
        }
        console.log(showdata);
    }, [typeofdata])

    return (
        <>
            <CNavbare />
            <Box sx={{ backgroundColor: "#f8f8f8" }}>
                <Container sx={{ marginTop: "20px" }}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={9}>
                            {
                                showdata.slice((page - 1) * rowsPerPage, page * rowsPerPage).map((dat, ind) => {
                                    return (
                                        <Box sx={{ width: "100%", backgroundColor: "white", marginTop: ind != 0 ? "70px" : "0px" }}>
                                            <Box sx={{ width: "100%" }}>
                                                <img src={dat.url} style={{ width: "100%" }} alt="" />
                                            </Box>
                                            <Box sx={{ padding: "30px" }}>
                                                <Box sx={{
                                                    fontSize: "33px",
                                                    fontWeight: "700",
                                                    cursor: "pointer",
                                                    '&:hover': {
                                                        color: '#16BFBF'
                                                    },
                                                }}>
                                                    {dat.p1}
                                                </Box>
                                                <Box sx={{ fontSize: "17px", fontWeight: "100", marginTop: "30px" }}>
                                                    {dat.p2}
                                                </Box>
                                            </Box>
                                            <Box>
                                                <hr />
                                            </Box>
                                            <Box sx={{
                                                padding: "30px",
                                                display: "flex",
                                                justifyContent: "space-between",
                                                flexWrap: "wrap"
                                            }}>
                                                <Box sx={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
                                                    <Avatar alt="Remy Sharp" src="https://demo18.houzez.co/wp-content/uploads/2020/09/agent.jpg" sx={{ width: "40px", height: "40px" }} />
                                                    <Box sx={{ margin: "7px" }}>
                                                        by Susan Vega
                                                    </Box>
                                                    <Box sx={{ margin: "7px", display: "flex", alignItems: "center" }}>
                                                        <FaRegCalendarAlt />
                                                        <Box sx={{ margin: "7px" }}> 8 years ago </Box>
                                                    </Box>
                                                    <Box sx={{ margin: "7px", display: "flex", alignItems: "center" }}>
                                                        <LiaTagSolid style={{ fontSize: "22px" }} />
                                                        <Box sx={{ margin: "7px", color: "#16BFBF" }}>{dat.type}</Box>
                                                    </Box>
                                                    <Box sx={{ margin: "7px", display: "flex", alignItems: "center" }}>
                                                        <LuMessageSquare style={{ fontSize: "22px" }} />
                                                        <Box sx={{ margin: "7px" }}>0</Box>
                                                    </Box>
                                                </Box>
                                                <Box sx={{ display: "flex", alignItems: "center" }}>
                                                    <Button sx={{
                                                        backgroundColor: "#16bfbf",
                                                        color: "white",
                                                        padding: "7px 20px",
                                                        '&:hover': {
                                                            backgroundColor: '#00cbcb',
                                                        },
                                                    }}>
                                                        Read More
                                                    </Button>
                                                </Box>
                                            </Box>
                                        </Box>
                                    )
                                })
                            }
                            <Box sx={{ display: "flex", justifyContent: "center", marginTop: "50px", marginBottom: "10px" }}>
                                <Pagination
                                    count={Math.ceil(data.length / rowsPerPage)}
                                    page={page}
                                    onChange={handleChange}
                                    variant="outlined"
                                    shape="rounded"
                                    style={{ marginTop: '16px' }}
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={3} >
                            <Box sx={{ position: "sticky", top: "10px" }}>
                                <Box sx={{ backgroundColor: "white", padding: "20px" }}>
                                    <Box >
                                        <Box sx={{ fontSize: "18px" }}>Categories</Box>
                                    </Box>
                                    <Box sx={{ color: "#6EC1E4", marginTop: "10px" }}>
                                        <Box sx={{ marginTop: "5px" }} onClick={() => { settypeofdata("All"); settog(true) }}><MdKeyboardArrowRight />All</Box>
                                        <Box sx={{ marginTop: "5px" }} onClick={() => { settypeofdata("Business"); settog(true) }}><MdKeyboardArrowRight />Business</Box>
                                        <Box sx={{ marginTop: "5px" }} onClick={() => { settypeofdata("Construction"); settog(true) }}><MdKeyboardArrowRight />Construction</Box>
                                        <Box sx={{ marginTop: "5px" }} onClick={() => { settypeofdata("Real Estate"); settog(true) }}><MdKeyboardArrowRight />Real Estate</Box>
                                    </Box>
                                </Box>

                                <Box sx={{ backgroundColor: "white", padding: "20px", marginTop: "30px" }}>
                                    <Box >
                                        <Box sx={{ fontSize: "18px" }}>Archives</Box>
                                    </Box>
                                    <Box sx={{ color: "#6EC1E4", marginTop: "10px" }}>
                                        <Box sx={{ marginTop: "5px" }} onClick={() => { settypeofdata("March 2016"); settog(false) }}><MdKeyboardArrowRight />March 2016</Box>
                                        <Box sx={{ marginTop: "5px" }} onClick={() => { settypeofdata("January 2016"); settog(false) }}><MdKeyboardArrowRight />January 2016</Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Footer />
            <Gotop/>
        </>
    )
}

export default News