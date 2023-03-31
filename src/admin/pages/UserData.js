import * as React from 'react';
import { styled } from '@mui/material/styles';

import Typography from "@mui/material/Typography";
import { Avatar, Icon ,Box,Paper,Grid,Card,CardContent, Button, IconButton} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Groups,Email,Phone ,Event,LocationCity, PhoneAndroid, Group, NumbersRounded, PostAdd, Person, Edit} from "@mui/icons-material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';

const useStyles = makeStyles({
  cardHeaders: {
    display: "flex",
    alignItems: "flex-start",
    gap: "0.5em",
    backgroundImage: 'url("/assets/img/PROFILE.avif")',
    backgroundPosition: "center",
    position:'relative',
    justifyContent:'flex-start',
    height:'40vh',
    flexDirection:'column',
    flexWrap:'nowrap',
    width:'100%',
    backgroundSize:'cover',

  },

  subheading: {
    display: "flex",
    justifyItems: "flex-end",
    width: "150px",
    alignItems: "center",
    padding:'10px',
  },
  icon:{
    width:'1.5em',
    height:'1.2em',
  },
});


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories,icon) {
  return { name, calories,icon };
}

const rows = [
  createData('Name', 159,<Person/>),
  createData('Email', 356,<Phone/>),
  createData('Contact', 356,<PhoneAndroid/>),
  createData('Club Name', 237,<Group/>),
  createData('Club Id', 262,<NumbersRounded/>),
  createData('Designation', 305,<PostAdd/>),
  
];

export default function UserData() {
  const classes = useStyles();


  return (
    <>
      <Paper elevation={3} sx={{width:'100%',height:'10%',borderRadius:'5px'}}>
        <div className={classes.cardHeaders}>
          <Avatar
            
            alt={""}
            src={""}
            sx={{ width: "200px", height: "200px",position:'absolute',bottom:'-96px',margin:'0 5em' }}
          >
          </Avatar>
        </div>
        
        <TableContainer component={Paper}>
        <Box dividers sx={{display: "flex",
    flexWrap:'wrap',
    alignItems: "center",
    justifyItems: "center",
    justifyContent: "flex-end",
    padding:'10px',}}>
          <Button sx={{fontSize:'1.25rem'}}><Edit/>Edit Profile</Button>
        </Box>
  <Table sx={{ minWidth: 700 }} aria-label="customized table">
    <TableBody>
      {rows.map((row) => (
        <StyledTableRow key={row.name}>
          <StyledTableCell component="th" scope="row" display="flex" alignItems="center" justifyContent='flex-start'>
            <div style={{ display: "flex", alignItems: "center",justifyContent:'flex-start',marginLeft: 'auto'
    ,width:' 23% '}}>
              {row.icon} 
              <span style={{ marginLeft: "5px" }}>{row.name}</span>
            </div>
          </StyledTableCell>
          <StyledTableCell width="50%" align="left">{row.calories}</StyledTableCell>
        </StyledTableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer>
      </Paper>
    
    </>
  );
}
