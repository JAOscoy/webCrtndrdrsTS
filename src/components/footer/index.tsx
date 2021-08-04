import * as React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { Grid } from '@material-ui/core';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="/home">
        CRTNDRDRS. Todos los derechos reservados
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1
      }}
    >
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          alignItems: 'center',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
          <Grid item sx={{ display: 'grid', justifySelf: 'start', paddingLeft: '1vw'}}>
            <Typography variant="body2" color="text.secondary">
              <Link color="inherit">
                <p>Llamanos al <a href="tel:+5215515917190">5515917190</a></p>
                <p>CRTNDRDRS. Calle Victoria.
                Col. Independencia.
                Tizayuca, Hidalgo </p>
              </Link>{' '}
              {'.'}
            </Typography>
          </Grid>
          <Grid item sx={{ display: 'grid', justifySelf: 'end', paddingRight: '1vw'}}>
          <Copyright />
          </Grid>
      </Box>
    </Box>
  );
}