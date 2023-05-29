import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import "./Team.css";

const teamData = [
  {
    src: "/assets/dist_img/01_BSN.jpeg",
    name: "B S Nagaraj",
    sub_design: "PMJF",
    designation: "District Governor",
  },
  {
    src: "/assets/dist_img/02_BSR.JPG",
    name: "B S Rajashekaraiah",
    sub_design: "PMJF",
    designation: "Immediate Past District Governor",
  },
  {
    src: "/assets/dist_img/03_C M Narayana Swamy.jpeg",
    name: "C M Narayana Swamy",
    sub_design: "MJF",
    designation: "First Vice District Governor",
  },
  {
    src: "/assets/dist_img/04_Akash Suvarna.JPG",
    name: "Akash A Suvarna",
    sub_design: "PMJF",
    designation: "Second Vice District Governor",
  },
  {
    src: "/assets/dist_img/05_V K Rajesh.jpeg",
    name: "Rajesh V K",
    sub_design: "MJF",
    designation: "Cabinet Secretary",
  },
  {
    src: "/assets/dist_img/06_RKH-crop.jpeg",
    name: "Radhakrishna Hegde",
    sub_design: "MJF",
    designation: "Cabinet Treasurer",
  },
  {
    src: "/assets/dist_img/07_R Vijaya.jpeg",
    name: "R Vijaya",
    sub_design: "   ",
    designation: "GLT Coordinator",
  },
  {
    src: "/assets/dist_img/08_Anil Kumar B.jpg",
    name: "Adv. Anil Kumar B",
    sub_design: "PMJF",
    designation: "GMT Coordinator",
  },
  {
    src: "/assets/dist_img/09_Ramanamurthy.jpeg",
    name: "Ramanamurthy B V",
    sub_design: "MJF",
    designation: "GST Coordinator",
  },
  {
    src: "/assets/dist_img/10_Sasha.jpeg",
    name: "Sasha Kulothungan",
    sub_design: "MJF",
    designation: "GET Coordinator",
  },
  {
    src: "/assets/dist_img/11_VenkataNarasimhulu.jpg",
    name: "D N Venkatanarasimhulu",
    sub_design: "PMJF",
    designation: "LCIF Coordinator",
  },
  {
    src: "/assets/dist_img/12_Shobha Srinivas.jpeg",
    name: "Shobha Srinivas",
    sub_design: " ",
    designation: "Family & Women Membership",
  },
];

