import React, { useEffect, useState } from 'react'
import AdminHeader from '../Components/adminHeader'
import { Button, Container, MenuItem, Paper, Select, Table, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material'
import TableBody from '@mui/material/TableBody';
import Footer from '../Components/footer';
import AdminEventReqDetails from './AdminEventReqDetails';
import Avatar from '@mui/material/Avatar';

export default function AdminEventReq() {
    const [showDetails, setShowDetails] = useState(false);
    const [selectedTableId, setSelectedTableId] = useState(null);

    


    function createData(id, name, email, calories, fat, carbs, protein) {
        return { id, name, email, calories, fat, carbs, protein };
    }
    const rows = [
        createData(1, 'Jane Doe', 'jane.doe@gmail.com', 'Innovation Expo', 'GYM', 'CCS', '12-05-23'),
        createData(2, 'Clark Doe', 'jane.doe@gmail.com', 'Innovation Expo', 'GYM', 'CCS', '12-05-23'),
        createData(3, 'Jonas Doe', 'jane.doe@gmail.com', 'Innovation Expo', 'GYM', 'CCS', '12-05-23'),
        createData(4, 'Shem Doe', 'jane.doe@gmail.com', 'Innovation Expo', 'GYM', 'CCS', '12-05-23'),
        createData(5, 'Von Doe', 'jane.doe@gmail.com', 'Innovation Expo', 'GYM', 'CCS', '12-05-23'),
        createData(6, 'Ludi Doe', 'jane.doe@gmail.com', 'Innovation Expo', 'GYM', 'CCS', '12-05-23'),
        createData(7, 'John Doe', 'jane.doe@gmail.com', 'Innovation Expo', 'GYM', 'BSIT', '12-05-23'),
    ];

    const [filterValue, setFilterValue] = useState(''); // State for the selected filter value
    const filteredRows = rows.filter((row) => !filterValue || row.carbs === filterValue);

    return (
        <div>



            <AdminHeader />
            <img src="./img/GLE-Building.png" alt="logo" className="banner" />
            <Container maxWidth="lg">
                <h2 style={{ fontFamily: "'DM Sans', sans-serif", marginTop: "5rem" }}>Event Request</h2>

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
                            {[...new Set(rows.map((row) => row.carbs))].map((carbs) => (
                                <MenuItem key={carbs} value={carbs}>
                                    {carbs}
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
                
                {showDetails && (
                    <AdminEventReqDetails setShowDetails={setShowDetails} />
                )}
            </Container>
            <Footer />
        </div>
    )
}
