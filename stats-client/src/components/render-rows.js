import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export default function Row(props) {
    const { stats } = props;
    const [open, setOpen] = React.useState(false);

    function currencyFormat(num) {
        return `£${num.toFixed(2)}`;
      }

    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton
                    
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell align='left' component="th" scope="row">
                    {new Date(stats.date).toLocaleDateString('en-CA')}
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                Statistics for {new Date(stats.date).toLocaleDateString('en-CA')}
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Views</TableCell>
                                        <TableCell>Clicks</TableCell>
                                        <TableCell>Cost</TableCell>

                                        <TableCell align="right">CPC</TableCell>
                                        <TableCell align="right">CPM</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow key={stats.id}>
                                        <TableCell component="th" scope="row">{stats.views}</TableCell>
                                        <TableCell>{stats.clicks}</TableCell>
                                        <TableCell>{currencyFormat(parseInt(stats.cost))}</TableCell>
                                        <TableCell align="right">{currencyFormat((stats.cost / stats.clicks * 100) / 100)}</TableCell>
                                        <TableCell align="right">{currencyFormat(((stats.cost / stats.views * 1000) * 100) / 100)}</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}