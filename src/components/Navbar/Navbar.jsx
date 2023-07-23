import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Avatar } from "@mui/material";
import useStyles from "./Styles";
import PopupMenu from "./PopupMenu";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const drawerWidth = 240;

const myNav = [
  { title: "Home" },
  {
    title: "About",
    menuItems: [
      "Governor",
      "DG Team",
      "About District 317F",
      "Organization Chart",
    ],
  },
  { title: "Activities" },
  {
    title: "Membership",
    menuItems: ["Member Directory", "Mini Directory"],
  },
  {
    title: "Resources",
    menuItems: ["News", "Gallery", "Global Priorities", "Download Resources"],
  },
];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const classes = useStyles();
  const isAdmin = useSelector((state) => state.auth.admin);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center" }}>
      <Avatar
        alt="Remy Sharp"
        src={"/assets/img/logo2.png"}
        sx={{ width: 56, height: 56, margin: "5px auto" }}
        className={classes.clubLogo}
      />
      <Divider variant="middle" />
      <List>
        {myNav.map((item, index) => (
          <ListItem
            key={index}
            disablePadding>
            <Button
              key={index}
              sx={{ color: "#565656", padding: "10px" }}
              className={classes.drawerButton}>
              <PopupMenu
                title={item.title}
                menuItems={item.menuItems}
              />
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", position: "absolute" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        className={classes.mainNav}>
        <Toolbar>
          <IconButton
            color="#7c7c7c"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: "auto", display: { sm: "none" } }}>
            <MenuIcon />
          </IconButton>
          <Typography
            component="div"
            sx={{
              flexGrow: 1,
              display: "flex",
              gap: "1rem",
            }}>
            <Link to={"/"}>
              <Avatar
                alt="Remy Sharp"
                src="/assets/img/logo.png"
                sx={{
                  width: { xs: 65, sm: 80 },
                  height: { xs: 65, sm: 80 },
                  padding: "5px",
                }}
              />
            </Link>
            <Link to={"/"}>
              <Avatar
                alt="Remy Sharp"
                src="/assets/img/logo2.png"
                sx={{
                  width: { xs: 65, sm: 80 },
                  height: { xs: 65, sm: 80 },
                  padding: "5px",
                }}
                className={classes.clubLogo}
              />
            </Link>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {myNav.map((item, index) => (
              <Button
                key={index}
                sx={{ color: "#fff" }}
                className={classes.drawerButton}>
                <PopupMenu
                  title={item.title}
                  menuItems={item.menuItems}
                />
              </Button>
            ))}
          </Box>
          <Button
            className={classes.drawerButton}
            href={`${isAdmin ? "/dashboard/profile" : "/login"}`}>
            {isAdmin ? "My Profile" : "Login"}
          </Button>
          <Button
            href="https://account.lionsclubs.org/account/login?returnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3Dlci-home-app%26redirect_uri%3Dhttps%253A%252F%252Fmyapps.lionsclubs.org%252Fauth-callback%26response_type%3Did_token%2520token%26scope%3Dopenid%2520profile%2520lci-userapi%2520lci-mobileapi%2520lci-reporting%26state%3Daf66166248ad43ef83b1b03061f580d7%26nonce%3Da0c87692e26641f39278bf8b66824998"
            className={classes.drawerButton}
            target="_blank">
            My LCI
          </Button>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}>
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ p: 0 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

Navbar.propTypes = {
  window: PropTypes.func,
};

export default Navbar;
