import * as React from 'react';
import { Box, Container, Typography } from "@mui/material";
import CustomizedBreadcrumbs from "../../../components/Breadcrumb/Breadcrumb";
import ResourcesTable from './ResourcesTable';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function createData(name, src) {
    return { name, src };
}

const rows = [
    createData('file1'),
    createData('file2'),
    createData('file3'),
    createData('file4'),
    createData('file5'),
];

export default function Download() {
    return (
        <>
            <Box sx={{ backgroundImage: "url('/assets/img/bggg.png')", backgroundAttachment: 'fixed', pb: '4rem' }}>
                <CustomizedBreadcrumbs label={'Resources'} subLabel={'Downloads'} />
                <Container sx={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={5}>
                            <Grid item xs={12} md={6}>
                                <Item>
                                    <Box>
                                        <Typography variant='h4' sx={{ textAlign: 'center', mb: '1rem' }}>District Resources</Typography>
                                        <ResourcesTable rows={rows} />
                                    </Box>
                                </Item>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Item>
                                    <Box>
                                        <Typography variant='h4' sx={{ textAlign: 'center', mb: '1rem' }}>International Resources</Typography>
                                        <ResourcesTable rows={rows} />
                                    </Box>
                                </Item>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>
        </>
    )
}