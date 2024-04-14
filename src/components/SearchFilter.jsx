import React, { useState } from 'react';
import { Paper, Typography, TextField, Button, Grid } from '@mui/material';
import mockProfiles from '../data/mockProfiles';'../data/mockProfiles' 

const SearchFilter = ({ profiles, setFilteredProfiles }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = profiles.filter(profile => profile.name.toLowerCase().includes(query));
    setFilteredProfiles(filtered);
  };

  return (
    <Paper elevation={3} style={{ padding: '20px', borderRadius: '8px' }}>
      <Typography variant="h4" gutterBottom style={{ marginBottom: '20px', textAlign: 'center' }}>
        Search and Filter
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={8}>
          <TextField
            label="Search by Name"
            variant="outlined"
            fullWidth
            style={{ borderRadius: '8px' }}
            InputProps={{
              style: { borderRadius: '8px' },
            }}
            value={searchQuery}
            onChange={handleSearch}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            style={{ borderRadius: '8px', height: '100%' }}
            onClick={() => alert('Apply Filters')}
          >
            Apply Filters
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default SearchFilter;
