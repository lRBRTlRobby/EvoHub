import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import  './header.css';
import { Link } from 'react-router-dom';

const pages = ['Home', 'Event Categories','Upcoming Events', 'Joined Events', 'My Events', 'Create Events'];
const settings = ['Profile','Logout'];

function getPagePath(page) {
  switch (page) {
    case 'Home':
      return '/OrganizerHomePage';
    case 'Event Categories':
      return '/UserEventCategory';
    case 'Upcoming Events':
        return '/UserUpcomingEvents';
    case 'Joined Events':
      return '/OrganizerJoinedEvents';
    // Add more cases for additional pages
    default:
      return `/${page.replace(/\s+/g, '-')}`;
  }
}

function getSettingPath(settings) {
  switch (settings) {
    case 'Profile':
      return '/EventUserHome';
    case 'Logout':
      return '/';
    // Add more cases for additional pages
    default:
      return `/${settings.replace(/\s+/g, '-')}`;
  }
}


function ResponsiveAppBarOrgan() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    
    <AppBar position="static" sx={{background:"white"}}>
      <Container maxWidth="lg">
        <Toolbar >
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <img src="/img/citlogo.png" alt="logo" className='logo'  />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none'},
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}  >
                  <Typography textAlign="center" >{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex'}}}>
            {pages.map((page) => (
              <Link
              sx={{ textDecoration: 'none' }}
              to={getPagePath(page)}
              >
              <Button
              key={page}
                onClick={handleCloseNavMenu}
                // Adjust the 'left here'
                sx={{ my: 2, color: 'black', display: 'flex', left: "0rem",fontSize:'0.72rem', flexDirection:'row-reverse' }}
              >
                {page}
              </Button>
              </Link>
            ))}
          </Box>


          <Box sx={{ flexGrow: 0,marginRight:'4em' }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar  alt="Remy Sharp" src="/static/images/avatar/2.jpg"   />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <Link 
                to={getSettingPath(setting)}
                >
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBarOrgan;