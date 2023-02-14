import * as React from "react";
import { Link } from "react-router-dom";
import './HeaderHome.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';


const options = [
    'Inicio',
    'Desarrollador',
    'Empresa',
    'Iniciar sesion',
  ];
  
const ITEM_HEIGHT = 70;
  
function LongMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return (
      <div>
        <IconButton
          aria-label="more"
          id="long-button"
          aria-controls={open ? 'long-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MenuIcon className="menu-icon-home"/>
        </IconButton>
        <Menu
          id="long-menu"
          MenuListProps={{
            'aria-labelledby': 'long-button',
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: '15ch',
            },
          }}
        >
          <Link className="menu-navbar-item" to="/">
            <MenuItem key={options[0]} selected={options[0] === 'Inicio'} onClick={handleClose}>
              {options[0]}
            </MenuItem>
          </Link>
          <Link className="menu-navbar-item" to="/registro/desarrollador">
            <MenuItem key={options[1]} selected={options[1] === 'Desarrollador'} onClick={handleClose}>
              {options[1]}
            </MenuItem>
          </Link>  
          <Link className="menu-navbar-item" to="/registro/empresa">
            <MenuItem key={options[2]} selected={options[2] === 'Empresa'} onClick={handleClose}>
              {options[2]}
            </MenuItem>
          </Link> 
          <Link className="menu-navbar-item login-header-menu" to="/login">
            <MenuItem key={options[3]} selected={options[3] === 'Iniciar sesion'} onClick={handleClose}>
              {options[3]}
            </MenuItem>
          </Link>  
        </Menu>
      </div>
    );
  }

export default function ButtonAppBar() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" >
          <Toolbar className="app-header">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
            <LongMenu />
            </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <div className="logo-box-header">
              <Link to="/" className="logo-link">
                  <h1 className="logo logo-center-header">Dev<span className="logo-extend">Juniors</span></h1>
              </Link>
              </div>
              </Typography>
            <Link className="target-btn" to="/login" ><button className="btn-navigator">Iniciar Sesión</button></Link>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }


const HeaderHome = () => {
    return(
        <>
            
            <header className="header">
                <nav className="navigator-bar">
                    <ButtonAppBar className="app-header" />
                </nav>
            </header>
        </>
    )
}

export {HeaderHome};