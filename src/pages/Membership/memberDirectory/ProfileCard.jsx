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
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getMembers } from "../../../actions/member";

export default function ProfileCard(props) {
  const dispatch = useDispatch();

  // Define an empty array to hold the members data
  const Members = useSelector((state) => state.clubMembers.memberDirectory);

  useEffect(() => {
    dispatch(getMembers());
  }, [dispatch]);
  const { fullName, title, clubName, phone, description, profilePicture } =
    props;
  console.log(Members.profilePicture);
  const classes = useStyles();
  const socialIcos = [
    <FontAwesomeIcon icon={faPhone} />,
    <FontAwesomeIcon icon={faWhatsapp} />,
  ];

  return (
    <Card sx={{ minHeight: 360, maxWidth: 300, margin: "auto" }}>
      <CardContent className={classes.cardContent}>
        <div className={classes.avatarBg}></div>
        <div className={classes.cardHeaders}>
          <Box
            sx={{ position: "absolute", height: "23%", width: "100%", top: 0 }}
          >
            <img
              src="https://images.pexels.com/photos/1025469/pexels-photo-1025469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="avatar background"
              style={{ height: "100%", width: "100%" }}
            />
          </Box>
          <Avatar
            className={classes.avatar}
            alt={fullName}
            src={profilePicture ? `${API_URL}$Members?.{profilePicture}` : ""}
            sx={{ width: "120px", height: "120px", top: "45%" }}
          >
            {"user"?.result?.fullName?.charAt(0)}
          </Avatar>

          <Typography
            variant="h5"
            color="text.secondary"
            component="div"
            className={classes.fullame}
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
              sx={{ p: 0 }}
              className="contentList"
            >
              <ListItem sx={{ py: 0 }}>
                <ListItemIcon>
                  <PersonOutlineIcon />
                </ListItemIcon>
                <ListItemText
                  id="switch-list-label-darkMode"
                  primary={title}
                />
              </ListItem>
              <ListItem sx={{ py: 0 }}>
                <ListItemIcon>
                  <GroupsIcon />
                </ListItemIcon>
                <ListItemText
                  id="switch-list-label-language"
                  primary={clubName}
                />
              </ListItem>
              <ListItem sx={{ minHeight: 80, py: 0 }}>
                <ListItemText
                  sx={{ textAlign: "justify" }}
                  id="switch-list-label-setting"
                  primary={description}
                />
              </ListItem>
              <ListItem sx={{ justifyContent: "center", py: 0 }}>
                <Box className={classes.socialIcons}>
                  {socialIcos.map((item, index) => (
                    <Link
                      href={`tel:${phone}`}
                      key={index}
                    >
                      {item}
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
