import { makeStyles } from "@mui/material";
import React from "react";

const useStyles = makeStyles((theme: { spacing: (arg0: number) => any }) => ({
  root: {
    margin: theme.spacing(0.5),
  },
  label: {
    textTransform: "none",
  },
}));

function Button(onClick) {
  const { text, size, color, variant, ...other } = onClick;

  return (
    <Button
      variant={variant || "contained"}
      size={size || "large"}
      color={color || "primary"}
      onClick={onClick}
    >
      {text}
    </Button>
  );
}
export default Button;
