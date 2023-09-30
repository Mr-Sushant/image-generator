import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import { styled } from '@mui/material';

const StyledAppBar = styled(AppBar)`
    background: #060606;
    height: 9vh;
`
const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <StyledAppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          AI-Image Generator
        </Typography>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={() => window.open('https://github.com/Mr-Sushant/image-generator')}
        >
          <GitHubIcon />
        </IconButton>
      </Toolbar>
    </StyledAppBar>
  </Box>
  )
}

export default Header