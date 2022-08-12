import React from 'react'
import  AppBar  from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import  Typography  from '@mui/material/Typography';
import {Link} from "@mui/material";

import { GrLinkedin } from "react-icons/gr";
import { GoMarkGithub } from "react-icons/go";



const Footer = () => {
  return (
    <Box sx={{flexGrow: 1}}>
        <AppBar position='relative' color="primary" enableColorOnDark style={{backgroundColor:"#046582"}}>
            <Toolbar sx={{justifyContent: 'space-between'}}>
                <Typography sx={{display: "flex",  marginLeft: "1rem"}}>
                    <Link href="https://github.com/bedirhanerguven10"
                    sx={{color: "black", fontSize:"1rem"}}
                    target= "_blank"
                    rel="noreferrer"
                    underline="none"
                    > 
                        <GoMarkGithub />
                        GitHub Account
                        </Link>
                </Typography>
                <Typography sx={{ display: "flex"}}>
            <Link
              href="https://www.linkedin.com/in/bedirhan-erguven/"
              sx={{ color: "black", fontSize: "1rem" , marginleft:"0.5rem" }}
              target="_blank"
              rel="noreferrer"
              underline="none"
            >
              <GrLinkedin sx={{marginright:"0.5rem", gap:"1rem"}}/>
              Linkedin Profile
            </Link>
          </Typography>

            </Toolbar>
        </AppBar>
    </Box>
  )
}

export default Footer
