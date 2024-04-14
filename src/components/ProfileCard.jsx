import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button, Grid } from '@mui/material';

const ProfileCard = ({ profile }) => {
  return (
    <Card style={{ display: 'flex', flexDirection: 'column', height: '100%', boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)', borderRadius: '8px', transition: 'transform 0.3s ease-in-out' }}>
      <Grid container>
        <Grid item xs={12} sm={6} style={{ position: 'relative' }}>
          <CardMedia
            component="img"
            style={{ height: 0, paddingTop: '56.25%', borderRadius: '8px 0 0 8px', borderRight: '2px solid #f0f0f0' }} // 16:9
            image={profile.photo}
            alt={profile.name}
          />
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: '#fff', borderRadius: '50%', boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)' }}>
            <img src={profile.photo} alt={profile.name} style={{ width: '80px', height: '80px', borderRadius: '50%' }} />
          </div>
        </Grid>
        <Grid item xs={12} sm={6} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '16px' }}>
          <CardContent style={{ flex: '1 0 auto' }}>
            <Typography gutterBottom variant="h5" component="div">
              {profile.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {profile.description}
            </Typography>
          </CardContent>
          <Button variant="contained" style={{ alignSelf: 'flex-end' }}>Summary</Button>
        </Grid>
      </Grid>
    </Card>
  );
};

export default ProfileCard;
