import './App.css';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import RenderStatistics from './components/render-stats';
import { grey } from '@mui/material/colors';

function App() {
  return (
    <main>
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Advertising Statistics application
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          bgcolor: grey,
          pt: 8,
          pb: 6
        }}
      >
        <RenderStatistics />
      </Box>
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          A project built by Dyllan Hope
        </Typography>
      </Box>
    </main>
  );
}

export default App;
