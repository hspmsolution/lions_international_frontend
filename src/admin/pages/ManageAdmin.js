import React, { useState, useEffect } from 'react';
import { Link} from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import { Button, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import TableContainer from '@mui/material/TableContainer';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AddIcon from '@mui/icons-material/Add';

const user = [
  {
    id: 1,
    username: 'John Doe',
    email: 'johndoe@example.com',
    role:'admin',
    
  }
]

const useStyles = makeStyles(() => ({
  tcontainer: {
    width: '90%',
  },
  table_cell: {
    fontWeight: 600,
    fontFamily: "'Poppins', sans-serif",
    letterSpacing: '.00625em',
    fontSize: '1rem',
    textAlign: 'center',
  },
  table_row: {
    fontWeight: 600,
  },
  profit_cell: {
    color: '#137333',
    background: '#e6f4ea',
    padding: '14px',
    borderRadius: '9px',
    fontWeight: 600,
  },

}));

const ManageAdmin = () => {
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    async function getadmins() {
      const res = await fetch('http://localhost:5000/api/admin/getadmins');
      setAdmins(await res.json());
    }
    getadmins();
  }, []);

  console.log(admins);
  const classes = useStyles();
  return (
    <>
      <Box sx={{ py: 2 }}>
        <Link to="/register">
          <Button color="primary" size="large" type="submit" variant="contained">
            <AddIcon /> Add Admin
          </Button>
        </Link>
      </Box>
      <div className={classes.tcontainer}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                {['Sr no', 'User Name', 'Email', 'Role', 'Action'].map((data) => (
                  <TableCell
                    style={{
                      color: 'black',
                      fontWeight: '600',
                      textAlign: 'center',
                      fontSize: '18px',
                      padding: '15px 0 6px 0',
                    }}
                    key={data}
                  >
                    {data}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody className="table_body">
              {admins.map((user, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell align="center" className={classes.table_cell} style={{ fontWeight: '500' }}>
                      {user.id}
                    </TableCell>

                    <TableCell align="center" className={classes.table_cell} style={{ fontWeight: '500' }}>
                      {user.username}
                    </TableCell>
                    <TableCell align="center" className={classes.table_cell} style={{ fontWeight: '500' }}>
                      {user.email}
                    </TableCell>

                    <TableCell align="center" className={classes.table_cell} style={{ fontWeight: '500' }}>
                      {user.role}
                    </TableCell>

                    <TableCell align="center" className={classes.table_cell} style={{ fontWeight: '500' }}>
                      <DeleteForeverIcon />
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default ManageAdmin;
