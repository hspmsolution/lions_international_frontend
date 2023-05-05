import React from "react";
import './about.css'
import { Avatar, Box, Container, Typography } from "@mui/material";
import CustomizedBreadcrumbs from "../../components/Breadcrumb/Breadcrumb";

const About = () => {
    return (
        <>
            <div className="aboutGov">
                <CustomizedBreadcrumbs label={'About'} subLabel={'Governor'} />
                <Box sx={{ margin: '1rem' }}>
                    <Container className="aboutGovContainer">
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', margin: '2rem 0' }}>
                            <Avatar src={'/assets/img/7.jpg'} alt="our district governer" sx={{ mt: '1rem', width: '200px', height: '200px' }} />
                            <Typography variant="h4" className="itemTitle">
                                Ln. CA Abhay Shastri
                            </Typography>
                            <Typography variant="h5">
                                District Governor
                            </Typography>
                        </div>
                        <div className="dist-governer">
                            <p style={{ textAlign: 'justify' }}>
                                <b> Dear Members and Sevayatris,<br />
                                    Greetings from District D3234D2!</b><br /><br />
                                Hearty welcome to this website, welcome from 6600 plus members, welcome from a Lions District
                                that is spread
                                in three Revenue Districts Pune, Nashik, and Ahmednagar in Maharashtra District in India. The
                                District that
                                is serving society with utmost empathy and passion with the help of strong 136 strong clubs!
                                <br /><br />
                                This website attempts to focus on four important stakeholders. <br /><br />
                                Firstly, for the World at large, we shall introduce it to the noble activities that the District
                                is carrying
                                on in various fields. Activities that are prescribed by Lions International such as Diabetes,
                                Hunger,
                                Environment, Vision and Childhood Cancer. Also, in the field of SARITA the District programme.
                                Clean Rivers,
                                Adopting a girl child for education, Roti Bank (Annchhatra), I am Corona Warrior, Teach Value
                                Education and
                                Afforestation! <br /><br />
                                Secondly, the website will cater to the needs of Presidents and his team to motivate their clubs
                                as regards
                                to growth in Services, Membership and Leadership. Third stake holder that is Cabinet member will
                                be pleased
                                to see the dashboard depicting dynamic scores of Top Ten Clubs at any point of time and
                                summarised
                                information. <br /><br />
                                District Lion Members can explore events that took place, future events, About District
                                leadership, various
                                resources to enrich his experience as a Lion. <br /><br />
                                In all great work by our Website host HSPM Solutions! Keep an eye on this Website you will find
                                it exciting
                                and informative! It will motivate to "Sow Service Seeds and Unite in Kindness and Diversity"!
                                <br /><br />
                            </p>
                        </div>
                    </Container>
                </Box>
            </div>
        </>
    )
}

export default About;