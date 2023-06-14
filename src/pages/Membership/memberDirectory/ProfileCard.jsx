import useStyles from "./Styles";
import { API_URL } from "../../../api";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import GroupsIcon from "@mui/icons-material/Groups";
import PhoneIcon from "@mui/icons-material/Phone";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export default function ProfileCard(props) {
  const { fullName, title, clubName, phone, image } = props;
  const classes = useStyles();
  const socialIcos = [
    {
      icon: <FontAwesomeIcon icon={faPhone} />,
      link: `tel:989898989`,
    },
    {
      icon: <FontAwesomeIcon icon={faWhatsapp} />,

      link: `https://wa.me/989898989`,
    },
  ];

  return (
    <Card sx={{ minHeight: 360, maxWidth: 300, margin: " 1rem auto" }}>
      <CardContent className={classes.cardContent}>
        <div className={classes.avatarBg}></div>
        <div className={classes.cardHeaders}>
          <Box
            sx={{
              position: "absolute",
              height: "30%",
              width: "100%",
              top: 0,
              backgroundImage:
                "linear-gradient(360deg, hsla(176, 82%, 82%, 1) 0%, hsla(202, 100%, 54%, 1) 100%)",
            }}
          >
            {/* <img
              src="https://images.pexels.com/photos/1025469/pexels-photo-1025469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="avatar background"
              style={{ height: "100%", width: "100%" }}
            /> */}
          </Box>
          <Avatar
            className={classes.avatar}
            alt={fullName}
            src={`${API_URL + image}`}
            sx={{ width: "150px", height: "150px", top: "35%" }}
          >
            {fullName?.charAt(0)}
          </Avatar>

          <Typography
            variant="h5"
            // color="text.secondary"
            component="div"
            className={classes.fullname}
          >
            {fullName}
          </Typography>
        </div>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              // width: 270,
            },
            width: "100%",
          }}
        >
          <Paper
            elevation={0}
            sx={{ width: "100%" }}
          >
            <List
              sx={{ padding: "0" }}
              className="contentList"
            >
              <ListItem sx={{ py: 0 }}>
                <ListItemIcon sx={{ minWidth: "35px" }}>
                  <PersonOutlineIcon sx={{ color: "#15AAFF" }} />
                </ListItemIcon>
                <ListItemText
                  id="switch-list-label-darkMode"
                  primary={"Designation"}
                />
              </ListItem>
              <ListItem sx={{ py: 0 }}>
                <ListItemIcon sx={{ minWidth: "35px" }}>
                  <GroupsIcon sx={{ color: "#15AAFF" }} />
                </ListItemIcon>
                <ListItemText
                  id="switch-list-label-language"
                  primary={"Club Name"}
                />
              </ListItem>
              <ListItem sx={{ py: 0 }}>
                <ListItemIcon sx={{ minWidth: "35px" }}>
                  <PhoneIcon sx={{ color: "#15AAFF" }} />
                </ListItemIcon>
                <ListItemText
                  sx={{ textAlign: "justify" }}
                  id="switch-list-label-setting"
                  primary={"989898989"}
                />
              </ListItem>

              <ListItem
                disablePadding
                sx={{ justifyContent: "center", pt: "1.5rem", pb: "0rem" }}
              >
                <Box className={classes.socialIcons}>
                  {socialIcos.map((item, index) => (
                    <Link
                      to={item.link}
                      key={index}
                    >
                      {item.icon}
                    </Link>
                  ))}
                </Box>
              </ListItem>
            </List>
          </Paper>
        </Box>
      </CardContent>
    </Card>
  );
}
