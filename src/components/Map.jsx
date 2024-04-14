import React from 'react';
import { Paper, Grid } from '@mui/material';

const Map = () => {
  return (
    <Paper elevation={3} style={{ height: '400px' }}>
      <Grid container justifyContent="center" alignItems="center" style={{ height: '100%' }}>
        {/* Map component goes here */}
        <iframe
          title="map"
          width="600"
          height="400"
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.3016113063973!2d106.78755461476906!3d-6.230465262566784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f42098d37d2f%3A0x0!2zNjXCsDAwJzEzLjciUyAxMDbCsDAxJzUxLjQiRQ!5e0!3m2!1sen!2sid!4v1626149584629!5m2!1sen!2sid"
        ></iframe>
      </Grid>
    </Paper>
  );
};

export default Map;
