import React, { useState, useEffect } from 'react';
import useStyles from './Styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import TranslateOutlinedIcon from '@mui/icons-material/TranslateOutlined';
import { Avatar, Box, Card, CardContent, Container, List, ListItem, ListItemIcon, ListItemText, Paper, Switch, Typography } from '@mui/material';


const BusinessDir = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const [checked, setChecked] = React.useState(['wifi']);
  const classes = useStyles();

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('profile')));
  }, []);

  return (
    <>
      <Container className={classes.profileContainer} maxWidth="xl" style={{ margin: '100px 0 20px' }}>
        <Card sx={{ minWidth: 275, maxWidth: 300 }}>
          <CardContent className={classes.cardContent}>
            <div className={classes.cardHeaders}>
              <Avatar
                className={classes.avatar}
                alt={user?.result?.name}
                src={user?.result?.picture}
                sx={{ width: '120px', height: '120px' }}>
                {user?.result?.name?.charAt(0)}
              </Avatar>
              <Typography variant="h5" color="text.secondary" component="div" className={classes.content}>
                John Doe
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
                      <Brightness4Icon />
                    </ListItemIcon>
                    <ListItemText id="switch-list-label-darkMode" primary="Dark Mode" />
                    <Switch
                      edge="end"
                      onChange={handleToggle('darkMode')}
                      checked={checked.indexOf('darkMode') !== -1}
                      inputProps={{
                        'aria-labelledby': 'switch-list-label-darkMode',
                      }}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <TranslateOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText id="switch-list-label-language" primary="Preferred Language" />
                    <Switch
                      edge="end"
                      onChange={handleToggle('language')}
                      checked={checked.indexOf('language') !== -1}
                      inputProps={{
                        'aria-labelledby': 'switch-list-label-language',
                      }}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <InfoOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText id="switch-list-label-setting" primary="Another Setting" />
                    <Switch
                      edge="end"
                      onChange={handleToggle('setting')}
                      checked={checked.indexOf('setting') !== -1}
                      inputProps={{
                        'aria-labelledby': 'switch-list-label-setting',
                      }}
                    />
                  </ListItem>
                </List>
              </Paper>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </>
  )
}

export default BusinessDir;