import { Helmet } from 'react-helmet-async';
import React, { useState } from 'react';
import { TextField, Button, Checkbox, FormControlLabel, FormGroup, InputLabel, Select, MenuItem } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export const det = [];

const options = [
    { label: 'Channa', value: '1' },
    { label: 'Barley', value: '2' },
    { label: 'Bajra', value: '3' },
    { label: 'Moong', value: '4' },
    { label: 'Maize', value: '5' },
    { label: 'Paddy', value: '6' }
];

function Form() {
    const classes = useStyles();
    const [data, setData] = useState([]);
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');
    const [place, setPlace] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };
    const quantityChange = (e) => {
        setQuantity(e.target.value)
    }
    const priceChange = (e) => {
        setPrice(e.target.value)
    }
    const placeChange = (e) => {
        setPlace(e.target.value)
    }

    const handleSubmit = () => {
        det.push(selectedOption, quantity, price, place)
        alert('the Data is updated in the Line Chart', det)
    }
    return (
        <>
            <Helmet>
                <title> Dashboard: Update Products | Minimal UI </title>
            </Helmet>
            <form className={classes.root} noValidate autoComplete="off">
                <InputLabel id="select-label">Select a Category</InputLabel>
                <Select
                    labelId="select-label"
                    value={selectedOption}
                    onChange={handleOptionChange}
                    label="Select an option"
                >
                    {options.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </Select>
                <TextField id="standard-basic" label="Quantity" onChange={quantityChange} />
                <TextField id="standard-basic" label="Price" onChange={priceChange} />
                <TextField id="standard-basic" label="Place" onChange={placeChange} />
                <Button variant="contained" color="primary" onClick={handleSubmit}>
                    Submit
                </Button>
            </form>
            {console.log(selectedOption, price, place, quantity)}
            {console.log(det)}
        </>

    );
}

export default Form;

