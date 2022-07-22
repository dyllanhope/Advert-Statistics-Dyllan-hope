import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import { StatAPI } from '../api/stats.api.ts';

export default function ClearButton(props) {
    const { setStats } = props;
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const clearData = async () => {
        setOpen(false);
        await StatAPI.clearStats();
        setStats([]);
    }

    return (
        <div>
            <Button variant="contained" color='error' onClick={handleClickOpen}>
                Clear all Statistics
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Are you sure you want to do that?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        If you select "Continue" you will delete all statistics that have been saved.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button color='error' onClick={clearData} autoFocus>
                        Continue
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}