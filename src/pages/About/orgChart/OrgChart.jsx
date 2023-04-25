import { Container, Typography } from "@mui/material";
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CustomizedBreadcrumbs from "../../../components/Breadcrumb/Breadcrumb";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, id) {
  return { name, id };
}

const rows = [
  createData('Club1', 1),
  createData('Club2', 2),
  createData('Club3', 3),
];

function OrgChart() {
    const [expandedZone, setExpandedZone] = React.useState(false);
    const [expandedRegion, setExpandedRegion] = React.useState(false);

    const handleChangeZone = (panel) => (event, isExpanded) => {
        setExpandedZone(isExpanded ? panel : false);
    };
    const handleChangeRegion = (panel) => (event, isExpanded) => {
        setExpandedRegion(isExpanded ? panel : false);
    };

    return (
        <>

            <CustomizedBreadcrumbs label={'Organization Chart'} />
            <Container sx={{ marginY: '3rem' }}>
                {districtData.map((region, index) => (
                    <Accordion expanded={expandedRegion === index} onChange={handleChangeRegion(index)} key={index}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <Typography variant="h4" sx={{ width: '33%', flexShrink: 0 }}>
                                {region.name}
                            </Typography>
                            <Typography variant="h5" sx={{ color: 'text.secondary' }}>{region.chairPerson}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            {region.zones?.map((zone, i) => (
                                <Accordion expanded={expandedZone === i} onChange={handleChangeZone(i)} key={i}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1bh-content"
                                        id="panel1bh-header"
                                    >
                                        <Typography variant="h4" sx={{ width: '33%', flexShrink: 0 }}>
                                            {zone.name}
                                        </Typography>
                                        <Typography variant="h5" sx={{ color: 'text.secondary' }}>{zone.chairPerson}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <TableContainer component={Paper}>
                                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell>Name</TableCell>
                                                        <TableCell align="right">Club ID</TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {rows.map((row) => (
                                                        <TableRow
                                                            key={row.name}
                                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                        >
                                                            <TableCell component="th" scope="row">
                                                                {row.name}
                                                            </TableCell>
                                                            <TableCell align="right">{row.id}</TableCell>
                                                        </TableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                    </AccordionDetails>
                                </Accordion>
                            ))}
                        </AccordionDetails>
                    </Accordion>
                ))}
            </Container>
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
                chairPerson: 'ZoneChairPerson 1'
            },
            {
                name: 'Zone 2',
                chairPerson: 'ZoneChairPerson 2'
            },
            {
                name: 'Zone 3',
                chairPerson: 'ZoneChairPerson 3'
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
            {
                name: 'Zone 3',
                chairPerson: 'ZoneChairPerson 3'
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