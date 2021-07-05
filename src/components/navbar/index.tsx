import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import './styles.css'


export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className='mainMenu'>
          <Link sx={{ color: 'white', fontWeight: 'bold' }} underline="none" href="#">Nosotros</Link>
          <Link sx={{ color: 'white', fontWeight: 'bold' }} underline="none" href="#">Productos</Link>
          <Link sx={{ color: 'white', fontWeight: 'bold' }} underline="none" href="#">Contactanos</Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
