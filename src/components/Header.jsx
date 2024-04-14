import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import AdminPanel from './AdminPanel'; // Import the AdminPanel component

const Header = () => {
  const handleAdminPanelClick = () => {
    // Implement navigation logic to the admin panel
    console.log('Navigating to Admin Panel');
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Profile Map Explorer
        </Typography>
        {/* Add Admin Panel button */}
        <Button color="inherit" onClick={handleAdminPanelClick}>Admin Panel</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
