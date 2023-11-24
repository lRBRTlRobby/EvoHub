import React from 'react'
import AdminHeader from '../Components/adminHeader'
import { Button, Container, Paper, Table, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import TableBody from '@mui/material/TableBody';
import Footer from '../Components/footer';

export default function AdminEventReq() {
    function createData(id, name, email, calories, fat, carbs, protein) {
        return {id, name, email, calories, fat, carbs, protein };
    }
    const rows = [
        createData(1, 'Jane Doe', 'jane.doe@gmail.com', 'Innovation Expo', 'GYM', 'CCS', '12-05-23'),
        createData(2, 'Jane Doe', 'jane.doe@gmail.com', 'Innovation Expo', 'GYM', 'CCS', '12-05-23'),
        createData(3, 'Jane Doe', 'jane.doe@gmail.com', 'Innovation Expo', 'GYM', 'CCS', '12-05-23'),
        createData(4, 'Jane Doe', 'jane.doe@gmail.com', 'Innovation Expo', 'GYM', 'CCS', '12-05-23'),
        createData(5, 'Jane Doe', 'jane.doe@gmail.com', 'Innovation Expo', 'GYM', 'CCS', '12-05-23'),
        createData(6, 'Jane Doe', 'jane.doe@gmail.com', 'Innovation Expo', 'GYM', 'CCS', '12-05-23'),
    ];
    return (
        <div>
            <AdminHeader />
            <img src="./img/admineventreq.jpg" alt="logo" className="banner" />
            <Container maxWidth="lg">
                <h2 style={{ fontFamily: "'DM Sans', sans-serif", marginTop: "5rem" }}>Event Request</h2>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow sx={{ backgroundColor: '#C02147' }}>
                                <TableCell align="center" sx={{ color: 'white' }}>Organizers</TableCell>
                                <TableCell align="center" sx={{ color: 'white' }}>Event Name</TableCell>
                                <TableCell align="center" sx={{ color: 'white' }}>Event Location</TableCell>
                                <TableCell align="center" sx={{ color: 'white' }}>Department</TableCell>
                                <TableCell align="center" sx={{ color: 'white' }}>Event Date</TableCell>
                                <TableCell align="center" sx={{ color: 'white' }}></TableCell>
                                <TableCell align="center" sx={{ color: 'white' }}></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 }, cursor: 'pointer' }}
                                    onClick={() => {
                                        alert('You clicked on ' + row.id);
                                    }}
                                    
                                >

                                    <TableCell component="th" scope="row" align='center'>
                                        {row.name}
                                        <p>{row.email}</p>
                                    </TableCell>
                                    <TableCell align="center">{row.calories}</TableCell>
                                    <TableCell align="center">{row.fat}</TableCell>
                                    <TableCell align="center">{row.carbs}</TableCell>
                                    <TableCell align="center">{row.protein}</TableCell>
                                    <TableCell align="center"><Button>Approve</Button></TableCell>
                                    <TableCell align="center"><Button>Decline</Button></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
            <Footer />
        </div>
    )
}
