import Grid from '@material-ui/core/Grid';
import { CompanyComponent } from './types';
import './styles.css';
import { Typography } from '@material-ui/core'
import ListAltOutlinedIcon from '@material-ui/icons/ListAlt'
import { Box } from '@material-ui/core';

export default function Company(props: CompanyComponent) {
    const { companyData } = props;
    

    return (
        <Box className='companyBox'>
        <Typography variant='h5' sx={{color: 'white', paddingTop: '3rem', fontWeight: 'bold'}} >
            ¿Porque somos la mejor alternativa?
        </Typography>
        <Grid container className='companyItems'>
           <Grid item className ='about'>
              <ListAltOutlinedIcon color='success' sx={{fontSize: '80px'}} />
              <Typography component='p' sx = {{ color: 'white', fontWeight: 'bold'}} >
                {companyData.mision}    
              </Typography>     
           </Grid>
           <Grid item className ='about'>
              <ListAltOutlinedIcon color='success' sx={{fontSize: '80px'}} />
              <Typography component='p' sx = {{ color: 'white', fontWeight: 'bold'}} >
                {companyData.vision}    
              </Typography>     
           </Grid>
           <Grid item className ='about'>
              <ListAltOutlinedIcon color='success' sx={{fontSize: '80px'}} />
              <Typography component='p' sx = {{ color: 'white', fontWeight: 'bold'}} >
                {companyData.experience}    
              </Typography>     
           </Grid>
           <Grid item className ='about'>
              <ListAltOutlinedIcon color='success' sx={{fontSize: '80px'}} />
              <Typography component='p' sx = {{ color: 'white', fontWeight: 'bold'}} >
                {companyData.financial}    
              </Typography>
            </Grid> 
              <Grid item className ='about'>
              <ListAltOutlinedIcon color='success' sx={{fontSize: '80px'}} />
              <Typography component='p' sx = {{ color: 'white', fontWeight: 'bold'}} >
                {companyData.quality}    
              </Typography>
              </Grid> 
              <Grid item className ='about'>
              <ListAltOutlinedIcon color='success' sx={{fontSize: '80px'}} />
              <Typography component='p' sx = {{ color: 'white', fontWeight: 'bold'}} >
                {companyData.flexibility}    
              </Typography>      
            </Grid> 
        </Grid>
        </Box>
    )
}