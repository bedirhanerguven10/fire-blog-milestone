import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, IconButton, TextField } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router-dom";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { Container } from "@mui/system";
import { useFetch } from "../helpers/firebase";
import loading from "../assets/loading.gif";
import { toastWarnNotify } from "../helpers/toastNotify";
import { AuthContext } from "../contexts/AuthContext";
import SearchComponent from "./SearchComponent";
import { useState } from "react";




export default function BlogCard() {
      
  const navigate = useNavigate();
  const { blogGet, isLoading } = useFetch();
  const { currentUser } = React.useContext(AuthContext);
  // console.log(blogGet);
  // console.log(currentUser);
  const [searchBlog, setSearchBlog] = React.useState();
  const [count, setCount] = useState(0);
  const handleCount = (e) => {
    setCount(count+1);
    e.target.style = "color:red"
  };
  console.log(searchBlog);
  return (
    <Container
      sx={{
        marginTop: "2rem",
      }}
    >
      {currentUser && (
        <TextField
          sx={{ display: "block", margin: "auto", width: "25rem", color:"white",backgroundColor:"lightgray", outline:"none", overflow:"hidden"}}
          fullWidth
          type="text"
          id="text"
          label="Type the block you want to search..."
        
          name="text"
          autoComplete="text"
          autoFocus
          onChange={(e) => setSearchBlog(e.target.value)}
        />
      )}

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
            alt="loading"
            sx={{ margin: "auto", objectFit: "contain" }}
          />
        </Card>
      ) : searchBlog ? (
        blogGet
          ?.filter((e) =>
            e.title.toLowerCase().includes(searchBlog.toLowerCase())
          )
          .map((item, index) => {
            return <SearchComponent item={item} index={index} />;
          })
      ) : (
        blogGet?.map((item, index) => {
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
                    <IconButton aria-label="add to favorites" onClick={() => handleCount()  }>
                      <FavoriteIcon  />
                      <Typography>{count}</Typography>
                    </IconButton>
                    <IconButton aria-label="Comment">
                      <ChatBubbleOutlineIcon />
                    </IconButton>
                  </Container>
                  <Button
                    size="small"
                    onClick={() => {
                      navigate(`/details/${item.id}`, { state: item });
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
