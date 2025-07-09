import React, { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "./components/UserCard";
import {
  Container,
  Grid,
  Typography,
  Button,
  Box,
  CssBaseline,
} from "@mui/material";

const App = () => {
  const [users, setUsers] = useState([]);
  const [originalUsers, setOriginalUsers] = useState([]);
  const [filtered, setFiltered] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    axios.get("https://randomuser.me/api/?results=6")
      .then((response) => {
        const fetchedUsers = response.data.results.map((user, index) => ({
          id: index,
          name: `${user.name.first} ${user.name.last}`,
          image: user.picture.medium,
          description: `Email: ${user.email}`,
        }));
        setUsers(fetchedUsers);
        setOriginalUsers(fetchedUsers);
      })
      .catch((error) => {
        console.error("Errore nel caricamento degli utenti:", error);
      });
  }, []);

  const handleShowOdd = () => {
    const oddUsers = users.filter((_, index) => index % 2 === 1);
    if (oddUsers.length === 0) return;
    const randomUser = oddUsers[Math.floor(Math.random() * oddUsers.length)];
    setSelectedUser(randomUser);
    setFiltered(true);
  };

  const handleRefresh = () => {
    setUsers(originalUsers);
    setSelectedUser(null);
    setFiltered(false);
  };

  const hasOdd = users.filter((_, i) => i % 2 === 1).length > 0;

  return (
    <>
      <CssBaseline />
      <Box sx={{ backgroundColor: "#f5f5f5", minHeight: "100vh", py: 5 }}>
        <Container maxWidth="md">
          <Typography variant="h4" align="center" gutterBottom>
            Utenti
          </Typography>

          {selectedUser ? (
            <Grid container spacing={3} justifyContent="center">
              <Grid item xs={12} sm={6} md={4}>
                <UserCard {...selectedUser} />
              </Grid>
            </Grid>
          ) : (
            <Grid container spacing={3}>
              {users.map((user) => (
                <Grid item xs={12} sm={6} md={4} key={user.id}>
                  <UserCard
                    {...user}
                    onClick={() => setSelectedUser(user)}
                  />
                </Grid>
              ))}
            </Grid>
          )}

          <Box
            mt={4}
            display="flex"
            justifyContent="center"
            gap={2}
            flexWrap="wrap"
          >
            <Button
              variant="contained"
              color="primary"
              disabled={!hasOdd || filtered || selectedUser !== null}
              onClick={handleShowOdd}
            >
              Mostra dispari
            </Button>
            <Button
              variant="contained"
              color="success"
              onClick={handleRefresh}
            >
              Refresh
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default App;
