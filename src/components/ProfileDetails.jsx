import React from 'react';
import { Paper, Typography, Grid } from '@mui/material';

const ProfileDetails = ({ profile }) => {
  return (
    <Paper elevation={3}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h4" gutterBottom>
            {profile.name}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Address: {profile.address}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Email: {profile.email}
          </Typography>
          {/* Add more profile details */}
        </Grid>
        {/* Add more Grid items for additional profile details */}
      </Grid>
    </Paper>
  );
};

export default ProfileDetails;
