import * as React from 'react';
import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';
import useStyles from './Styles';
import { useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
    const backgroundColor =
        theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[800];
    return {
        backgroundColor,
        height: theme.spacing(3),
        color: theme.palette.text.primary,
        fontWeight: theme.typography.fontWeightRegular,
        '&:hover, &:focus': {
            backgroundColor: emphasize(backgroundColor, 0.06),
        },
        '&:active': {
            boxShadow: theme.shadows[1],
            backgroundColor: emphasize(backgroundColor, 0.12),
        },
    };
}); // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

export default function CustomizedBreadcrumbs({ label, subLabel }) {
    const classes = useStyles();
    const navigate = useNavigate();

    return (
        <div role="presentation" onClick={handleClick} className={classes.breadcrumbCont}>
            <Box sx={{ paddingTop: '2rem' }}>
                {subLabel ?
                    <Typography
                        variant='h3'
                        sx={{ position: 'absolute', transform: 'translateX(-50%)', left: '50%', top: '58%' }}
                    >{subLabel}</Typography> :
                    <Typography
                        variant='h3'
                        sx={{ position: 'absolute', transform: 'translateX(-50%)', left: '50%', top: '58%' }}
                    >{label}</Typography>
                }
                <Breadcrumbs aria-label="breadcrumb" className={classes.breadcrumb}>
                    <StyledBreadcrumb
                        component="a"
                        href="#"
                        label="Home"
                        icon={<HomeIcon fontSize="small" />}
                        onClick={() => navigate('/')}
                    />
                    <StyledBreadcrumb component="a" href="#" label={label} />
                    {subLabel ?
                        <StyledBreadcrumb component="a" href="#" label={subLabel} />
                        : null}
                </Breadcrumbs>
            </Box>
        </div>
    );
}