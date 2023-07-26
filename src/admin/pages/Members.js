import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
  Typography,
} from "@mui/material";

import { makeStyles } from "@mui/styles";
import { getClubMembers } from "../../actions/member";

const useStyles = makeStyles({
  Grid: {
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
});
const rows = [
  {
    id: 1,
    title: "Lion Member",
    FullName: "ss",
    ClubName: "News Title 1",
    DOB: "12/10/1996",
  },
  {
    id: 2,
    title: "Lion Member",
    FullName: "ss",
    ClubName: "News Title 1",
    DOB: "12/10/1996",
  },
  {
    id: 3,
    title: "Lion Member",
    FullName: "ss",
    ClubName: "News Title 1",
    DOB: "12/10/1996",
  },
  {
    id: 4,
    title: "Lion Member",
    FullName: "ss",
    ClubName: "News Title 1",
    DOB: "12/10/1996",
  },
  {
    id: 5,
    title: "Lion Member",
    FullName: "ss",
    ClubName: "News Title 1",
    DOB: "12/10/1996",
  },
];

export default function Members() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const clubMembers = useSelector((state) => state.clubMembers.members);
  useEffect(() => {
    dispatch(getClubMembers());
  }, []);

  return (
    <Box
      bgcolor={"white"}
      sx={{ padding: { xs: "1rem 0.5rem", sm: "3rem" } }}
      borderRadius={4}>
      <Typography variant="h6">Members Details</Typography>
      <TableContainer style={{ marginTop: "16px" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">Sr No</TableCell>
              <TableCell align="left">Title</TableCell>
              <TableCell align="left">Full Name</TableCell>
              <TableCell align="left">Club Name</TableCell>
              <TableCell align="left">Date Of Birth</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {clubMembers.map((row, index) => (
              <TableRow key={row.id}>
                <TableCell
                  align="center"
                  component="th"
                  scope="row">
                  {index + 1}
                </TableCell>
                <TableCell align="left">{row.title}</TableCell>
                <TableCell align="left">
                  {row.firstName + " " + row.lastName}
                </TableCell>
                <TableCell align="left">{row.clubName}</TableCell>
                <TableCell align="left">{row.dob.substring(0, 10)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
