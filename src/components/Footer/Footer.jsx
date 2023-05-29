import {
  Avatar,
  Box,
  Container,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  ListItemIcon,
} from "@mui/material";
import React from "react";
import useStyles from "./Styles";
import { useNavigate } from "react-router-dom";
import "./Footer.css";
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import PhoneIcon from "@mui/icons-material/Phone";
import {
  faCube,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

// const quickLinks = [
//   "Events",
//   "Activity",
//   "Gallery",
//   "Contact Us",
//   "Privacy Policies",
//   "Terms & Conditions",
// ];

const quickLinks = [
  {
    linkName: "Activity",
    path: "/activities",
  },
  {
    linkName: "Gallery",
    path: "/resources/gallery",
  },
  {
    linkName: "Contact Us",
    path: "/contact-us",
  },
  {
    linkName: "Privacy Policies",
    path: "/privacypolicy",
  },
  {
    linkName: "Terms & Conditions",
    path: "/termsandconditions",
  },
];
// const contact = ["123-456-7890", "example@gmail.com", "Address"];
const contact = [
  {
    icon: <PhoneIcon />,
    value: "123456789",
  },
  {
    icon: <FontAwesomeIcon icon={faEnvelope} />,
    value: "example@gmail.com",
  },
  {
    icon: <FontAwesomeIcon icon={faLocationDot} />,
    value: "Address",
  },
];
const socialIcos = [
  {
    icon: <FontAwesomeIcon icon={faFacebookF} />,
    link: "https://www.facebook.com/LionsClubsDistrict317F/",
  },
  {
    icon: <FontAwesomeIcon icon={faTwitter} />,
    link: "https://twitter.com/lcbpd",
  },
  {
    icon: <FontAwesomeIcon icon={faInstagram} />,
    link: "https://www.instagram.com/lions_district_317f/?r=nametag",
  },
  {
    icon: <FontAwesomeIcon icon={faYoutube} />,
    link: "https://www.youtube.com/channel/UCPS2Iv4WWFni-BcLSMXOT5g",
  },
  
];
// const footItems = [{
// }]

function Footer() {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        bottom: 0,
        // backgroundColor: "#041b3b",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
      }}
      className="footer-background"
    >
      <Box
        sx={{
          backgroundColor: "rgba(4,27,59,0.5)",
          color: "#fff",
        }}
        className={classes.footer}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: { xs: "center", sm: "space-evenly" },
            alignItems: "flex-start",
            width: "100%",
          }}
        >
          <nav
            aria-label="secondary mailbox folders"
            className="footer-nav01"
          >
            <Typography
              variant="h6"
              sx={{ pt: "2rem", pl: "0.8rem", align: "center" }}
            >
              Quick Links
            </Typography>
            <List disablePadding>
              {quickLinks.map((item, i) => (
                <ListItem
                  disablePadding
                  key={i}
                  onClick={() => {
                    navigate(item.path);
                  }}
                >
                  <ListItemButton
                    sx={{
                      py: "5px",
                      borderRadius: "1rem",
                      "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.7)",
                        color: "black",
                      },
                    }}
                    disablePadding
                  >
                    <ListItemText primary={item.linkName} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </nav>

          <Avatar
            alt="Remy Sharp"
            src={"/assets/img/logo2.png"}
            sx={{
              width: { xs: "130px", lg: "180px" },
              height: { xs: "130px", lg: "180px" },
              borderRadius: "0",
              margin: "1rem 2rem",
              display: { xs: "block", sm: "block" },
            }}
            className="footer-logo"
          />

          <nav
            aria-label="secondary mailbox folders"
            className="footer-nav02"
          >
            <Typography
              variant="h6"
              sx={{ pt: "2rem", pl: "0.8rem" }}
            >
              Contact
            </Typography>
            <List disablePadding>
              {contact.map((item, i) => (
                <ListItem
                  disablePadding
                  key={i}
                >
                  <ListItemButton>
                    <ListItemIcon sx={{ minWidth: "30px", color: "white" }}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.value} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </nav>
        </Box>
      </Box>
      {/* <Divider sx = {{width: "100%"}}/> */}

      <Box
        sx={{
          backgroundColor: "rgba(4,27,59,0.5)",
          color: "#fff",
        }}
      >
        <Container
          sx={{
            display: { xs: "block", sm: "flex" },
            justifyContent: "space-evenly",
            padding: "10px",
          }}
        >
          {/* <Typography variant = "h5"
                            gutterBottom>
                    Get connected with us on social networks:
                </Typography>*/}
          <Box className={classes.socialIcons}>
            {socialIcos.map((item, index) => (
              <Link to={item.link} target="_blank" key={index}>{item.icon}</Link>
            ))}
          </Box>
        </Container>
        <Container sx={{ textAlign: "center", mb: "1.5rem" }}>
          <Typography variant="subtitle2">
            Copyright 2023 © All rights reserved. | Designed & Developed by{" "}
            <a href="https://lions-superadmin.up.railway.app/">
              <FontAwesomeIcon icon={faCube} /> <b>HSPM Solutions LLP.</b>
            </a>
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}

export default Footer;
