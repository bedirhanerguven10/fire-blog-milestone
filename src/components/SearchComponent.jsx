import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import loading from "../assets/loading.gif";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { toastWarnNotify } from "../helpers/toastNotify";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const SearchComponent = ({ item, index }) => {
  const navigate = useNavigate();
  const { currentUser } = React.useContext(AuthContext);

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
            Blog owner : {item.creative}
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
              !currentUser && toastWarnNotify("Please log in to see detail");
            }}
          >
            Detail
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default SearchComponent;