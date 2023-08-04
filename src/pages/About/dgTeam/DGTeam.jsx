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
              <p style={{ textAlign: "justify" }}>
                <b>
                  {" "}
                  Dear Members and Sevayatris,
                  <br />
                  Greetings from District 317F!
                </b>
                <br />
                <br />A Progressive Melvin Jones Fellow, District Governor{" "}
                <strong>B S Nagaraj </strong>
                was born in the year <strong>1954</strong> in a philanthropic
                family. He completed his education in <strong>Hubli</strong>{" "}
                with graduation in Economics and began his career as a{" "}
                <strong>Marketing Executive</strong>.
                <br />
                <br />
                In 1980, he quit his job and became a{" "}
                <strong>First-Generation Entrepreneur</strong> by starting his
                own company - <strong>Shriraj Engineers Pvt</strong>. Limited,
                mainly dealing in Industrial Pumps, Valves, etc. His company is
                an authorized distributor and service center for a renowned
                organization in the Pump Industry – KSB Limited. He has been
                awarded ‘<strong>The Best Dealer</strong>’ by KSB during the
                years 1985, 2004, 2005 and 2006. In 2017, he was awarded a{" "}
                <strong>Silver Plaque</strong> for successfully completing{" "}
                <strong>25 years</strong> of fruitful association with
                <strong> KSB Limited</strong>. <br />
                <br />
                His journey in Lionism began in 1978, when he joined the Lions
                Club of Belgaum Tilakwadi, then District 324 D2 and now 317 B.
                In 1990, his destiny brought him to Bangalore and joined very
                prestigious Club - Lions Club of Bangalore Jayamahal. After
                serving in all Club level positions, he moved on to the District
                Cabinet in the year 2002-03. He held various positions like,
                Zone Chairperson, Region Chairperson, District Chairperson,
                Global Leadership Team Coordinator for 3 years, Global
                Membership Coordinator, District Cabinet Treasurer and District
                Cabinet Secretary for Two terms. <br />
                <br />
                In the election held during April 2021, he was elected as Second
                Vice District Governor and was thereafter elevated to serve as
                First Vice District Governor in 2022. Apart from this he has
                also served as the Host Committee Chairperson for Region Meets,
                Cabinet Presentation and District Conventions.
                <br />
                <br />
                He has been recognized by the various awards at District,
                Multiple and International levels, including 3 International
                Presidents Medals, 11 International President’s Appreciation
                Certificates etc. He has graduated from the Faculty Development
                Institute and has actively involved himself in imparting the
                knowledge to the younger Lions.
                <br />
                <br />
                In addition to Lions activities, Nagaraj is life member of All
                India Plumbing Association, member of Hockey Association,
                Bowring Institute etc. He was also member of Philatelic Bureau
                of India. His hobbies are Travelling, collecting Stamps & Coins,
                and enjoys listening to classical Music.
                <br />
                <br />
                He is married to Shaila mjf, who is also a member of Lions Club
                of Bangalore Samarpan Lioness. The couple are blessed with son
                Santosh Kumar who has completed his Masters in Mechanical
                Engineering and presently working in Germany, and daughter
                Sangeetha, who is pursuing her Masters in Marketing & Strategy
                in UK.
                <br />
                <br />
              </p>
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
