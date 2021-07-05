import * as React from 'react';
import './styles.css'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import MainCarrousel from '../../common/carrusel';
import { SummaryComponent } from './types';


export default function Summary(props: SummaryComponent) {
  const { summaryData } = props;

  return (
        <Grid container className='summary' md={12}>
          <Box
          >
            <Typography component="h1" variant="h3" sx= {{ color: 'black' }} gutterBottom>
              {summaryData.title}
            </Typography>
            <Typography variant="h5" color="inherit" sx= {{ color: 'black' }} paragraph>
              {summaryData.description}
            </Typography>
            <Link variant="subtitle1" sx= {{ color: 'black' }} href="#">
              {summaryData.linkText}
            </Link>
          </Box>
          <MainCarrousel />
        </Grid>
  );
}