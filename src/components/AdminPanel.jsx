import React, { useState } from 'react';
import { Paper, Typography, Button, Grid, TextField, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const AdminPanel = () => {
  const [profiles, setProfiles] = useState([]);
  const [editingProfileId, setEditingProfileId] = useState(null);
  const [newProfileName, setNewProfileName] = useState('');

  // Function to handle adding a new profile
  const handleAddProfile = () => {
    const newProfile = {
      id: profiles.length + 1,
      name: newProfileName,
      // Add other profile properties here
    };
    setProfiles([...profiles, newProfile]);
    setNewProfileName('');
  };

  // Function to handle editing a profile
  const handleEditProfile = (profileId) => {
    setEditingProfileId(profileId);
    const profileToEdit = profiles.find(profile => profile.id === profileId);
    if (profileToEdit) {
      setNewProfileName(profileToEdit.name);
    }
  };

  // Function to save edited profile
  const handleSaveEditedProfile = () => {
    const updatedProfiles = profiles.map(profile =>
      profile.id === editingProfileId ? { ...profile, name: newProfileName } : profile
    );
    setProfiles(updatedProfiles);
    setEditingProfileId(null);
    setNewProfileName('');
  };

  // Function to cancel editing profile
  const handleCancelEditProfile = () => {
    setEditingProfileId(null);
    setNewProfileName('');
  };

  // Function to handle deleting a profile
  const handleDeleteProfile = (profileId) => {
    setProfiles(profiles.filter(profile => profile.id !== profileId));
  };

  return (
    <Paper elevation={3} style={{ padding: '20px', borderRadius: '8px' }}>
      <Typography variant="h4" gutterBottom style={{ marginBottom: '20px', textAlign: 'center' }}>
        Admin Panel
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={6}>
          <TextField
            label="New Profile Name"
            variant="outlined"
            fullWidth
            value={newProfileName}
            onChange={(e) => setNewProfileName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          {editingProfileId !== null ? (
            <div>
              <Button variant="contained" color="primary" onClick={handleSaveEditedProfile}>
                Save
              </Button>
              <Button variant="contained" onClick={handleCancelEditProfile}>
                Cancel
              </Button>
            </div>
          ) : (
            <Button variant="contained" color="primary" onClick={handleAddProfile}>
              Add Profile
            </Button>
          )}
        </Grid>
        <Grid item xs={12}>
          <List>
            {profiles.map(profile => (
              <ListItem key={profile.id}>
                {editingProfileId === profile.id ? (
                  <TextField
                    value={newProfileName}
                    onChange={(e) => setNewProfileName(e.target.value)}
                    fullWidth
                  />
                ) : (
                  <ListItemText primary={profile.name} />
                )}
                <ListItemSecondaryAction>
                  {editingProfileId === profile.id ? (
                    <IconButton edge="end" aria-label="save" onClick={handleSaveEditedProfile}>
                      <EditIcon />
                    </IconButton>
                  ) : (
                    <IconButton edge="end" aria-label="edit" onClick={() => handleEditProfile(profile.id)}>
                      <EditIcon />
                    </IconButton>
                  )}
                  <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteProfile(profile.id)}>
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default AdminPanel;
