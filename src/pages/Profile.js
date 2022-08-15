import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { AuthContext } from "../contexts/AuthContext";
import { Box, Container } from "@mui/system";
import { useFetch } from "../helpers/firebase";
import loading from "../assets/loading.gif";
import { IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { toastWarnNotify } from "../helpers/toastNotify";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();

  const { currentUser } = React.useContext(AuthContext);
  const { blogGet, isLoading } = useFetch();

  return (
    <Container sx={{ minHeight: "100vh", marginTop: "7rem" }}>
      {isLoading ? (
        <Card
          sx={{
            display: "flex",
            margin: "auto",
            height: "100vh",
          }}
        >
          <CardMedia
            component="img"
            image={loading}
            height="500"
            alt="green iguana"
            sx={{ margin: "auto", objectFit: "contain" }}
          />
        </Card>
      ) : (
        blogGet
          ?.filter((blog) => blog.email === currentUser.email)
          .map((item, index) => {
            return (
              <Box
                key={index}
                sx={{
                  display: "inline-flex",
                  margin: "1rem",
                }}
              >
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    height="200"
                    sx={{ objectFit: "fill" }}
                    image={item.imgurl ? item.imgurl : loading.gif}
                    alt={item.title}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{ maxHeight: "2rem", overflow: "hidden" }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      sx={{ height: "3.8rem", overflow: "hidden" }}
                      variant="body2"
                      color="text.secondary"
                    >
                      {item.content}
                    </Typography>
                    <Typography sx={{ fontSize: "0.7rem", fontWeight: "400" }}>
                      Blog owner : {currentUser.displayName}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Container>
                      <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                      </IconButton>
                      <IconButton aria-label="Comment">
                        <ChatBubbleOutlineIcon />
                      </IconButton>
                    </Container>
                    <Button
                      size="small"
                      onClick={() => {
                        navigate(`/detail/${item.id}`, { state: item });
                        !currentUser &&
                          toastWarnNotify("Please log in to see detail");
                      }}
                    >
                      Detail
                    </Button>
                  </CardActions>
                </Card>
              </Box>
            );
          })
      )}
    </Container>
  );
}
