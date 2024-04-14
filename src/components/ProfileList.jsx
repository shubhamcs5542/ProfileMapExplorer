import React from 'react';
import { Grid } from '@mui/material';
import ProfileCard from './ProfileCard';

const ProfileList = ({ profiles }) => {
  return (
    <Grid container spacing={3}>
      {profiles.map((profile) => (
        <Grid item key={profile.id} xs={12} sm={6} md={4} lg={3}>
          <ProfileCard profile={profile} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProfileList;
