import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useLocation, useNavigate } from "react-router-dom";
import { Container } from "@mui/system";
import { Box, TextField } from "@mui/material";
import { deleteBlog, EditBlogCard } from "../helpers/firebase";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import { AuthContext } from "../contexts/AuthContext";

export default function Details() {
  const { currentUser } = React.useContext(AuthContext);
  // console.log(currentUser.email);
  const navigate = useNavigate();
  const item = useLocation();
  // console.log(item);
  const { title, content, imgurl, email, creative } = item.state;
  // console.log(email);
  const [ısEditClick, setIsEditClick] = useState(false);
  const [editTitle, setEditTitle] = useState("");
  const [editImgUrl, setEditImgUrl] = useState("");
  const [editContent, setEditContent] = useState("");
  const uptadeBlog = {
    title: editTitle ? editTitle : title,
    content: editContent ? editContent : content,
    imgurl: editImgUrl ? editImgUrl : imgurl,
    email: currentUser.email,
  };
  // console.log(editTitle);
  // console.log(editImgUrl);
  // console.log(editContent);
  const handleEdit = () => {
    setIsEditClick(true);
  };
  const editConfirm = () => {
    EditBlogCard(uptadeBlog, item.state.id);
    setIsEditClick(false);
    navigate("/");
  };

  return (
    <Container sx={{ height: "100vh", marginTop: "4rem", backgroundImage:"url(https://picsum.photos/1600/900)", backgroundPosition:"center", backgroundRepeat:"no-repeat", backgroundSize:"cover", width:"1903px" }} maxWidth="1903px">
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginTop: "6rem",
            marginBottom: "1rem",
            maxWidth: 450,
          }}
        >
          <Box>
            <CardMedia
              component="img"
              alt={title}
              height="300"
              image={imgurl}
            />
            {ısEditClick && (
              <Box
                sx={{
                  maxWidth: "100%",
                }}
              >
                <TextField
                  fullWidth
                  sx={{ marginTop: "0.5rem" }}
                  label="Image Url"
                  required
                  id="fullWidth"
                  onChange={(e) => setEditImgUrl(e.target.value)}
                />
              </Box>
            )}
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {title}
              </Typography>
              {ısEditClick && (
                <Box
                  sx={{
                    maxWidth: "100%",
                  }}
                >
                  <TextField
                    fullWidth
                    label="Title"
                    required
                    id="fullWidth"
                    onChange={(e) => setEditTitle(e.target.value)}
                  />
                </Box>
              )}

              <Typography variant="body2" color="text.secondary">
                {content}
              </Typography>
              <Typography sx={{ fontSize: "0.7rem", fontWeight: "400" }}>
                Blog owner : {creative}
              </Typography>
              {ısEditClick && (
                <Box
                  sx={{
                    maxWidth: "100%",
                  }}
                >
                  <TextField
                    sx={{ marginTop: "0.5rem" }}
                    fullWidth
                    label="Content"
                    multiline
                    rows={3}
                    required
                    id="fullWidth"
                    onChange={(e) => setEditContent(e.target.value)}
                  />
                  <Button
                    size="small"
                    sx={{ marginTop: "0.6rem" }}
                    onClick={editConfirm}
                  >
                    Confirm
                  </Button>
                  <Button
                    size="small"
                    sx={{ marginTop: "0.6rem" }}
                    onClick={() => setIsEditClick(false)}
                  >
                    Cancel
                  </Button>
                </Box>
              )}
            </CardContent>
          </Box>
          <CardActions>
            <Button onClick={() => navigate(-1)}>Go Back</Button>
          </CardActions>
          {currentUser.email === email && !ısEditClick && (
            <CardActions sx={{ marginBottom: "1rem" }}>
              <Button size="small" onClick={handleEdit}>
                <EditIcon fontSize="small" />
                Edit
              </Button>
              <Button
                size="small"
                onClick={() => deleteBlog(item.state.id, navigate)}
              >
                <DeleteIcon fontSize="small" /> Delete
              </Button>
            </CardActions>
          )}
        </Card>
      </Container>
    </Container>
  );
}
