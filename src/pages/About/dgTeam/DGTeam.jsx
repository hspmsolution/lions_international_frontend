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
        <CustomizedBreadcrumbs
          label={"About"}
          subLabel={"DG Team"}
        />
        <Grid
          container
          spacing={5}
          sx={{ justifyContent: "center" }}>
          <Grid
            item
            xs={10}
            className="gov">
            <Item
              sx={{ padding: { xs: "1rem", sm: "3rem" } }}
              className="item aboutGovContainer">
              <Avatar
                alt="Remy Sharp"
                src={"/assets/dist_img/01_BSN.jpeg"}
                sx={{
                  maxWidth: "300px",
                  maxHeight: "220px",
                  width: "100%",
                  height: "100%",
                  display: "flex",
                }}
                className="about-image"
                variant="rounded"
              />
              <Typography
                variant="h4"
                gutterBottom
                className="itemTitle">
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
          <Grid
            item
            xs={10}
            md={5}
            className="vcGov1">
            <Item
              sx={{ padding: { xs: "1rem", sm: "3rem" } }}
              className="item aboutGovContainer">
              <Avatar
                alt="Remy Sharp"
                src={"/assets/dist_img/03_C M Narayana Swamy.jpeg"}
                sx={{
                  maxWidth: "300px",
                  maxHeight: "220px",
                  width: "100%",
                  height: "100%",
                  display: "flex",
                }}
                className="about-image"
                variant="rounded"
              />
              <Typography
                variant="h4"
                gutterBottom
                className="itemTitle">
                C M Narayana Swamy, MJF
              </Typography>
              <Typography
                variant="h5"
                gutterBottom>
                1st Vice District Governor
              </Typography>
              Dear Lion Friends,
              <br />
              <br />
              Lion C.M. Narayana Swamy, a Melvin Jones
              Fellow, hails from an agricultural family in Kolar
              district. Son of late Chikka Muniswamy and late
              Smt. Muniyamma, he had primary schooling in his
              native place and attended high school and college
              at Kolar. Later on he joined Bangalore University to
              do his Masters degree. After his post-graduation he joined LIC of India.
              After 32 years of service he retired from LIC as Development Officer.
              Lion C.M. Narayana Swamy Joined as a Member of Lions Club of
              Hebbal in 2000. He served all the positions at the club level including
              the post of president. Since 2008-09 Narayanaswamy has been
              serving the district in various positions creditably. He became Zone
              Chairperson for 2008-09. He has bagged the Best Zone Chairperson
              award. He served as Region Chairperson for 2009-10.
              During 2013-14 he was District Co-ordinator for Administration for
              which he bagged Excellent Co-operation Award. During 2014-15 he
              served as Additional District Cabinet Secretary for which he was
              awarded District Governor's Special Recognition Award and
              International President's leadership medal. He served as District
              Cabinet Treasurer in 2015-16. During the same year he was honoured
              with International President's Medal. He had been PRO for two terms.
              He served as District Cabinet Secretary for two terms (2017-18 and
              2019-20). He was honoured with Lion of the Year award. Other
              positions he occupied include LDSF Secretary in 2018-19, District
              Directory Editor in 2020-21, DC for convention and Protocol (2020-21)
              and District Coordinator for Diabetes (2021 -22). Narayanaswamy is a
              recipient of International President's Certificate eight times and the
              Best Multiple DCTand DCS awards.
              In the recent election held in April 2023, he was elected as First Vice
              District Governor.
              Apart from his involvement in Lionism, he is a member of ISKCON and
              Country Club. Lion C.M. Narayanaswamy is happily married to Smt.
              B.H. Girija and the couple is blessed with son Bhargav N now serving
              with Kotak Mahindra.
            </Item>
          </Grid>
          <Grid
            item
            xs={10}
            md={5}
            className="vcGov2">
            <Item
              sx={{ padding: { xs: "1rem", sm: "3rem" } }}
              className="item aboutGovContainer">
              <Avatar
                alt="Remy Sharp"
                src={"/assets/dist_img/04_Akash Suvarna.JPG"}
                sx={{
                  maxWidth: "300px",
                  maxHeight: "220px",
                  width: "100%",
                  height: "100%",
                  display: "flex",
                }}
                className="about-image"
                variant="rounded"
              />
              <Typography
                variant="h4"
                gutterBottom
                className="itemTitle">
                Akash A Suvarna, PMJF
              </Typography>
              <Typography
                variant="h5"
                gutterBottom>
                2nd Vice District Governor
              </Typography>
              Dear Ever Serving Leaders,
              <br />
              <br />
              LION AKASH A SUVARNA, a Progressive
              Melvin Jones Fellow born into a dedicated
              Lions Family of Late PDG Lion Anand N.
              Suvarna and Lioness Devaki Anand Suvarna in
              January 1966. A Civil Engineer from the
              prestigious R.V. College of Engineering and is
              involved in the Real Estate business of Apartments, Land
              Development and Warehousing Logistics.
              He was the CHARTER MEMBER of LEO CLUB OF BANGALORE
              JAYAMAHAL in 1980. He has served as member of the LEO
              Council and LEO District and served in the LEO Movement.
              In 1998, he became the CHARTER PRESIDENT of LIONS CLUB OF
              BANGALORE METRO. Today LCB Metro has crossed the Silver
              Jubilee Milestone of 25 YEARS of Service.
              He is the Chairman of the Metro Lions Services Trust, which in
              2021, obtained a CSR Fund of Rs.7.5 Lakhs for Dialysis Machine,
              installed in Doddaballapura Lions Dialysis Centre. CSR Fund of
              Rs.10.85 Lakhs was received for Treatment of Cancer patients. He
              initiated an eye cornea transplant to a 14 year old visually
              impaired boy.
              In the District he has served in various positions and as District
              Chairperson, District Cabinet Secretary. He was recognised with
              numerous awards from the District, Multiple and International.
              As District Chairperson for Blood Donation, he has collected
              6,400+ units of blood. As District Coordinator for Vision, he was
              instrumental in achieving 50,000+ Eye Screening and a record of
              1,00,000+ eye screening in the year 2022-23.
              In April 2023 Annual District Convention, he was UNANIMOUSLY
              elected as the Second Vice District Governor.
              He is married to Ashwini Elder son Dr. Abhinav is a Doctor and is
              pursuing his MS in Orthopedics at KIMS and Younger son Ayush
              is in his final semester of Computer Science Engineering in PES
              Institute of Technology.
            </Item>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default DGTeam;
