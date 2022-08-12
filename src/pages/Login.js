import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import GoogleIcon from "@mui/icons-material/Google";
import { signIn, signUpProvider } from "../helpers/firebase";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "@mui/material";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import google from "../assets/google.png";

const theme = createTheme();

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    signIn(email, password, navigate);
  };

  const handleProviderLogin = () => {
    signUpProvider(navigate);
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid
        style={{
          background: "url(https://picsum.photos/1600/900)",
          backgroundSize: "cover",
          height: "100vh",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <Container
          component="main"
          maxWidth="xs"
          sx={{ height: "100vh", marginTop: "3rem" }}
        >
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            style={{
              width: "28rem",
              boxShadow: "rgba(0,0,0,0.75) 10px 10px 5px 0px",
              backgroundColor: "lightblue",
              padding: "2rem",
              borderRadius: "0.75rem",
              position: "absolute",
              top: "3%",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "#046582" }}>
              <LockOpenIcon style={{ size: "large", fontSize: "32px" }} />
            </Avatar>
            <Typography component="h1" variant="h5">
              Login
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Login
              </Button>
              <Button
                variant="outlined"
                fullWidth
                sx={{ mb: 2 }}
                onClick={handleProviderLogin}
              >
                <GoogleIcon sx={{ marginRight: "1rem" }} />
                Continue with{" "}
                <Box
                  component="img"
                  sx={{
                    height: 20,
                    width: 65,
                    marginLeft:1
                  }}
                  alt="google"
                  src={google}
                />
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <NavLink to="/register">
                    <Link variant="body2">
                      {"Don't have an account? Register"}
                    </Link>
                  </NavLink>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </Grid>
    </ThemeProvider>
  );
}
