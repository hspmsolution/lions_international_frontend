import * as React from 'react';
import { Box, Container, Typography } from "@mui/material";
import CustomizedBreadcrumbs from "../../../components/Breadcrumb/Breadcrumb";
import ResourcesTable from './ResourcesTable';

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
                    <Box>
                        <Typography variant='h4' sx={{ textAlign: 'center' }}>District Resources</Typography>
                        <ResourcesTable rows={rows} />
                    </Box>
                    <Box>
                        <Typography variant='h4' sx={{ textAlign: 'center' }}>International Resources</Typography>
                        <ResourcesTable rows={rows} />
                    </Box>
                </Container>
            </Box>
        </>
    )
}