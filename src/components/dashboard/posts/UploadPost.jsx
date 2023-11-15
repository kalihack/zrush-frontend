import React, { useState } from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import ButtonComp from "../../ButtonComp";
import { Box } from "@mui/material";
import ImageComp from "../../ImageComp";
import TextInput from "../../global_inputs/TextInput";
import { Field, Form, Formik, useFormik } from "formik";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(13),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const UploadPost = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const formik = useFormik({
    initialValues: {
      post: "",
      image: null,
    },
    onSubmit: (values) => {
      // Handle form submission logic here
      console.log(values);
    },
  });
  return (
    <div>
      <Formik
        initialValues={formik.initialValues}
        onSubmit={formik.onSubmit}
        enableReinitialize={true}
      >
        <Form>
          <Button variant="outlined" onClick={handleClickOpen}>
            Open dialog
          </Button>
          <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
          >
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: "absolute",
                left: 0,
                top: 8,
                color: "black",
              }}
            >
              <CloseIcon />
            </IconButton>
            <DialogContent dividers>
              <Box>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "16px" }}
                >
                  <ImageComp src={"assets/photos/profile.png"} />
                  <Typography variant="uploadForm">Robert Fin</Typography>
                </Box>
                <Field
                  type="text"
                  label="post"
                  name="post"
                  component={TextInput}
                  placeholder="Post" // You can pass props like placeholder to TextInput
                  style={{ border: "none" }}
                />
                <input
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  id="image-upload"
                  onChange={(event) => {
                    const file = event.target.files[0];
                    if (file) {
                      formik.setFieldValue("image", file);
                    }
                  }}
                />
                <label htmlFor="image-upload">
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <ImageComp src={"assets/photos/upload-image.png"} />
                    <Typography variant="uploadForm">Add Your Image</Typography>
                    <Typography variant="h5">
                      Share what you're working on.
                    </Typography>
                  </Box>
                </label>
              </Box>
            </DialogContent>
            <ButtonComp label={"post"} type={"submit"} />
          </BootstrapDialog>
        </Form>
      </Formik>
    </div>
  );
};

export default UploadPost;
