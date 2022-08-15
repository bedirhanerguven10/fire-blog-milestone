import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import myblog from "../assets/myblog.png";
import { Container } from "@mui/system";
import { SiFirebase, SiReactrouter, SiMaterialui } from "react-icons/si";
import { Box } from "@mui/material";
import { FaReact } from "react-icons/fa";

export default function About() {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        marginTop: "7rem",
        height: "100vh",
      }}
    >
      <Card sx={{ maxWidth: 500 }}>
        <CardMedia
          component="img"
          alt="blogImg"
          height="auto"
          image={myblog}
          sx={{ margin: "auto", objectFit: "fill" }}
        />
        <CardContent>
          <Typography variant="h3">Tools Used In This Site</Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "2rem",
            }}
          >
            <SiMaterialui size={30} />
            <Typography variant="h5">Material UI</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "2rem",
            }}
          >
            <SiReactrouter size={30} />
            <Typography variant="h5">React Router DOM</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "2rem" }}>
            <SiFirebase size={30} />
            <Typography variant="h5">Firebase</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "2rem",
            }}
          >
            <FaReact size={30} />
            <Typography variant="h5">React</Typography>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}