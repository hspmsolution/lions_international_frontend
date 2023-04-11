import { Box, Container } from '@mui/material';
import ProfileCard from './ProfileCard';
import useStyles from './Styles';
import CustomizedBreadcrumbs from "../../../components/Breadcrumb/Breadcrumb";

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

const BusinessDir = () => {
  const classes = useStyles();

  return (
    <>
      <CustomizedBreadcrumbs label={'Membership'} subLabel={'Business Directory'} />  
      <Box sx={{ display: 'flex', backgroundImage: "url('/assets/img/bggg.png')", backgroundAttachment: 'fixed', py: '2rem' }}>
        <Container className={classes.profileContainer} maxWidth="xl">
          {busiMan.map((member, index) => (
            <ProfileCard
              name={member.name}
              designation={member.designation}
              club={member.club}
              description={member.description}
              key={index} />
          ))}
        </Container>
      </Box>
    </>
  )
}

export default BusinessDir;