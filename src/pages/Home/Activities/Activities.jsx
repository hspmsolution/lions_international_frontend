import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Card from '@mui/material/Card';
import { Box, Container, Paper } from '@mui/material';
import ImageSlider, { Slide } from "react-auto-image-slider";
import useStyles from './Styles';
import helpingLions from "../../../components/Slider/img/helpingLions.jpg";
import helpingLions1 from "../../../components/Slider/img/helpingLions(1).jpg";
import helpingLions2 from "../../../components/Slider/img/helpingLions(2).jpeg";
import './Activities.css';

const data = [
  {
    src: helpingLions,
    title: 'Hunger Relief Program',
    description: 'As part of the District’s Hunger Relief Program, LCB Shikshana Food',
  },
  {
    src: helpingLions1,
    title: 'Health Camp',
    description: 'LCB Shikshana and Leo Club of Yuva Keerthi along with Metro Lions Services Trust, conducted a Dental &',
  },
  {
    src: helpingLions2,
    title: 'Cleaning Drive',
    description: 'Lions cleaned the site and collected all the waste thrown',
  },
];

export default function Activities() {
  const classes = useStyles();

  return (
    <>
      <Paper className={classes.activitiesCont} sx={{ display: { xs: 'block', md: 'flex' } }}>
        <Box
          variant="outlined"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: 1,
            minwidth: '50%',
            borderRadius: 'sm',
            padding: '2rem 2rem 4rem'
          }}
        >
          <Typography variant='h4' className={classes.activeH}>Upcoming Activities</Typography>
          <List sx={{ py: 'var(--ListDivider-gap)' }}>
            <div className='imageSlider imageSliderX'>
              <ImageSlider>
                {data.map((item, index) => (
                  <Slide>
                    <Card variant="outlined" sx={{ width: '60%', height: '300px' }}>
                      <Box
                        sx={{ flexBasis: 120, borderRadius: 'sm' }}
                      >
                        <img
                          src={`${item.src}?w=120&fit=crop&auto=format`}
                          srcSet={`${item.src}?w=120&fit=crop&auto=format&dpr=2 2x`}
                          alt={item.title}
                          style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                        />
                      </Box>
                      <Typography variant='h6'>{item.title}</Typography>
                      <Typography>{item.description}</Typography>
                    </Card>
                  </Slide>
                ))}
              </ImageSlider>
            </div>
          </List>
        </Box>
        <Box
          variant="outlined"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: 1,
            minWidth: '50%',
            borderRadius: 'sm',
            padding: '2rem 2rem 4rem'
          }}
        >
          <Typography variant='h4' className={classes.activeH}>Past Activities</Typography>
          <List sx={{ py: 'var(--ListDivider-gap)' }}>
            <div className='imageSlider imageSliderX'>
              <ImageSlider>
                {data.map((item, index) => (
                  <Slide>
                    <Card variant="outlined" sx={{ width: '60%', height: '300px' }}>
                      <Box
                        sx={{ flexBasis: 120, borderRadius: 'sm' }}
                      >
                        <img
                          src={`${item.src}?w=120&fit=crop&auto=format`}
                          srcSet={`${item.src}?w=120&fit=crop&auto=format&dpr=2 2x`}
                          alt={item.title}
                          style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                        />
                      </Box>
                      <Typography variant='h6'>{item.title}</Typography>
                      <Typography>{item.description}</Typography>
                    </Card>
                  </Slide>
                ))}
              </ImageSlider>
            </div>
          </List>
        </Box>
      </Paper>

    </>
  );
}
