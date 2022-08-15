import { Formik } from "formik";

import { AddBlog } from "../helpers/firebase";
import { useNavigate } from "react-router-dom";
import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { Form } from "formik";
import { Container } from "@mui/system";

export const NewBlogFormik = ({ values, handleChange }) => {
  return (
    <Container sx={{ height: "100vh", marginTop: "7rem" }}>
      <Form>
        <Box
          sx={{
            width: 500,
            maxWidth: "100%",
            margin: "auto",
            marginTop: "10rem",
          }}
        >
          <TextField
            fullWidth
            label="Title"
            id="fullWidth"
            type="text"
            name="title"
            required
            value={values.title}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            label="Image URL"
            type="text"
            id="fullWidth"
            name="imgUrl"
            sx={{ marginTop: "1rem" }}
            required
            value={values.imgUrl}
            onChange={handleChange}
          />
          <TextField
            id="outlined-multiline-static"
            label="Content"
            multiline
            name="content"
            type="text"
            rows={10}
            fullWidth
            required
            sx={{ mt: 2 }}
            value={values.content}
            onChange={handleChange}
          />
          <Button
            variant="contained"
            fullWidth
            sx={{ margin: "1rem 0" }}
            type="submit"
          >
            Save
          </Button>
        </Box>
      </Form>
    </Container>
  );
};

export default function NewBlog() {
  // const id = new Date().getTime();
  const navigate = useNavigate();
  return (
    <Formik
      initialValues={{ title: "", imgUrl: "", content: "" }}
      onSubmit={(values, actions) => {
        // console.log(values);
        AddBlog(values);
        actions.resetForm();
        navigate("/");
      }}
      component={(props) => <NewBlogFormik {...props} />}
    ></Formik>
  );
}
