import { Box, Container, Grid, Paper } from '@mui/material';
import ProfileCard from './ProfileCard';
import useStyles from './Styles';
import { styled } from '@mui/material/styles';
import CustomizedBreadcrumbs from "../../../components/Breadcrumb/Breadcrumb";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const BusinessDir = () => {
  const classes = useStyles();

  return (
    <>
      <Box sx={{ backgroundImage: "url('/assets/img/bggg.png')", backgroundAttachment: 'fixed', pb: '2rem' }}>
        <CustomizedBreadcrumbs label={'Membership'} subLabel={'Business Directory'} />
        <Container className={classes.profileContainer}>
          <Grid container spacing={2}>
            {busiMan.map((member, index) => (
              <Grid item xs={4}>
                <ProfileCard
                  name={member.name}
                  designation={member.designation}
                  club={member.club}
                  description={member.description}
                  key={index} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  )
}

export default BusinessDir;


const busiMan = [
  {
    name: 'John Doe',
    designation: 'Club Secretary',
    club: 'PUNE SUPREME',
    description: 'My name is Jesse Couch, and I am an award winning, intensely ',
  },
  {
    name: 'Full_Name1',
    designation: 'Club Treasurer',
    club: 'Club_Name',
    description: 'about the lion',
  },
  {
    name: 'Full_Name2',
    designation: 'Club Treasurer',
    club: 'Club_Name',
    description: 'about the lion',
  },
  {
    name: 'Full_Name3',
    designation: 'Club Treasurer',
    club: 'Club_Name',
    description: 'about the lion',
  },
]