function Team() {
  return (
    <Box
      sx={{
        backgroundImage: "url('/assets/img/bggg.png')",
        backgroundAttachment: "fixed",
        pb: "2rem",
      }}
    >
      <Container>
        <Typography
          variant="h2"
          className="team-h"
        >
          Our District Team
        </Typography>
        <Grid
          container
          className="main"
        >
          {teamData.map((member, index) => {
            return (
              <Grid
                item
                className="profile-card"
                key={index}
              >
                <div className="img">
                  <img
                    alt=""
                    src={member.src}
                  />
                </div>
                <div className="caption">
                  <h3>{member.name}</h3>
                  <h4>{member.sub_design}</h4>
                  <p>{member.designation}</p>
                </div>
              </Grid>
            );
          })}
          {/* <Grid item className="profile-card">
            <div className="img">
              <img
                alt=""
                src="/assets/dist_img/01_BSN.jpeg"
              />
            </div>
            <div className="caption">
              <h5>B S Nagaraj, PMJF</h5>
              <p>District Governor</p>
            </div>
          </Grid>
          <Grid
            item
            className="profile-card"
          >
            <div className="img">
              <img
                alt=""
                src="/assets/dist_img/02_BSR.JPG"
              />
            </div>
            <div className="caption">
              <h5>B S Rajashekaraiah, PMJF</h5>
              <p>Immediate Past District Governor</p>
            </div>
          </Grid>
          <Grid
            item
            className="profile-card"
          >
            <div className="img">
              <img
                alt=""
                src="/assets/dist_img/03_C M Narayana Swamy.jpeg"
              />
            </div>
            <div className="caption">
              <h5>C M Narayana Swamy, MJF</h5>
              <p>First Vice District Governor</p>
            </div>
          </Grid>
          <Grid
            item
            className="profile-card"
          >
            <div className="img">
              <img
                alt=""
                src="/assets/dist_img/04_Akash Suvarna.JPG"
              />
            </div>
            <div className="caption">
              <h5>Akash A Suvarna, PMJF</h5>
              <p>Second Vice District Governor</p>
            </div>
          </Grid>

          <Grid
            item
            className="profile-card"
          >
            <div className="img">
              <img
                alt=""
                src="/assets/dist_img/05_V K Rajesh.jpeg"
              />
            </div>
            <div className="caption">
              <h5>Rajesh V K, MJF</h5>
              <p>Cabinet Secretary</p>
            </div>
          </Grid>
          <Grid
            item
            className="profile-card"
          >
            <div className="img">
              <img
                alt=""
                src="/assets/dist_img/06_RKH.jpeg"
              />
            </div>
            <div className="caption">
              <h5>Radhakrishna Hegde, MJF</h5>
              <p>Cabinet Treasurer</p>
            </div>
          </Grid>
          <Grid
            item
            className="profile-card"
          >
            <div className="img">
              <img
                alt=""
                src="/assets/dist_img/07_R Vijaya.jpeg"
              />
            </div>
            <div className="caption">
              <h5>R Vijaya</h5>
              <p>GLT Coordinator</p>
            </div>
          </Grid>
          <Grid
            item
            className="profile-card"
          >
            <div className="img">
              <img
                alt=""
                src="/assets/dist_img/08_Anil Kumar B.jpg"
              />
            </div>
            <div className="caption">
              <h5>Adv. Anil Kumar B, PMJF</h5>
              <p>GMT Coordinator</p>
            </div>
          </Grid>
          <Grid
            item
            className="profile-card"
          >
            <div className="img">
              <img
                alt=""
                src="/assets/dist_img/09_Ramanamurthy.jpeg"
              />
            </div>
            <div className="caption">
              <h5>Ramanamurthy B V, MJF</h5>
              <p>GST Coordinator</p>
            </div>
          </Grid>
          <Grid
            item
            className="profile-card"
          >
            <div className="img">
              <img
                alt=""
                src="/assets/dist_img/10_Sasha.jpeg"
              />
            </div>
            <div className="caption">
              <h5>Sasha Kulothungan, MJF</h5>
              <p>GET Coordinator</p>
            </div>
          </Grid>
          <Grid
            item
            className="profile-card"
          >
            <div className="img">
              <img
                alt=""
                src="/assets/dist_img/11_VenkataNarasimhulu.jpg"
              />
            </div>
            <div className="caption">
              <h5>D N Venkatanarasimhulu, PMJF</h5>
              <p>LCIF Coordinator</p>
            </div>
          </Grid>
          <Grid
            item
            className="profile-card"
          >
            <div className="img">
              <img
                alt=""
                src="/assets/dist_img/12_Shobha Srinivas.jpeg"
              />
            </div>
            <div className="caption">
              <h5>Shobha Srinivas</h5>
              <p>Family & Women Membership</p>
            </div>
          </Grid> */}
        </Grid>
        {/* <div className="main">
          <div className="profile-card">
            <div className="img">
              <img
                alt=""
                src="/assets/dist_img/05_V K Rajesh.jpeg"
              />
            </div>
            <div className="caption">
              <h5>Lion's Name</h5>
              <p>GLT Coordinator</p>
            </div>
          </div>
          <div className="profile-card">
            <div className="img">
              <img
                alt=""
                src="/assets/dist_img/06_RKH.jpeg"
              />
            </div>
            <div className="caption">
              <h5>Lion's Name</h5>
              <p>LCIF Coordinator</p>
            </div>
          </div>
          <div className="profile-card">
            <div className="img">
              <img
                alt=""
                src="/assets/dist_img/07_R Vijaya.jpeg"
              />
            </div>
            <div className="caption">
              <h5>Lion's Name</h5>
              <p>PRO</p>
            </div>
          </div>
          <div className="profile-card">
            <div className="img">
              <img
                alt=""
                src="/assets/dist_img/08_Anil Kumar B.jpg"
              />
            </div>
            <div className="caption">
              <h5>Lion's Name</h5>
              <p>Editor</p>
            </div>
          </div>
          <div className="profile-card">
            <div className="img">
              <img
                alt=""
                src="/assets/dist_img/09_Ramanamurthy.jpeg"
              />
            </div>
            <div className="caption">
              <h5>Lion's Name</h5>
              <p>Editor</p>
            </div>
          </div>
          <div className="profile-card">
            <div className="img">
              <img
                alt=""
                src="/assets/dist_img/10_Sasha.jpeg"
              />
            </div>
            <div className="caption">
              <h5>Lion's Name</h5>
              <p>Editor</p>
            </div>
          </div>
          <div className="profile-card">
            <div className="img">
              <img
                alt=""
                src="/assets/dist_img/11_VenkataNarasimhulu.jpg"
              />
            </div>
            <div className="caption">
              <h5>Lion's Name</h5>
              <p>Editor</p>
            </div>
          </div>
          <div className="profile-card">
            <div className="img">
              <img
                alt=""
                src="/assets/dist_img/12_Shobha Srinivas.jpeg"
              />
            </div>
            <div className="caption">
              <h5>Lion's Name</h5>
              <p>Editor</p>
            </div>
          </div>
        </div> */}
      </Container>
    </Box>
  );
}

export default Team;
