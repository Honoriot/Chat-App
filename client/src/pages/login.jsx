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
import { CameraAlt as CameraAltIcon } from "@mui/icons-material";
import { VisuallyHiddenInput } from "../components/styles/StyledComponent";
import { useFileHandler, useInputValidation } from "6pp";
import { usernameValidator } from "../utils/validators";

const Login = () => {
  const [isLogin, setLogin] = useState(true);

  const handleLogin = () => {
    setLogin(!isLogin);
  };

  const name = useInputValidation("");
  const bio = useInputValidation("");
  const username = useInputValidation("", usernameValidator);
  const password = useInputValidation("");

  const handleSignUp = (e) => {
    e.preventDefault()
  }

  const handleLoginSubmit = (e) => {
    e.preventDefault()
  }

  const avatar = useFileHandler("single", 5);

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
        {isLogin ? (
          <>
            <Typography varient="h5">Login</Typography>
            <form
              style={{
                width: "100%",
                marginTop: "1rem",
              }}
              onSubmit={handleLoginSubmit}
              >
              <TextField
                required
                fullWidth
                label="username"
                type="text"
                margin="normal"
                varient="outlined"
                value={username.value}
                onChange={username.changeHandler}
              />

              {username.error && (
                <Typography color="error" variant="caption">
                  {username.error}
                </Typography>
              )}

              <TextField
                required
                fullWidth
                label="password"
                type="password"
                margin="normal"
                varient="outlined"
                value={password.value}
                onChange={password.changeHandler}
              />
              {password.error && (
                <Typography color="error" variant="caption">
                  {password.error}
                </Typography>
              )}
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

              <Typography textAlign={"center"} m={"1rem"}>
                {" "}
                OR{" "}
              </Typography>
              <Button sx={{}} fullWidth variant="text" onClick={handleLogin}>
                Sign Up Instead
              </Button>
            </form>
          </>
        ) : (
          <>
            <Typography varient="h5">Sign Up</Typography>
            <form
              style={{
                width: "100%",
                marginTop: "1rem",
              }}
              onSubmit={handleSignUp}
              >
              <Stack position={"relative"} width={"10rem"} margin={"auto"}>
                <Avatar
                  sx={{
                    width: "10rem",
                    height: "10rem",
                    objectFit: "contain",
                  }}
                  src={avatar.preview}
                />

                <IconButton
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    color: "white",
                    bgcolor: "rgba(0, 0, 0, 0.5)",
                    ":hover": {
                      bgcolor: "rgba(0, 0, 0, 0.7)",
                    },
                  }}
                  component="label">
                  <>
                    <CameraAltIcon />
                    <VisuallyHiddenInput
                      type="file"
                      onChange={avatar.changeHandler}
                      accept="image/png, image/jpeg, image/jpg"
                    />
                  </>
                </IconButton>
              </Stack>

              {avatar.error && (
                  <Typography 
                    m={"1rem auto"}
                    display={"block"} 
                    color="error" variant="caption">
                    {avatar.error}
                  </Typography>
                )}

              <TextField
                required
                fullWidth
                label="name"
                type="text"
                margin="normal"
                varient="outlined"
                value={name.value}
                onChange={name.changeHandler}
              />
              <TextField
                fullWidth
                label="bio"
                type="text"
                margin="normal"
                varient="outlined"
                value={bio.value}
                onChange={bio.changeHandler}
              />
              <TextField
                required
                fullWidth
                label="username"
                type="text"
                margin="normal"
                varient="outlined"
                value={username.value}
                onChange={username.changeHandler}
              />

              {username.error && (
                <Typography color="error" variant="caption">
                  {username.error}
                </Typography>
              )}

              <TextField
                required
                fullWidth
                label="password"
                type="password"
                margin="normal"
                varient="outlined"
                value={password.value}
                onChange={password.changeHandler}
              />
              {password.error && (
                <Typography color="error" variant="caption">
                  {password.error}
                </Typography>
              )}
              <Button
                sx={{
                  marginTop: "1rem",
                }}
                fullWidth
                variant="contained"
                color="primary"
                type="submit">
                Sign Up
              </Button>

              <Typography textAlign={"center"} m={"1rem"}>
                {" "}
                OR{" "}
              </Typography>
              <Button sx={{}} fullWidth variant="text" onClick={handleLogin}>
                Login Instead
              </Button>
            </form>
          </>
        )}
      </Paper>
    </Container>
  );
};

export default Login;
