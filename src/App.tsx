import { Box, Modal } from "@mui/material";
import "./App.css";
import Widget from "./component/widget/widget";
import { useState } from "react";
import BasicModal from "./component/popup/popup";

function App() {

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOverviewButtonClick = () => {
    setIsPopupOpen(true);
  }


  return (
    <div>
       <Widget onOverviewButtonClick={handleOverviewButtonClick}></Widget> 
       <BasicModal open={isPopupOpen}/>
    </div>
  )
}

export default App;
