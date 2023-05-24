import { Box, Container, Paper } from '@mui/material'
import React from 'react'

function Terms() {
    return (
        <Box sx={{ paddingTop: '6rem', backgroundImage: "url('/assets/img/bggg.png')", minHeight: '100vh' }}>
            <Container sx={{ my: '3rem', minHeight: '400px', backgroundColor: 'white' }} className="aboutGovContainer">
                <Paper className="districtPaper ">
                    Terms-Conditions
                </Paper>
            </Container>
        </Box>
    )
}

export default Terms
