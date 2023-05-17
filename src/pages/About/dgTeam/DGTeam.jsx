import { Avatar, Box, Grid, Paper, styled, Typography } from "@mui/material";
import "./DGTeam.css";
import CustomizedBreadcrumbs from "../../../components/Breadcrumb/Breadcrumb";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function DGTeam() {
  return (
    <>
      <div className="aboutGov">
        <CustomizedBreadcrumbs label={"About"} subLabel={"DG Team"} />
        <Grid container spacing={5} sx={{ justifyContent: "center" }}>
          <Grid item xs={10} className="gov">
            <Item
              sx={{ padding: { xs: "1rem", sm: "3rem" } }}
              className="item aboutGovContainer"
            >
              <Avatar
                alt="Remy Sharp"
                src={"/assets/dist_img/01_BSN.jpeg"}
                sx={{ width: "300px", height: "220px", display: "flex" }}
                className="about-image"
                variant="rounded"
              />
              <Typography variant="h4" gutterBottom className="itemTitle">
              B S Nagaraj, PMJF
              </Typography>
              <Typography variant="h5">District Governor</Typography>
              Dear Members and Sevayatris,
              <br />
              <br />
              Hearty welcome to this website, welcome from 6600 plus members,
              welcome from a Lions District that is spread in three Revenue
              Districts Pune, Nashik, and Ahmednagar in Maharashtra District in
              India. The District that is serving society with utmost empathy
              and passion with the help of strong 136 strong clubs! This website
              attempts to focus on four important stakeholders. Firstly, for the
              World at large, we shall introduce it to the noble activities that
              the District is carrying on in various fields. Activities that are
              prescribed by Lions International such as Diabetes, Hunger,
              Environment, Vision and Childhood Cancer. Also, in the field of
              SARITA the District programme. Clean Rivers, Adopting a girl child
              for education, Roti Bank (Annchhatra), I am Corona Warrior, Teach
              Value Education and Afforestation! Secondly, the website will
              cater to the needs of Presidents and his team to motivate their
              clubs as regards to growth in Services, Membership and Leadership.
              Third stake holder that is Cabinet member will be pleased to see
              the dashboard depicting dynamic scores of Top Ten Clubs at any
              point of time and summarised information. District Lion Members
              can explore events that took place, future events, About District
              leadership, various resources to enrich his experience as a Lion.
              In all great work by our Website host HSPM Solutions! Keep an eye
              on this Website you will find it exciting and informative! It will
              motivate to “Sow Service Seeds and Unite in Kindness and
              Diversity”! Ln CA Abhay Shastri, District Governor
            </Item>
          </Grid>
          <Grid item xs={10} md={5} className="vcGov1">
            <Item
              sx={{ padding: { xs: "1rem", sm: "3rem" } }}
              className="item aboutGovContainer"
            >
              <Avatar
                alt="Remy Sharp"
                src={"/assets/dist_img/03_C M Narayana Swamy.jpeg"}
                sx={{ width: "300px", height: "220px", display: "flex" }}
                className="about-image"
                variant="rounded"
              />
              <Typography variant="h4" gutterBottom className="itemTitle">
              C M Narayana Swamy, MJF

              </Typography>
              <Typography variant="h5" gutterBottom>
                1st Vice District Governor
              </Typography>
              Dear Lion Friends,
              <br />
              <br />
              At the out set let me Congratulate you for being Elected /
              Appointed or given responsibility of various Position/ Portfolio
              in our District / club , I am sure every Lion member will be
              excited to contribute towards our moto " We Serve " through time ,
              talent & treasure under the able Leadership of Our District
              Governor MJF CA Ln Abhay ji Shastri. Yes we all are aware about
              today's Scinario of covid 19 World Wide , in this circumstances it
              is expected from us to contribute towards society as a Members of
              World's largest Volunteer Organization through International &
              District Program to serve the needy , It is said "where there is
              need there is Lion". I personally feel that it's an opportunity to
              make an impact as an Organization , Club, & individual to be a
              great contributor in this situation of World Pandemic . I am sure
              we all will make an effort & help fellow citizens to uplift them
              from this situation so that our image as best Organization in the
              humanitarian service will be enhanced . Also it will help in more
              people joining our Organization to serve needy in the best of
              there capacity & ability . I also like to appeal you all to follow
              the guide lines given by respective Government during this
              pandemic & even in future to play our role as Good Citizens & to
              set an great example for the society. Let's sow the seeds of
              services for human welfare as Lion Members for the betterment of
              our society we live in. All the best & do well in your life.
              Regards, MJF Ln Hemant Naik. FVDG.Dist 3234 D2.
            </Item>
          </Grid>
          <Grid item xs={10} md={5} className="vcGov2">
            <Item
              sx={{ padding: { xs: "1rem", sm: "3rem" } }}
              className="item aboutGovContainer"
            >
              <Avatar
                alt="Remy Sharp"
                src={"/assets/dist_img/04_Akash Suvarna.JPG"}
                sx={{ width: "300px", height: "220px", display: "flex" }}
                className="about-image"
                variant="rounded"
              />
              <Typography variant="h4" gutterBottom className="itemTitle">
              Akash A Suvarna, PMJF
              </Typography>
              <Typography variant="h5" gutterBottom>
                2nd Vice District Governor
              </Typography>
              Dear Ever Serving Leaders,
              <br />
              <br />
              At the out set let me Congratulate you for being Elected /
              Appointed or given responsibility of various Position/ Portfolio
              in our District / club , I am sure every Lion member will be
              excited to contribute towards our moto " We Serve " through time ,
              talent & treasure under the able Leadership of Our District
              Governor MJF CA Ln Abhay ji Shastri. Yes we all are aware about
              today's Scinario of covid 19 World Wide , in this circumstances it
              is expected from us to contribute towards society as a Members of
              World's largest Volunteer Organization through International &
              District Program to serve the needy , It is said "where there is
              need there is Lion". I personally feel that it's an opportunity to
              make an impact as an Organization , Club, & individual to be a
              great contributor in this situation of World Pandemic . I am sure
              we all will make an effort & help fellow citizens to uplift them
              from this situation so that our image as best Organization in the
              humanitarian service will be enhanced . Also it will help in more
              people joining our Organization to serve needy in the best of
              there capacity & ability . I also like to appeal you all to follow
              the guide lines given by respective Government during this
              pandemic & even in future to play our role as Good Citizens & to
              set an great example for the society. Let's sow the seeds of
              services for human welfare as Lion Members for the betterment of
              our society we live in. All the best & do well in your life.
              Regards, MJF Ln Hemant Naik. FVDG.Dist 3234 D2.
            </Item>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default DGTeam;
