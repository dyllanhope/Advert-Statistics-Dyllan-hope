import * as React from 'react';
import Container from '@mui/material/Container';
import { useState, useEffect } from 'react';
import { StatAPI } from '../api/stats.api';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import ClearButton from './render-clear-button';
import DatePicker from './render-date-picker';
import BuildResults from './build-stat-search-results';
import AddStatModal from './render-add-stat-modal';
import { createTheme, ThemeProvider } from '@mui/material/styles';


export default function RenderStatistics() {
    const [stats, setStats] = useState([]);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [showAddModal, setShowAddModal] = useState(false);


    const darkTheme = createTheme({ palette: { mode: 'light' } });

    const fetchDateRange = async () => {
        if (startDate === null || endDate === null) {
            const data = await StatAPI.getAll();

            setStats(data);
        } else {
            const data = await StatAPI.getRange(startDate, endDate);
            setStats(data);
        }
    }

    const handleStartDateChange = (newValue) => {
        setStartDate(newValue);
    }

    const handleEndDateChange = (newValue) => {
        setEndDate(newValue);
    }

    useEffect(() => {
        async function getAllStats() {
            const data = await StatAPI.getAll();

            data.sort().reverse();
            setStats(data);
        }

        getAllStats();
    }, []);

    return (
        <Container>
            <ThemeProvider theme={darkTheme}>
                <AddStatModal refreshData={()=>{fetchDateRange()}} showModal={showAddModal} handleClose={() => { setShowAddModal(false) }} />

                <Grid container spacing={2} alignItems="right">
                    <Grid item xs={4}>
                        <DatePicker label="Start Date" selectedDate={startDate} handleDateChange={handleStartDateChange} />
                    </Grid>
                    <Grid item xs={4}>
                        <Box
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                            justifyContent="center"
                        >
                            <ButtonGroup
                                orientation="vertical"
                                aria-label="vertical contained button group"
                                variant="text"
                            >
                                <Button color='primary' onClick={fetchDateRange}>
                                    Search for Stats
                                </Button>
                                <Button color='success' onClick={() => { setShowAddModal(true) }}>
                                    Add new Stats
                                </Button>
                                <ClearButton setStats={() => { setStats([]) }} />
                            </ButtonGroup>
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <DatePicker label="End Date" selectedDate={endDate} handleDateChange={handleEndDateChange} />
                    </Grid>
                    <BuildResults stats={stats} />
                </Grid>
            </ThemeProvider>
        </Container>
    );
}