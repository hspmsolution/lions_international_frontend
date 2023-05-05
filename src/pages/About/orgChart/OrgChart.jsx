import { Box, Container, Typography } from "@mui/material";
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CustomizedBreadcrumbs from "../../../components/Breadcrumb/Breadcrumb";
import ZoneTable from "./ZoneTable";

function createData(name, id) {
    return { name, id };
}

function OrgChart() {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <>
            <Box sx={{ backgroundImage: "url('/assets/img/bggg.png')", backgroundAttachment: 'fixed' }} >
                <CustomizedBreadcrumbs label={'Organization Chart'} />
                <Container sx={{ pb: '3rem' }}>
                    {districtData.map((region, index) => (
                        <Accordion expanded={expanded === index} onChange={handleChange(index)} key={index}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                                sx={{ display: { sm: 'block', md: 'flex' } }}
                            >
                                <Typography variant="h4" sx={{ width: '33%', flexShrink: 0 }}>
                                    {region.name}
                                </Typography>
                                <Typography variant="h5" sx={{ color: 'text.secondary' }}>{region.chairPerson}</Typography>
                            </AccordionSummary>
                            <AccordionDetails sx={{ display: 'flex', flexWrap: 'wrap', gap: '3rem' }}>
                                {region.zones?.map((zone, i) => (
                                    <ZoneTable zone={zone} key={i} />
                                ))}
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </Container>
            </Box>
        </>
    )
}

const districtData = [
    {
        name: 'Region 1',
        chairPerson: 'RegionChairPerson 1',
        zones: [
            {
                name: 'Zone 1',
                chairPerson: 'ZoneChairPerson 1',
                clubs: [
                    {
                        name: 'club1',
                        id: 1,
                    },
                    {
                        name: 'club2',
                        id: 2,
                    },
                    {
                        name: 'club3',
                        id: 3,
                    },
                ]
            },
            {
                name: 'Zone 2',
                chairPerson: 'ZoneChairPerson 2',
                clubs: [
                    {
                        name: 'club1',
                        id: 1,
                    },
                ]
            },
            {
                name: 'Zone 3',
                chairPerson: 'ZoneChairPerson 3',
                clubs: [
                    {
                        name: 'club1',
                        id: 1,
                    },
                    {
                        name: 'club2',
                        id: 2,
                    },
                ]
            },
        ]
    },
    {
        name: 'Region 2',
        chairPerson: 'RegionChairPerson 2',
        zones: [
            {
                name: 'Zone 1',
                chairPerson: 'ZoneChairPerson 1'
            },
            {
                name: 'Zone 2',
                chairPerson: 'ZoneChairPerson 2'
            },
        ]
    },
    {
        name: 'Region 2',
        chairPerson: 'RegionChairPerson 2',
        zones: [
            {
                name: 'Zone 1',
                chairPerson: 'ZoneChairPerson 1'
            }
        ]
    },
]

export default OrgChart;