import { useInputValidation } from "6pp";
import {
  Avatar,
  Button,
  Container,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Navigate } from 'react-router-dom';

const isAdmin = false
const AdminLogin = () => {

    const secretkey = useInputValidation("")

  const submitHandler = (e) => {
    e.preventDefault()
  };

  if(isAdmin) return <Navigate to={"/admin/dashboard"} />

  return (
    <Container
      component={"main"}
      maxWidth="xs"
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
        <>
          <Typography varient="h5">Admin Login</Typography>
          <form
            style={{
              width: "100%",
              marginTop: "1rem",
            }}
            onSubmit={submitHandler}>
            

            <TextField
              required
              fullWidth
              label="Secret Key"
              type="password"
              margin="normal"
              varient="outlined"
              value={secretkey.value}
              onChange={secretkey.changeHandler}
            />
            
            <Button
              sx={{
                marginTop: "1rem",
              }}
              fullWidth
              variant="contained"
              color="primary"
              type="submit">
              Login
            </Button>
          </form>
        </>
      </Paper>
    </Container>
  );
};

export default AdminLogin;
