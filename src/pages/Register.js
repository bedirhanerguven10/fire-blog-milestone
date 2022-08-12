import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOpenIcon from '@mui/icons-material/LockOpen';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import GoogleIcon from "@mui/icons-material/Google";
import { createUser, signUpProvider } from "../helpers/firebase";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import google from "../assets/google.png"



const theme = createTheme();

export default function Register() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const displayName = `
    ${firstName} ${lastName}`;
    // console.log(firstName, lastName);
    createUser(email, password, navigate, displayName);
  };
  const handleProviderLogin = () => {
    signUpProvider(navigate);
  };

  return (
    <ThemeProvider theme={theme} >
      <Grid style={{background: "url(https://picsum.photos/1600/900)",backgroundSize:"cover",
  height: "100vh",backgroundPosition: "center", position:"relative"}}>
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
          style={{ width: '28rem', boxShadow:"rgba(0,0,0,0.75) 10px 10px 5px 0px",  backgroundColor: 'lightblue', padding: '2rem', borderRadius: '0.75rem', position:"absolute", top:"4%"}}
        >
          <Avatar sx={{ m: 1, bgcolor: "#046582" }}>
            <LockOpenIcon sx={{fontSize:"36px"}}/>
          </Avatar>
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <Grid container spacing={1}>
              <Grid item xs={12} sm={12}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
              {/* <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid> */}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Register
            </Button>
            <Button
              variant="outlined"
              fullWidth
              sx={{ mb: 2 }}
              onClick={handleProviderLogin}
            >
              <GoogleIcon sx={{ marginRight: "1rem" }} />
              Continue with <Box
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
                <NavLink to="/login">
                  <Link variant="body2">
                    {"Already have an account? Login"}
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
