import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import "./Team.css"
function Team() {
    return (
        <Box sx={{ backgroundImage: "url('/assets/img/bggg.png')", backgroundAttachment: 'fixed', pb: '2rem' }}>
            <Container>
                <Typography variant='h2' className='team-h'>Our District Team</Typography>
                <Grid container className="main">
                    <Grid item className="profile-card">
                        <div className="img">
                            <img alt='' src="/assets/img/logo.png" />
                        </div>
                        <div className="caption">
                            <h3>Lion's Name</h3>
                            <p>Cabinet Treasurer</p>

                        </div>
                    </Grid>
                    <Grid item className="profile-card">
                        <div className="img">
                            <img alt='' src="/assets/img/logo.png" />
                        </div>
                        <div className="caption">
                            <h3>Lion's Name</h3>
                            <p>GAT Coordinator</p>

                        </div>
                    </Grid>
                    <Grid item className="profile-card">
                        <div className="img">
                            <img alt='' src="/assets/img/logo.png" />
                        </div>
                        <div className="caption">
                            <h3>Lion's Name</h3>
                            <p>GST Coordinator</p>

                        </div>
                    </Grid>
                    <Grid item className="profile-card">
                        <div className="img">
                            <img alt='' src="/assets/img/logo.png" />
                        </div>
                        <div className="caption">
                            <h3>Lion's Name</h3>
                            <p>GMT Coordinator</p>

                        </div>
                    </Grid>
                </Grid>
                <div className="main">
                    <div className="profile-card">
                        <div className="img">
                            <img alt='' src="/assets/img/logo.png" />
                        </div>
                        <div className="caption">
                            <h3>Lion's Name</h3>
                            <p>GLT Coordinator</p>

                        </div>
                    </div>
                    <div className="profile-card">
                        <div className="img">
                            <img alt='' src="/assets/img/logo.png" />
                        </div>
                        <div className="caption">
                            <h3>Lion's Name</h3>
                            <p>LCIF Coordinator</p>

                        </div>
                    </div>
                    <div className="profile-card">
                        <div className="img">
                            <img alt='' src="/assets/img/logo.png" />
                        </div>
                        <div className="caption">
                            <h3>Lion's Name</h3>
                            <p>PRO</p>

                        </div>
                    </div>
                    <div className="profile-card">
                        <div className="img">
                            <img alt='' src="/assets/img/logo.png" />
                        </div>
                        <div className="caption">
                            <h3>Lion's Name</h3>
                            <p>Editor</p>

                        </div>
                    </div>
                </div>
            </Container>
        </Box>
    )
}

export default Team