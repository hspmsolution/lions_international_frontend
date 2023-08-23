import React, { useEffect } from "react";
import {
  Paper,
  Divider,
  Typography,
  Icon,
  Box,
} from "@mui/material";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";


const months = [
  "January 2023",
  "February 2023",
  "March 2023",
  "April 2023",
  "May 2023",
  "June 2023",
  "July 2023",
  "August 2023",
  "September 2023",
  "October 2023",
  "November 2023",
  "December 2023",
];

function AllAdminReport() {
  const [open, setOpen] = React.useState(false);

  const clubReporting = useSelector(
    (state) => state.adminReporting.clubReporting
  );
  console.log(clubReporting);

  return (
    <>
      <Box
        sx={{
          backgroundColor: "white",
          padding: "2rem",
          borderRadius: "0.5rem",
        }}>
        <Typography
          variant="h6"
          style={{ fontWeight: "bold", fontSize: "24px" }}>
          {" "}
          All Admin Reporting{" "}
        </Typography>
        <Box
          bgcolor="white"
          p={3}>
          <TableContainer component={Paper}>
            <Table aria-label="news table">
              <TableHead>
                <TableRow>
                  <TableCell>Sr No.</TableCell>
                  <TableCell>Club Name</TableCell>
                  <TableCell>Club Id</TableCell>
                  {months.map((month) => (
                    <TableCell key={month}>{month}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {clubReporting.map((club, index) => (
                  <TableRow key={club.clubId}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{club.clubName}</TableCell>
                    <TableCell>{club.clubId}</TableCell>
                    <TableCell>
                      {club.month1 == "0" ? (
                        <DisabledByDefaultIcon color="error" />
                      ) : (
                        <CheckBoxIcon color="success" />
                      )}
                    </TableCell>
                    <TableCell>
                      {club.month2 == "0" ? (
                        <DisabledByDefaultIcon color="error" />
                      ) : (
                        <CheckBoxIcon color="success" />
                      )}
                    </TableCell>
                    <TableCell>
                      {club.month3 == "0" ? (
                        <DisabledByDefaultIcon color="error" />
                      ) : (
                        <CheckBoxIcon color="success" />
                      )}
                    </TableCell>
                    <TableCell>
                      {club.month4 == "0" ? (
                        <DisabledByDefaultIcon color="error" />
                      ) : (
                        <CheckBoxIcon color="success" />
                      )}
                    </TableCell>
                    <TableCell>
                      {club.month5 == "0" ? (
                        <DisabledByDefaultIcon color="error" />
                      ) : (
                        <CheckBoxIcon color="success" />
                      )}
                    </TableCell>
                    <TableCell>
                      {club.month6 == "0" ? (
                        <DisabledByDefaultIcon color="error" />
                      ) : (
                        <CheckBoxIcon color="success" />
                      )}
                    </TableCell>
                    <TableCell>
                      {club.month7 == "0" ? (
                        <DisabledByDefaultIcon color="error" />
                      ) : (
                        <CheckBoxIcon color="success" />
                      )}
                    </TableCell>
                    <TableCell>
                      {club.month8 == "0" ? (
                        <DisabledByDefaultIcon color="error" />
                      ) : (
                        <CheckBoxIcon color="success" />
                      )}
                    </TableCell>
                    <TableCell>
                      {club.month9 == "0" ? (
                        <DisabledByDefaultIcon color="error" />
                      ) : (
                        <CheckBoxIcon color="success" />
                      )}
                    </TableCell>
                    <TableCell>
                      {club.month10 == "0" ? (
                        <DisabledByDefaultIcon color="error" />
                      ) : (
                        <CheckBoxIcon color="success" />
                      )}
                    </TableCell>
                    <TableCell>
                      {club.month11 == "0" ? (
                        <DisabledByDefaultIcon color="error" />
                      ) : (
                        <CheckBoxIcon color="success" />
                      )}
                    </TableCell>
                    <TableCell>
                      {club.month12 == "0" ? (
                        <DisabledByDefaultIcon color="error" />
                      ) : (
                        <CheckBoxIcon color="success" />
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </>
  );
}

export default AllAdminReport;
