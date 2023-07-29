import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { API_URL } from "../../../api";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import { Link } from "@mui/material";
import useStyles from "../../About/orgChart/Styles";

export default function ResourcesTable({ rows }) {
  const handleClick = (path) => {
    window.open(`${API_URL}${path}`, "_blank");
  };

  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Resources</TableCell>
            <TableCell align="right">Download</TableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{ height: "350px", overflowY: "scroll" }}>
          {rows?.map((row) => (
            <TableRow
              key={row.title}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell
                component="th"
                scope="row">
                {row.title}
              </TableCell>
              <TableCell align="right">
                <Link className={classes.clubName}>
                  <PictureAsPdfIcon onClick={() => handleClick(row.path)} />
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  ); 
}
