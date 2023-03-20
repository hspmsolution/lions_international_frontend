import useStyles from './Styles';
import { Avatar, Box, Card, CardContent, List, ListItem, ListItemIcon, ListItemText, Paper, Typography } from '@mui/material';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import GroupsIcon from '@mui/icons-material/Groups';
import { faFacebookF, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';

export default function ProfileCard(props) {
    const {name, designation, club, description} = props;
    const classes = useStyles();
    const socialIcos = [
        <FontAwesomeIcon icon={faFacebookF} />,
        <FontAwesomeIcon icon={faTwitter} />,
        <FontAwesomeIcon icon={faInstagram} />,
        <FontAwesomeIcon icon={faLinkedin} />
    ];

    return (
            <Card sx={{ minWidth: 275, height: 500, maxWidth: 300, margin: '10px' }}>
                <CardContent className={classes.cardContent}>
                    <div className={classes.cardHeaders}>
                        <Avatar
                            className={classes.avatar}
                            alt={""}
                            src={""}
                            sx={{ width: '120px', height: '120px' }}>
                            {"user"?.result?.name?.charAt(0)}
                        </Avatar>
                        <Typography variant="h5" color="text.secondary" component="div" className={classes.content}>
                            {name}
                        </Typography>
                        <Typography variant='subtitle' color="text.secondary" gutterBottom className={classes.content}>
                            example@gmail.com
                        </Typography>
                    </div>
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            '& > :not(style)': {
                                m: 1,
                                // width: 270,
                            },
                        }}
                    >
                        <Paper elevation={0} >
                            <List>
                                <ListItem>
                                    <ListItemIcon>
                                        <PersonOutlineIcon />
                                    </ListItemIcon>
                                    <ListItemText id="switch-list-label-darkMode" primary={designation} />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <GroupsIcon />
                                    </ListItemIcon>
                                    <ListItemText id="switch-list-label-language" primary={club} />
                                </ListItem>
                                <ListItem sx={{ minHeight: 120 }}>
                                    <ListItemText sx={{ textAlign: 'justify' }} id="switch-list-label-setting" primary={description} />
                                </ListItem>
                                <ListItem sx={{ justifyContent: 'center' }}>
                                    <Box className={classes.socialIcons}>
                                        {socialIcos.map((item, index) => (
                                            <Link key={index}>
                                                {item}
                                            </Link>
                                        ))}
                                    </Box>
                                </ListItem>
                            </List>
                        </Paper>
                    </Box>
                </CardContent>
            </Card>
    )
}