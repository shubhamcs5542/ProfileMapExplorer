import React, { useState, useEffect } from 'react';
import { Container, CssBaseline, Grid, ThemeProvider, Box } from '@mui/material';
import Header from './components/Header';
import Footer from './components/Footer';
import ProfileList from './components/ProfileList';
import SearchFilter from './components/SearchFilter';
import LoadingIndicator from './components/LoadingIndicator';
import ErrorMessage from './components/ErrorMessage';
import mockProfiles from './data/mockProfiles'; // Assuming you have mockProfiles data
import theme from './components/Theme'; // Import your custom theme
import './App.css';

function App() {
  const [profiles, setProfiles] = useState([]);
  const [filteredProfiles, setFilteredProfiles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate fetching data from an API
    const fetchData = async () => {
      try {
        // Simulate delay for loading indicator
        await new Promise(resolve => setTimeout(resolve, 1000));
        setProfiles(mockProfiles);
        setFilteredProfiles(mockProfiles); // Set filteredProfiles initially to all profiles
      } catch (error) {
        setError('Failed to fetch profiles. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="calc(100vh - 64px)" // Adjust for the height of the header
      >
        <Container maxWidth="lg">
          <SearchFilter profiles={profiles} setFilteredProfiles={setFilteredProfiles} />
          <Grid container spacing={2}>
            <Grid item xs={12}>
              {isLoading ? (
                <LoadingIndicator />
              ) : error ? (
                <ErrorMessage message={error} />
              ) : (
                <ProfileList profiles={filteredProfiles} />
              )}
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
