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

export interface ButtonProps {
  text: string;
  size?: number | string | undefined;
  color?: string | undefined;
  variant?: string | undefined;
  other?: any;

  onClick?: any;
}

function Button(props: ButtonProps) {
  const { text, size, color, variant, ...other } = props;

  return (
    // <Button
    //   variant={variant || "contained"}
    //   size={size || "large"}
    //   color={color || "primary"}
    //   onClick={onClick}
    // >
    //   {text}
    // </Button>
    <div></div>
  );
}
export default Button;
