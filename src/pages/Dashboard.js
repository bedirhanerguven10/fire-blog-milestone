import React from 'react'
import {Box} from "@mui/material";
import BlogCard from '../components/BlogCard';


const Dashboard = () => {
  return (
    <Box sx={{ height: "100vh", marginTop: "4rem", backgroundImage:"url(https://picsum.photos/1600/900)", backgroundPosition:"center", backgroundRepeat:"no-repeat", backgroundSize:"cover", width:"1903px" }} maxWidth="1903px">
       <BlogCard />
    </Box>
  )
}

export default Dashboard
