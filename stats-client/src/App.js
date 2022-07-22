import './App.css';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';
import RenderStatistics from './components/render-stats';
import GitHubIcon from '@mui/icons-material/GitHub';
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
        alignItems="center"
        justifyContent="center"
        sx={{
          bgcolor: grey,
          pt: 8,
          pb: 6
        }}
      >
        <RenderStatistics />
      </Box>
      <Box sx={{ p: 6 }} component="footer">
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          A project built by Dyllan Hope
        </Typography>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Link alignContent='center' href="https://github.com/dyllanhope/Advert-Statistics-Dyllan-hope" target="_blank" >
            <GitHubIcon />
          </Link>
        </Box>

      </Box>
    </main>
  );
}

export default App;
