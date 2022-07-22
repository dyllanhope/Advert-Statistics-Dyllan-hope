import * as React from 'react';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Row from '../components/render-rows';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';


export default function BuildResults(props) {
    const { stats } = props;

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.common.white,
        }
    }));

    if (stats.length === 0) {
        return (
            <Grid item xs={12}>
                <Typography align='center' variant="h4" gutterBottom component="div">
                    No results found, add some statistics.
                </Typography>
            </Grid>
        )
    } else {
        return (
            <Grid item xs={12}>
                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                >
                    <TableContainer elevation={3} component={Paper}>
                        <Table aria-label="collapsible table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell sx={{background: '#0093E9'}} align='center' colSpan={12}>Form dates</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {stats.map((stat) => (
                                    <Row key={stat.id} stats={stat} />
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Grid>
        )
    }
}