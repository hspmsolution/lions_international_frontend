import { Avatar, Grid, Paper, styled, Typography } from '@mui/material';
import './DGTeam.css';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function DGTeam() {
    return (
        <>
            <div className='dgTeam' style={{ fontFamily: "'Aboreto', cursive" }}>DG Team</div>
            <Grid container spacing={2}>
                <Grid item xs={10} className='gov'>
                    <Item className='item'>
                        <Avatar
                            alt="Remy Sharp"
                            src={'/assets/img/7.jpg'}
                            sx={{ width: 200, height: 200, display: 'flex' }}
                        />
                        <Typography variant="h4" gutterBottom>
                            Ln. CA Abhay Shastri
                        </Typography>

                        Dear Members and Sevayatris,<br /><br />

                        Hearty welcome to this website, welcome from 6600 plus members, welcome from a Lions District that is spread in three Revenue Districts Pune, Nashik, and Ahmednagar in Maharashtra District in India. The District that is serving society with utmost empathy and passion with the help of strong 136 strong clubs!
                        This website attempts to focus on four important stakeholders.
                        Firstly, for the World at large, we shall introduce it to the noble activities that the District is carrying on in various fields. Activities that are prescribed by Lions International such as Diabetes, Hunger, Environment, Vision and Childhood Cancer. Also, in the field of SARITA the District programme. Clean Rivers, Adopting a girl child for education, Roti Bank (Annchhatra), I am Corona Warrior, Teach Value Education and Afforestation!
                        Secondly, the website will cater to the needs of Presidents and his team to motivate their clubs as regards to growth in Services, Membership and Leadership. Third stake holder that is Cabinet member will be pleased to see the dashboard depicting dynamic scores of Top Ten Clubs at any point of time and summarised information.
                        District Lion Members can explore events that took place, future events, About District leadership, various resources to enrich his experience as a Lion.
                        In all great work by our Website host HSPM Solutions! Keep an eye on this Website you will find it exciting and informative! It will motivate to “Sow Service Seeds and Unite in Kindness and Diversity”!

                        Ln CA Abhay Shastri,
                        District Governor
                    </Item>
                </Grid>
                <Grid item xs={12} sm={5} className='vcGov1'>
                    <Item className='item'>
                        <Avatar
                            alt="Remy Sharp"
                            src={'/assets/img/1st voice.jpeg'}
                            sx={{ width: 200, height: 200, display: 'flex' }}
                        />
                        <Typography variant="h4" gutterBottom>
                            Ln. Hemant Naik
                        </Typography>
                        <Typography variant="h5" gutterBottom>
                            1st Vice District Governor
                        </Typography>

                        Dear Lion Friends,<br /><br />

                        At the out set let me Congratulate you for being Elected / Appointed or given responsibility of various Position/ Portfolio in our District / club , I am sure every Lion member will be excited to contribute towards our moto " We Serve " through time , talent & treasure under the able Leadership of Our District Governor MJF CA Ln Abhay ji Shastri.
                        Yes we all are aware about today's Scinario of covid 19 World Wide , in this circumstances it is expected from us to contribute towards society as a Members of World's largest Volunteer Organization through International & District Program to serve the needy , It is said "where there is need there is Lion".
                        I personally feel that it's an opportunity to make an impact as an Organization , Club, & individual to be a great contributor in this situation of World Pandemic . I am sure we all will make an effort & help fellow citizens to uplift them from this situation so that our image as best Organization in the humanitarian service will be enhanced . Also it will help in more people joining our Organization to serve needy in the best of there capacity & ability . I also like to appeal you all to follow the guide lines given by respective Government during this pandemic & even in future to play our role as Good Citizens & to set an great example for the society.
                        Let's sow the seeds of services for human welfare as Lion Members for the betterment of our society we live in.

                        All the best & do well in your life.
                        Regards,
                        MJF Ln Hemant Naik.
                        FVDG.Dist 3234 D2.
                    </Item>
                </Grid>
                <Grid item xs={12} sm={5} className='vcGov2'>
                    <Item className='item'>
                        <Avatar
                            alt="Remy Sharp"
                            src={'/assets/img/7.jpg'}
                            sx={{ width: 200, height: 200, display: 'flex' }}
                        />
                        <Typography variant="h4" gutterBottom>
                            Ln. Rajesh Kothavade
                        </Typography>
                        <Typography variant="h5" gutterBottom>
                            2nd Vice District Governor
                        </Typography>

                        Dear Ever Serving Leaders,<br /><br />

                        Greetings!!
                        All of you already taken the responsibilities of leadership in your Club/ in our District Cabinet.
                        First, my best wishes to you, the leaders who will reverberate our Lions Club International President Lion Dr Jung-Yul Choi with “Kindness in Unity and Diversity” and MCC Lion Girish Malpani’s Give More along with District Governor Lion CA Abhay Shastri with “Sow Service Seeds” As Ever Serving Leaders, it is important for all of you to serve humanity, keeping in mind Lions Club International’s five areas of global causes: Vision, Diabetic, Childhood Cancer, Hunger and Environment, alongwith our District Governor’s SARITA program in Activities and Administration.
                        The success of your leadership revolves around creating opportunities for your members to serve humanity through your projects. As much as creativity and innovation in projects inspire us to serve the community, let us not forget to support permanent projects existing in your club, that have been consistently successful in delivering the needs of the community.
                        It is also important for you as a leader to work closely with the GAT team members, to promote and provide an opportunity for those who haven’t embraced Lions, by inviting them to join your club and serve humanity.
                        The LY year 2020-2021 is the year of challenging, due to COVID-19 pandemic situation. As Ever Serving Leaders, I urge you to spread the word, on the good work Lions has done to needy communities of this world. Do not shy away from asking people to donate to Lions Club International Foundation (LCIF), for worthy global causes that Lions does.
                        As office bearers, let us lead to uphold the theme of our year “Sow Service Seeds” and “Give More” with to community with Kindness in Unity and Diversity.
                        I & Lion Mrs. Sandhya, wish each one of you and the Lions family members, an eventful, fruitful and enjoyable year in serving humanity.

                        Yours in Lionism,
                        Lion Rajesh Kothavade,
                        SVDG Dist. 3234D2
                    </Item>
                </Grid>
            </Grid>
        </>
    )
}

export default DGTeam;