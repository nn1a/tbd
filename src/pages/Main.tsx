import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import CustomModal from "../components/CustomModal";
import Button from "@mui/material/Button";

const MainPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <Paper
      sx={{
        p: 2,
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      Hello
      <Button onClick={openModal}>Open modal</Button>
      <CustomModal isOpen={isModalOpen} closeModal={closeModal}>
        <Typography> I&apos;m good</Typography>
      </CustomModal>
    </Paper>
  );
};

export default MainPage;
