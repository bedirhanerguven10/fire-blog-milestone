import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import {Paper} from "@mui/material";
import SwitchAccountIcon from '@mui/icons-material/SwitchAccount';
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Link } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { logOut } from "../helpers/firebase";
import {AuthContext}  from "../contexts/AuthContext";
import { styled } from "@mui/material";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  
   console.log(currentUser);

  const navigate = useNavigate();
  const handleMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogin = () => {
    navigate("/login");
    setAnchorEl(null);
  };
  const handleRegister = () => {
    navigate("/register");
    setAnchorEl(null);
  };
  const handleProfile = () => {
    navigate("/profile");
    setAnchorEl(null);
  };
  const handleNewBlog = () => {
    navigate("/newblog");
    setAnchorEl(null);
  };
  const handleLogout = () => {
    logOut(navigate);
    setAnchorEl(null);
  };
  const handleAbout = () => {
    navigate("/about");
    setAnchorEl(null);
  };
  const handleHome = () => {
    navigate("/");
    setAnchorEl(null);
  };
  const StyledPaper = styled(Paper)(
  `border-radius: 0;
   color: white;
   background: #272A31;
   `
);

const StyledMenuItem = styled(MenuItem)(
  ` 
    &:hover, &.Mui-focusVisible {
      background-color: #046582
    }`
  );


  return (
    <Box sx={{ flexGrow: 1 , display:"flex", flexDirection: 'row', justifyContent:"space-between"}} >
      <AppBar style={{backgroundColor:"#046582"}}>
        <Toolbar >
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
            onClick={() => navigate("/") }
          >
            <img
              src="https://clarusway.com/wp-content/uploads/2022/04/Clarusway-Logo-Harold-svg.svg"
              alt=""
              width="65"
              height="45"
             
            />
          </IconButton>
          <Link
            to="/"
            underline="none"
            sx={{
              flexGrow: 1,
              color: "black",
              cursor: "pointer",
              fontSize: "1.5rem",
              fontWeight: "600",
            }}
            onClick={() => navigate("/")}
          >
            {"<PEDRO'S/>"}
            <Link
              component="span"
              to="/"
              underline="none"
              sx={{
                flexGrow: 1,
                color: "black",
                cursor: "pointer",
                fontSize: "1.2rem",
                fontWeight: "800",
              }}
            >
              BLOG
            </Link>
             </Link>
             <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              textAlign: "end",
              fontSize: "1rem",
              fontWeight: "350",
            }}
          >
            {currentUser.displayName}
          </Typography>
          {!currentUser ? (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <SwitchAccountIcon style={{size:"medium" ,fontSize:"32px"}}/>
              </IconButton>
              <StyledPaper>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <StyledMenuItem onClick={handleHome}>Home</StyledMenuItem>
                <StyledMenuItem onClick={handleLogin}>Login</StyledMenuItem>
                <StyledMenuItem onClick={handleRegister}>Register</StyledMenuItem>
                <StyledMenuItem onClick={handleAbout}>About</StyledMenuItem>
              </Menu>
              </StyledPaper>
            </div>
            ) : (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleHome}>Home</MenuItem>
                <MenuItem onClick={handleProfile}>Profile</MenuItem>
                <MenuItem onClick={handleNewBlog}>New Blog</MenuItem>
                <MenuItem onClick={handleAbout}>About</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </div>
            )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
