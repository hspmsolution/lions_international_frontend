import React from "react";
import "./about.css";
import { Avatar, Box, Container, Typography } from "@mui/material";
import CustomizedBreadcrumbs from "../../components/Breadcrumb/Breadcrumb";

const About = () => {
  return (
    <>
      <div className="aboutGov">
        <CustomizedBreadcrumbs
          label={"About"}
          subLabel={"Governor"}
        />
        <Box sx={{ margin: "1rem" }}>
          <Container className="aboutGovContainer">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                margin: "2rem 0",
              }}
            >
              <Avatar
                src={"/assets/dist_img/01_BSN.jpeg"}
                alt="our district governer"
                sx={{ mt: "1rem", width: "300px", height: "220px" }}
                className="about-image"
                variant="rounded"
              />
              <Typography
                variant="h4"
                className="itemTitle"
              >
                B S Nagaraj, PMJF
              </Typography>
              <Typography variant="h5">District Governor</Typography>
            </div>
            <div className="dist-governer">
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
                awarded ‘<strong>The Best Dealer</strong>’ by KSB during the years 1985, 2004,
                2005 and 2006. In 2017, he was awarded a <strong>Silver Plaque</strong> for
                successfully completing <strong>25 years</strong> of fruitful association with
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
            </div>
          </Container>
        </Box>
      </div>
    </>
  );
};

export default About;
