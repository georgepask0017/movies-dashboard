import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import axios from "axios";
import { useEffect, useState } from "react";

export interface BasicModalProps {
  overview?: string;
  title?: string;
  poster_path?: string;
  id?: any;
  open: boolean;
}

export interface CreditsViewModel {
  name: string;
  character: string;
  cast_id: string;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  height: 600,
  color: "success.main",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const apiKey = "8166c415daae225e751570b50553e041";

const getMoviePosterUrl = (posterPath: string) => {
  return imageUrl + posterPath;
};

const imageUrl = "https://image.tmdb.org/t/p/original";

function BasicModal(props: BasicModalProps) {
  const [credits, setCredits] = useState([] as CreditsViewModel[]);
  const [isLoading, setIsLoading] = useState(false);

  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  // const toggleModal = () => {
  //   setOpen(!open);
  // };

  return (
    <div>
      <Modal
        open={props?.open}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        color="secondary.main"
      >
        <Box sx={style}>
          <Button className="close-modal">
            Close
          </Button>
          <Typography
            id="modal-modal-title"
            variant="h2"
            component="h2"
            sx={{ textAlign: "center" }}
          >
            {props.title}
          </Typography>
          <Typography
            id="modal-modal-description"
            variant="h5"
            component="h2"
            sx={{ textAlign: "center", mt: 5 }}
          >
            {props.overview}
          </Typography>
          <Typography sx={{ textAlign: "center", mt: 5 }}>
            <img alt="modal"
              // src={getMoviePosterUrl(props.poster_path)}
              className={"itemimage"}
            />
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default BasicModal;
