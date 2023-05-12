import { Box, Container, Grid, Paper } from "@mui/material";
import ProfileCard from "./ProfileCard";
import useStyles from "./Styles";
import { styled } from "@mui/material/styles";
import CustomizedBreadcrumbs from "../../../components/Breadcrumb/Breadcrumb";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getMembers } from "../../../actions/member";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function BusinessDir() {
  const classes = useStyles();
  const dispatch = useDispatch();

  // Define an empty array to hold the members data
  const Members = useSelector((state) => state.clubMembers.memberDirectory);
  
  useEffect(() => {
    dispatch(getMembers());
  }, []);

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
              <Grid item xs={4} key={index}>
                <ProfileCard
                  fullName={member.fullName}
                  title={member.title}
                  clubName={member.clubName}
                  description={member.description}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}
