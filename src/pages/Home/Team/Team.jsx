import { Container, Typography } from '@mui/material'
import React from 'react'
import "./Team.css"
function Team() {
    return (
        <Container>
            <Typography variant='h2' className='team-h'>Our Team</Typography>
            <div className="main">
                <div className="profile-card">
                    <div className="img">
                        <img alt='' src="/assets/img/logo.png" />
                    </div>
                    <div className="caption">
                        <h3>Santosh Sonar</h3>
                        <p>Cabinet Treasurer</p>

                    </div>
                </div>
                <div className="profile-card">
                    <div className="img">
                        <img alt='' src="/assets/img/logo.png" />
                    </div>
                    <div className="caption">
                        <h3>Vijay Sarda</h3>
                        <p>GAT Coordinator</p>

                    </div>
                </div>
                <div className="profile-card">
                    <div className="img">
                        <img alt='' src="/assets/img/logo.png" />
                    </div>
                    <div className="caption">
                        <h3>Sunita Chitnis</h3>
                        <p>GST Coordinator</p>

                    </div>
                </div>
                <div className="profile-card">
                    <div className="img">
                        <img alt='' src="/assets/img/logo.png" />
                    </div>
                    <div className="caption">
                        <h3>Shreyash Dixit</h3>
                        <p>GMT Coordinator</p>

                    </div>
                </div>
            </div>
            <div className="main">
                <div className="profile-card">
                    <div className="img">
                        <img alt='' src="/assets/img/logo.png" />
                    </div>
                    <div className="caption">
                        <h3>Ravi Satpute</h3>
                        <p>GLT Coordinator</p>

                    </div>
                </div>
                <div className="profile-card">
                    <div className="img">
                        <img alt='' src="/assets/img/logo.png" />
                    </div>
                    <div className="caption">
                        <h3>Sunil Jadhav</h3>
                        <p>LCIF Coordinator</p>

                    </div>
                </div>
                <div className="profile-card">
                    <div className="img">
                        <img alt='' src="/assets/img/logo.png" />
                    </div>
                    <div className="caption">
                        <h3>Rajesh Agarwal</h3>
                        <p>PRO</p>

                    </div>
                </div>
                <div className="profile-card">
                    <div className="img">
                        <img alt='' src="/assets/img/logo.png" />
                    </div>
                    <div className="caption">
                        <h3>Sabina Arun</h3>
                        <p>Editor</p>

                    </div>
                </div>
            </div>
        </Container>

    )
}

export default Team