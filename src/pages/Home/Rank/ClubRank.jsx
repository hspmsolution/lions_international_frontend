// import { Timeline } from '@mui/icons-material';
import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import StarsIcon from '@mui/icons-material/Stars';
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';
import useStyles from './Styles'
import { Typography } from '@mui/material';


const clubRankings = [
  { name: 'PUNE AGRASEN', points: 297 },
  { name: 'POONA SARASBAUG', points: 222 },
  { name: 'PUNE PRABHAT', points: 219 },
  { name: 'NASHIK ROYALS', points: 200 },
  { name: 'POONA', points: 198 },
  { name: 'POONA CENTRAL', points: 166 },
  { name: 'TALEGAON', points: 150 },
  { name: 'KOPERGAON', points: 144 }
]

export default function OppositeContentTimeline() {
  const classes = useStyles();

  return (
    <>
      <Typography variant='h2' className='team-h'>Top 10 Clubs</Typography>
      <div className={classes.rankRow}>
        <div className={classes.rankColumn}>
          <Timeline
            sx={{
              [`& .${timelineOppositeContentClasses.root}`]: {
                flex: 0.8,
              },
              minWidth: '50%',
            }}
          >
            {clubRankings.map((ranking, index) => (
              <>
                <TimelineItem>
                  <TimelineOppositeContent color="textSecondary">
                    {ranking.points}
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <StarsIcon />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>{ranking.name}</TimelineContent>
                </TimelineItem>
              </>
            ))}
          </Timeline>
        </div>
        <div className={classes.rankColumn}>
          <Timeline
            sx={{
              [`& .${timelineOppositeContentClasses.root}`]: {
                flex: 0.8,
              },
              minWidth: '50%',
            }}
          >
            {clubRankings.map((ranking, index) => (
              <>
                <TimelineItem>
                  <TimelineOppositeContent color="textSecondary">
                    {ranking.points}
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <StarsIcon />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>{ranking.name}</TimelineContent>
                </TimelineItem>
              </>
            ))}
          </Timeline>
        </div>
      </div>



    </>
  );
}