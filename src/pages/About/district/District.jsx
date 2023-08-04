import { Box, Container, Paper, Typography } from "@mui/material";
import CustomizedBreadcrumbs from "../../../components/Breadcrumb/Breadcrumb";
import "./district.css";

function District() {
  return (
    <>
      <div className="aboutGov">
        <CustomizedBreadcrumbs
          label={"About"}
          subLabel={"About District 317F"}
        />
        <Box sx={{ margin: "1rem" }}>
          <Container sx={{ my: "5rem" }} className="aboutGovContainer">
            <Paper className="districtPaper ">
              <Box>
                <Typography variant="h3" gutterBottom className="itemTitle">
                  DISTRICT GOVERNORS PROGRAM FOR THE FISCAL YEAR 2023-2024
                </Typography>
              </Box>
              <div className="about_district">
                <h5 className="custom_h5">GAT GOALS</h5>

                <h5>LEADERSHIP DEVELOPMENT</h5>

                <ul>
                  <li>
                    To impart Leadership training to a minimum of 800 Lions by
                    taking Leadership training to Club Level.
                  </li>
                  <li>
                    Train the Facilitators for CQI and ensure implementation
                    through them in at least 20 Clubs.
                  </li>
                  <li>Lion & Leo Cabinet Officers schooling</li>
                  <li>Lion & Leo Club Officers Schooling</li>
                  <li>Zone Chairpersons Training</li>
                  <li>District Lions leadership Institute</li>
                  <li>District Club Level GAT Conclave</li>
                </ul>

                <h5>MEMBERSHIP DEVELOPMENT</h5>
                <ul>
                  <li>To achieve 15% Net Growth in the existing Clubs</li>
                  <li>
                    To bring all Clubs with Membership below 20 to 20 and above.
                  </li>
                  <li>
                    To motivate every Lions Club to Induct at least One Member.
                  </li>
                  <li>
                    To properly Indoctrinate and Induct Prospective Lions.
                  </li>
                  <li>To Achieve 90% Retention in existing Clubs.</li>
                  <li>To revive & strengthen existing Leo Clubs.</li>
                  <li>To conduct New Member Orientation at District Level.</li>
                  <li>To promote Leo Lion Program</li>
                </ul>

                <h5>EXTENSION OF NEW CLUBS</h5>
                <ul>
                  <li>To extend and Charter 10 New Lions Clubs</li>
                  <li>To Charter at least one Leo Lions Club </li>
                </ul>

                <h5>SERVICE PROGRAMS & REPORTING</h5>
                <ul>
                  <li>
                    To create awareness about Diabetes and screen 20,000 people.
                  </li>
                  <li>
                    To facilitate screening of 20,000 people for Vision
                    Impairment.
                  </li>
                  <li>
                    To facilitate screening of 1,00,000 children and provide
                    1200 spectacles at free of cost in partnership with Carl
                    Zeiss India Pvt Ltd.
                  </li>
                  <li>To facilitate 1,000 Cataract Surgeries.</li>
                  <li>
                    To conduct programs to create awareness about Childhood
                    Cancer and help children undergoing treatment.
                  </li>
                  <li>
                    To continue the Relieving Hunger Program being organized in
                    KC General Hospital.
                  </li>
                  <li>To plant 30,000 saplings</li>
                  <li>
                    To create awareness about use of non-biodegradable plastic.
                  </li>
                  <li>To create awareness about Rainwater Harvesting.</li>
                  <li>
                    To organize Voluntary Blood Donation Camps to collect 10,000
                    units of Blood.
                  </li>
                  <li>To conduct 4 Mega Health Camps, one in each quarter.</li>
                </ul>

                <h5>LIONS CLUBS INTERNATIONAL FOUNDATION (LCIF)</h5>
                <ul>
                  <li>
                    To motivate 50 Lions/Leos to contribute USD 1,000 for Melvin
                    Jones Fellowship
                  </li>
                  <li>
                    To motivate Lions & Leos to participate in the Lions Share
                    Program to the extent of USD 25,000.
                  </li>
                  <li>
                    To increase the number of Lions & Clubs contributing to
                    LCIF.
                  </li>
                  <li>
                    To work with the Clubs which have pledged to become Campaign
                    100 Model Clubs to fulfil their pledges.
                  </li>
                  <li>
                    To organize 2 TTWs and concentrate on implementation of
                    SFAprogram in identified schools.
                  </li>
                  <li>To promote Youth Camps & Exchange program</li>
                  <li>To organize programs for youth.</li>
                </ul>

                <h5>DISTRICT / LDSF PROJECT</h5>
                <ul>
                  <li>Setting up of 10 Vision Centers supported by LCIF</li>
                  <li>
                    Construction of Second floor above Kapoor ward in Kidwai
                    Cancer Hospital to help stay of Childhood cancer patients
                    and their attendants at a cost of Rs 1.6 Crores with support
                    of LCIF.
                  </li>
                  <li>
                    Up gradation of Dialysis Center at Shirdi Sai Hospital
                    supported by LCIF at a cost of Rs 1.0 Crore.
                  </li>
                  <li>
                    Distribution of Scholarships of Rs 20,000 each to 40
                    students amounting to Rs 8 Lakhs.
                  </li>
                </ul>

                <h5>CORPORATE SOCIALRESPONSIBILITYINITIATIVE</h5>
                <ul>
                  <li>
                    To identify corporate's/Government & Semi government
                    departments to partner with District and Club projects
                    through LDSF.
                  </li>
                </ul>

                <h5>PUBLIC RELATIONS/IMAGE BUILDING/MARKETING</h5>

                <ul>
                  <li>To conduct Rallies and Walkathons.</li>
                  <li>
                    To encourage Clubs to post Service activities on social
                    media and in National Dailies.
                  </li>
                  <li>To give Umbrellas to roadside vendors.</li>
                </ul>
              </div>
              <br />
              <Typography
                variant="h6"
                gutterBottom
                className="dg_name_designation"
              >
                District Governor,
                <br />
                2023-2024
                <br />
                B S Nagaraj, PMJF
                <br />
                "SOW SERVICE SEEDS"
              </Typography>
            </Paper>
          </Container>
        </Box>
      </div>
    </>
  );
}

export default District;