import React from 'react';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import './App.css';
import projects from './projects.json';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import TelegramIcon from '@mui/icons-material/Telegram';

function App() {
  return (
    <Container maxWidth="lg">
      <Typography variant="h1">
        Portfolio de Sebastian Waisbrot
      </Typography>
      {projects.map((p) => (
        <Paper key={p.name}>
          <Box className="project">
            <div className="projectHeader">
              <Typography variant="h2">
                {p.name}
              </Typography>
              {p.tags.length > 0 && <Stack direction="row" spacing={1}>
                {p.tags.map((tag) => <Chip key={tag} label={tag} />)}
              </Stack>}
              {p.repository && <a href={p.repository} target="_blank" rel="noreferrer"><GitHubIcon /></a>}
              {p.url && <a href={p.url} target="_blank" rel="noreferrer"><OpenInNewIcon /></a>}
              {p.telegram && <a href={p.telegram} target="_blank" rel="noreferrer"><TelegramIcon /></a>}
            </div>
            <p>{p.description}</p>
          </Box>
        </Paper>
      ))}
    </Container>
  );
}

export default App;
