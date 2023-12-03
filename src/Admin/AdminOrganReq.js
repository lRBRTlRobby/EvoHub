import React, { useEffect, useState } from 'react'
import AdminHeader from '../Components/adminHeader'
import { Button, Container, MenuItem, Paper, Select, Table, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material'
import TableBody from '@mui/material/TableBody';
import Footer from '../Components/footer';
import AdminOrganReqDetails from './AdminOrganReqDetails';
import Avatar from '@mui/material/Avatar';

export default function AdminOrganReq() {
    const [showDetails, setShowDetails] = useState(false);
    const [selectedTableId, setSelectedTableId] = useState(null);




    function createData(id, name, email, role, department, organization) {
        return { id, name, email, role, department, organization};
    }
    const rows = [
        createData(1, 'Jane Doe', 'jane.doe@gmail.com', 'Faculty', 'CCS', 'GDSC'),
        createData(2, 'Clark Doe', 'jane.doe@gmail.com', 'Student','CCS', 'GDSC'),
        createData(3, 'Jonas Doe', 'jane.doe@gmail.com', 'Student', 'CCS', 'GDSC'),
        createData(4, 'Shem Doe', 'jane.doe@gmail.com', 'Faculty', 'CCS', 'GDSC'),
        createData(5, 'Von Doe', 'jane.doe@gmail.com', 'Staff', 'CCS', 'GDSC'),
        createData(6, 'Ludi Doe', 'jane.doe@gmail.com', 'Student', 'CCS', 'GDSC'),
        createData(7, 'John Doe', 'jane.doe@gmail.com', 'Staff', 'BSIT', 'GDSC'),
    ];

    const [filterValue, setFilterValue] = useState(''); // State for the selected filter value
    const filteredRows = rows.filter((row) => !filterValue || row.department === filterValue);

    return (
        <div>



            <AdminHeader />
            <img src="./img/adminorganreq.jpg" alt="logo" className="banner" />
            <Container maxWidth="lg">
                <h2 style={{ fontFamily: "'DM Sans', sans-serif", marginTop: "5rem" }}>Organizer Request</h2>

                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div>
                        {/* Dropdown/Select for filtering */}
                        <Select
                            value={filterValue}
                            onChange={(e) => { setFilterValue(e.target.value); setShowDetails(false); }}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}

                        >
                            <MenuItem value="" >
                                All
                            </MenuItem>
                            {/* Add unique carb values from your rows */}
                            {[...new Set(rows.map((row) => row.department))].map((department) => (
                                <MenuItem key={department} value={department}>
                                    {department}
                                </MenuItem>
                            ))}
                        </Select>
                    </div>
                    <div>
                        <TextField
                            className='txt'
                            id="fname"
                            label="Search"
                            type="text"
                            variant='outlined'
                        />
                    </div>
                </div>

                <br /><br />
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow sx={{ backgroundColor: '#C02147' }}>
                                <TableCell align="center" sx={{ color: 'white' }}>Users</TableCell>
                                <TableCell align="center" sx={{ color: 'white' }}>User Identification</TableCell>
                                <TableCell align="center" sx={{ color: 'white' }}>Department</TableCell>
                                <TableCell align="center" sx={{ color: 'white' }}>Organization</TableCell>
                                <TableCell align="center" sx={{ color: 'white' }}></TableCell>
                                <TableCell align="center" sx={{ color: 'white' }}></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {showDetails === true ? (
                                <>
                                    {filteredRows
                                        .filter(row => row.id === selectedTableId)
                                        .map((row) => (
                                            <TableRow
                                                key={row.id}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 }, cursor: 'pointer' }}
                                                onClick={(e) => {
                                                    if (!e.target.closest('button')) {
                                                        // Only trigger the alert if the clicked element is not a button
                                                        // alert('You clicked on ' + row.id);
                                                        setShowDetails(!showDetails);
                                                        setSelectedTableId(row.id);

                                                    }
                                                }}

                                            >

                                                <TableCell component="th" scope="row" align='center'>
                                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                                        <Avatar alt={row.name} src="/static/images/avatar/2.jpg" sx={{ marginRight: '1rem' }} />
                                                        <div>
                                                            {row.name}
                                                            <p>{row.email}</p>
                                                        </div>
                                                    </div>

                                                </TableCell>
                                                <TableCell align="center">{row.role}</TableCell>
                                                <TableCell align="center">{row.department}</TableCell>
                                                <TableCell align="center">{row.organization}</TableCell>
                                            </TableRow>
                                        ))}
                                </>
                            ) : (
                                <>
                                    {


                                        filteredRows.map((row) => (
                                            <TableRow
                                                key={row.id}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 }, cursor: 'pointer' }}
                                                onClick={(e) => {
                                                    if (!e.target.closest('button')) {
                                                        // Only trigger the alert if the clicked element is not a button
                                                        // alert('You clicked on ' + row.id);
                                                        setShowDetails(!showDetails);
                                                        setSelectedTableId(row.id);

                                                    }
                                                }}

                                            >

                                                <TableCell component="th" scope="row" align='center' sx={{ display: 'flex', justifyContent: 'center' }}>
                                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                                        <Avatar alt={row.name} src="/static/images/avatar/2.jpg" sx={{ marginRight: '1rem' }} />
                                                        <div>
                                                            {row.name}
                                                            <p>{row.email}</p>
                                                        </div>
                                                    </div>
                                                </TableCell>
                                                <TableCell align="center">{row.role}</TableCell>
                                                <TableCell align="center">{row.department}</TableCell>
                                                <TableCell align="center">{row.organization}</TableCell>
                                                <TableCell align="center" sx={{ zIndex: 1 }}><Button><img src="./img/Edit.png" alt="Edit" /></Button></TableCell>
                                                <TableCell align="center"><Button><img src="./img/Delete.png" alt="Edit" /></Button></TableCell>
                                            </TableRow>
                                        ))}
                                </>
                            )}

                        </TableBody>
                    </Table>
                </TableContainer>
                {showDetails && (
                    <AdminOrganReqDetails setShowDetails={setShowDetails} />
                )}
            </Container>
            <Footer />
        </div>
    )
}
