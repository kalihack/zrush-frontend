import { Box, InputBase, TextField } from "@mui/material";
import React from "react";
import theme from "../../theme";
const TextInput = ({ field, form: { touched, errors }, ...props }) => {
  console.log("touched", errors);
  // console.log(field);
  return (
    <>
      <InputBase fullWidth {...props} {...field} sx={theme.spacing(5, 12)} />
      {errors[field.name] && touched[field.name] ? (
        <span sx={{ color: "red" }}>{errors[field.name]}</span>
      ) : null}
    </>
  );
};

export default TextInput;
