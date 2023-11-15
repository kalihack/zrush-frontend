import React, { useState } from "react";
import LogInWithBtn from "../LogInWithBtn";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ImageComp from "../ImageComp";
import { Container, FormControlLabel, Typography } from "@mui/material";
import TextInput from "../global_inputs/TextInput";
import Checkbox from "@mui/material/Checkbox";
import ButtonComp from "../ButtonComp";
import Links from "../Links";
import { Visibility } from "@mui/icons-material";
import theme from "../../theme";
import { Field, Form, Formik } from "formik";
const SignuPage = () => {
  const [checked, setChecked] = useState(false);
  const handleChange = (event) => {
    setChecked(!checked);
  };
  const initialValues = {
    // Define your form initial values here
    name:"",
    email:"",
    username: "",
    password: "",
    checked:checked
  };

  const onSubmit = (values, { resetForm }) => {
    // Handle form submission logic here
    console.log(values);
    console.log(checked)
    // Reset the form if needed
    resetForm();
  };

  // responsive styles
  const resposiveImage = {
    visibility: { xs: "hidden" },
  };
  const flexCol = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  };
  return (
    <div>
      <Box sx={{ overflow: "hidden" }}>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Grid container spacing={0} columns={12}>
          <Grid item xs={6}>
            <ImageComp
              src={"assets/photos/logImage.png"}
              alt="photo"
              style={{ [theme.breakpoints.up("sm")]: { display: "none" } }}
            />
          </Grid>
          <Grid item xs={6}>
            <Container maxWidth="sm">
              <Box {...flexCol} gap={"24px"} sx={{ height: "100vh" }}>
                {/* logo and typo container  */}
                <Box {...flexCol} gap={"24px"}>
                  <ImageComp
                    src={"assets/photos/logo.png"}
                    alt="photo"
                    sx={{ backgroundSize: "cover" }}
                  />
                  <Box {...flexCol} sx={{ textAlign: "center", gap: "16px" }}>
                    <Typography variant="h2">
                      Sign up to ZNZ Communications
                    </Typography>
                    <Typography variant="h5">
                      Lorem Ipsum is simply dummy text of the <br /> printing
                      and typesetting industry.
                    </Typography>
                  </Box>
                </Box>
                {/* input fields  */}
                <Form>
                <Box {...flexCol} sx={{ gap: "24px" }}>
                  <Field
                    component={TextInput}
                    placeholder="Name"
                    type="text"
                    name="name"
                    label="Name"
                  />
                  <Field
                    component={TextInput}
                    placeholder="Username"
                    type="text"
                    name="username"
                    label="Username"
                  />
                   <Field
                    component={TextInput}
                    placeholder="Email"
                    type="email"
                    name="email"
                    label="Email"
                  />
                   <Field
                    component={TextInput}
                    placeholder="Password"
                    type="Password"
                    name="password"
                    label="Password"
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    onChange={handleChange}
                    label={
                      <Typography variant="h5">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </Typography>
                    }
                  />
                </Box>
                <Box width={"100%"}>
                  <ButtonComp label={"Create Account"} type={"submit"}/>
                  <LogInWithBtn />
                </Box>
                </Form>
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  gap={"16px"}
                >
                  <Typography variant="h6">Already have an account?</Typography>
                  <Links label={"Sign In"} href={"/signin"} />
                </Box>
              </Box>
            </Container>
          </Grid>
        </Grid>
        </Formik>
      </Box>
    </div>
  );
};

export default SignuPage;
