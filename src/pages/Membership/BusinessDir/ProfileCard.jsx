import useStyles from './Styles';
import { Avatar, Box, Card, CardContent, List, ListItem, ListItemIcon, ListItemText, Paper, Typography } from '@mui/material';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import GroupsIcon from '@mui/icons-material/Groups';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

export default function ProfileCard(props) {
    const { name, designation, club, description } = props;
    const classes = useStyles();
    const socialIcos = [
        <FontAwesomeIcon icon={faPhone} />,
        <FontAwesomeIcon icon={faWhatsapp} />,
    ];

    return (
        <Card sx={{ minWidth: 275, height: 480, maxWidth: 300, margin: '10px' }}>
            <CardContent className={classes.cardContent}>
                <div className={classes.avatarBg}></div>
                <div className={classes.cardHeaders}>
                    <Box sx={{ position: 'absolute', height: '25%', width: '100%', top: 0 }}>
                        <img src='https://images.pexels.com/photos/1025469/pexels-photo-1025469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                            style={{ height: '100%', width: '100%' }}
                        />
                    </Box>
                    <Avatar
                        className={classes.avatar}
                        alt={""}
                        src={""}
                        sx={{ width: '120px', height: '120px', top: '45%' }}>
                        {"user"?.result?.name?.charAt(0)}
                    </Avatar>
                    <Typography variant="h5" color="text.secondary" component="div" className={classes.content}>
                        {name}
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
                        <List className='contentList'>
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