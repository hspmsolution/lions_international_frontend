import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  Checkbox,
  TextField,
} from '@mui/material';

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(3),
    maxHeight: 400,
  },
  checkbox: {
    padding: 0,
  },
}));

const StepTwoForm = () => {
  const classes = useStyles();
  const [fieldData, setFieldData] = useState([
    { id: 1, title: 'Field 6', count: 0, selected: false },
    { id: 2, title: 'Field 7', count: 1, selected: false },
    { id: 3, title: 'Field 8', count: 0, selected: false },
    { id: 4, title: 'Field 9', count: 1, selected: false },
    { id: 5, title: 'Field 10', count: 0, selected: false },
  ]);
  const handleCheckboxChange = index => {
    const updatedFieldData = [...fieldData];
    updatedFieldData[index].selected = !updatedFieldData[index].selected;
    setFieldData(updatedFieldData);
    };
    
    const handleCountChange = (index, value) => {
    const updatedFieldData = [...fieldData];
    updatedFieldData[index].count = value;
    setFieldData(updatedFieldData);
    };
  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Step One
      </Typography>


      <TableContainer component={Paper} className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Count</TableCell>
              <TableCell>Checkbox</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {fieldData.map(({ id, title, count, selected }, index) => (
              <TableRow key={id}>
                <TableCell>{id}</TableCell>
                <TableCell>{title}</TableCell>
                <TableCell><TextField
                disabled={count !== 1}
                type="number"
                value={count === 1 ? index + 1 : 0}
                onChange={event =>
                  handleCountChange(index, parseInt(event.target.value))
                }
              /></TableCell>
                <TableCell className={classes.checkbox}>
                <Checkbox
                checked={selected}
                onChange={() => handleCheckboxChange(index)}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
</div>);
}
export default StepTwoForm;