import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name) {
    return { name };
}

const rows = [
    createData('Frozen yoghurt', 159),
];

export default function ZoneTable({ zone }) {
    return (
        <>
            <TableContainer component={Paper} sx={{ display: 'flex', minWidth: 250, maxWidth: 350, backgroundColor: '#F4F6F8' }}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ textAlign: 'center', backgroundColor: '#3b557e', color: '#fff'  }}>{zone.name}</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <Table aria-label="simple table" sx={{ borderRadius: '6px' }}>
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{ backgroundColor: '#48689b', color: '#fff' }}>Club Names</TableCell>
                                    <TableCell sx={{ backgroundColor: '#48689b', color: '#fff' }} align="right">Club Id's</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {zone.clubs?.map((club, id) => (
                                    <TableRow
                                        key={club.id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {club.name}
                                        </TableCell>
                                        <TableCell align="right">{club.id}</TableCell>
                                    </TableRow>
                                ))} 
                            </TableBody>
                        </Table>
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
} 