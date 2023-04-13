import {Box } from '@mui/material'
import React from 'react'
import Posts from './Posts'


const Feed = () => {
  return (
    <Box  flex={4} alignItems={"center"} justifyContent={"center"}>
        <Posts />
        <Posts/>
        <Posts/>
        <Posts/>
        <Posts/>
        <Posts/>
    </Box>
  )
}

export default Feed
