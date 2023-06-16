import * as React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { API_URL } from "../../api";

import Typography from "@mui/material/Typography";
import {
  Avatar,
  Icon,
  Box,
  Paper,
  Grid,
  Card,
  CardContent,
  Button,
  IconButton,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import {
  Groups,
  Email,
  Phone,
  Event,
  LocationCity,
  PhoneAndroid,
  Group,
  NumbersRounded,
  PostAdd,
  Person,
  Edit,
} from "@mui/icons-material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";

const useStyles = makeStyles({
  cardHeaders: {
    display: "flex",
    alignItems: "flex-start",
    gap: "0.5em",
    backgroundImage: 'url("/assets/img/PROFILE.avif")',
    backgroundPosition: "center",
    position: "relative",
    justifyContent: "flex-start",
    height: "40vh",
    flexDirection: "column",
    flexWrap: "nowrap",
    width: "100%",
    backgroundSize: "cover",
  },

  subheading: {
    display: "flex",
    justifyItems: "flex-end",
    width: "150px",
    alignItems: "center",
    padding: "10px",
  },
  icon: {
    width: "1.5em",
    height: "1.2em",
  },
  tableRow: {
    marginLeft: "auto",
    "@media (max-width:600px)": {
      marginLeft: "0",
    },
  },
  profileImg: {
    "@media (max-width:600px)": {
      height: "150px",
      width: "150px",
      position: "relative",
      margin: "1rem auto",
      bottom: "-25px",
    },
  },
});

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    "@media (max-width:600px)": {
      fontSize: 11,
    },
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, calories, icon) {
  return { name, calories, icon };
}

export default function UserData() {
  const classes = useStyles();
  const navigate = useNavigate();
  const memberData = useSelector((state) => state.auth.authData);
  const rows = [
    createData(
      "Name",
      memberData?.firstName + " " + memberData?.lastName,
      <Person />
    ),
    createData("Email", memberData?.email, <Phone />),
    createData("Contact", memberData?.phone, <PhoneAndroid />),
    createData("Club Name", memberData?.clubName, <Group />),
    createData("Club Id", memberData?.clubId, <NumbersRounded />),
    createData("Designation", memberData?.title, <PostAdd />),
  ];
  return (
    <>
      <Paper
        elevation={3}
        sx={{ width: "100%", height: "10%", borderRadius: "5px" }}>
        <div className={classes.cardHeaders}>
          <Avatar
            sx={{
              width: "200px",
              height: "200px",
              position: "absolute",
              bottom: "-96px",
              margin: { xs: "1rem auto", md: "0 5em" },
            }}
            className={classes.profileImg}
            src={
              memberData?.picture
                ? API_URL + memberData.picture
                : memberData?.firstName.charAt(0)
            }
            alt={memberData?.firstName.charAt(0)}
          />
        </div>

        <TableContainer component={Paper}>
          <Box
            dividers
            sx={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyItems: "center",
              justifyContent: "flex-end",
              padding: "10px",
            }}>
            <Button
              sx={{ fontSize: "1.25rem" }}
              onClick={() => {
                navigate("/dashboard/edit-profile");
              }}>
              <Edit />
              Edit Profile
            </Button>
          </Box>
          <Table
            sx={{ minWidth: { xs: "auto", md: "700" } }}
            aria-label="customized table">
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell
                    component="th"
                    scope="row"
                    display="flex"
                    alignItems="center"
                    justifyContent="flex-start">
                    <div
                      className={classes.tableRow}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        // marginLeft: "auto",
                        width: " 23% ",
                      }}>
                      {row.icon}
                      <span style={{ marginLeft: "5px" }}>{row.name}</span>
                    </div>
                  </StyledTableCell>
                  <StyledTableCell
                    width="50%"
                    align="left">
                    {row.calories}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
}
