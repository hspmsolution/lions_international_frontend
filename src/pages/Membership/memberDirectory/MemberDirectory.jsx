import { Box, Container, Grid } from "@mui/material";
import ProfileCard from "./ProfileCard";
import useStyles from "./Styles";
import CustomizedBreadcrumbs from "../../../components/Breadcrumb/Breadcrumb";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getMembers } from "../../../actions/member";

export default function MemberDirectory() {
  const classes = useStyles();
  const dispatch = useDispatch();

  // Define an empty array to hold the members data
  const Members = useSelector((state) => state.clubMembers.memberDirectory);
  
  useEffect(() => {
    dispatch(getMembers());
  }, [dispatch]);

  return (
    <>
      <Box
        sx={{
          backgroundImage: "url('/assets/img/bggg.png')",
          backgroundAttachment: "fixed",
          pb: "2rem",
        }}
      >
        <CustomizedBreadcrumbs
          label={"Membership"}
          subLabel={"Member Directory"}
        />
        <Container className={classes.profileContainer}>
          <Grid container spacing={2}>
            {Members?.map((member, index) => (
              <Grid item xs={12} md={4} lg={4} key={index}>
                <ProfileCard
                  fullName={member.fullName}
                  title={member.title}
                  clubName={member.clubName}
                  phone={member.phone}
                  image={member.profilePicture}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}
