import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FormControl, TextField } from '@mui/material';
import DatePicker from './render-date-picker';
import { StatAPI } from '../api/stats.api';
import InputAdornment from '@mui/material/InputAdornment';

export default function AddStatModal(props) {
    const { showModal, handleClose, refreshData } = props;

    const [selectedDate, setDate] = useState(new Date());
    const [Views, setViews] = useState(1);
    const [Clicks, setClicks] = useState(1);
    const [Cost, setCost] = useState(1);

    const handleDateChange = (newValue) => {
        setDate(newValue);
    }

    const handleCreateButton = async () => {
        let localeStartDate = new Date(selectedDate).toLocaleDateString('en-CA');
        let dataModel = { date: localeStartDate, views: Views, clicks: Clicks, cost: Cost };
        await StatAPI.addStats(dataModel);
        refreshData();
        handleClose();
    }

    return (
        <Modal
            open={showModal}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 400,
                bgcolor: 'background.paper',
                border: '2px solid #000',
                boxShadow: 24,
                p: 4,
            }}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Add new Advertising Statistic
                </Typography>
                <br />
                <div>
                    <FormControl fullWidth >
                        <DatePicker label="Date" selectedDate={selectedDate} handleDateChange={handleDateChange} />
                    </FormControl>
                    <FormControl fullWidth >
                        <TextField InputProps={{ inputProps: { min: 1 } }} type="number" label="Views" value={Views} onChange={(e) => { setViews(e.target.value) }} placeholder='0' variant='filled' />
                    </FormControl>
                    <FormControl fullWidth >
                        <TextField InputProps={{ inputProps: { min: 1 } }} type="number" label="Clicks" value={Clicks} onChange={(e) => { setClicks(e.target.value) }} placeholder='0' variant='filled' />
                    </FormControl>
                    <FormControl fullWidth >
                        <TextField InputProps={{startAdornment: <InputAdornment position="start">£</InputAdornment>, inputProps: { min: 1 }  }} type="currency" label="Cost" value={Cost} onChange={(e) => { setCost(e.target.value) }} placeholder='0' variant='filled' />
                    </FormControl>
                </div>
                <br />
                <Stack justifyContent={'flex-end'} spacing={2} direction="row">
                    <Button variant="contained" onClick={handleClose} color="error">Cancel</Button>
                    <Button variant="contained" onClick={handleCreateButton} color="success">Create</Button>
                </Stack>
            </Box>
        </Modal>
    );
}
