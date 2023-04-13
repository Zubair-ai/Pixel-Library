import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  TextField,
  Tooltip,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import Src from "../assets/p.jpg";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import ImageIcon from "@mui/icons-material/Image";
import DateRangeIcon from '@mui/icons-material/DateRange';

const StyledModal = styled(Modal)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
const UserBox = styled(Box)({
  display: "flex",
  justifyContent: "start",
  alignItems: "center",
  gap: "15px",
  marginLeft: "20px",
});
const Add = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Tooltip
        onClick={() => {
          setOpen(true);
        }}
        sx={{
          position: "fixed",
          top: "90vh",
          left: { xs: "calc(40%)", md: "5" },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          bgcolor={"background.default"} color={"text.primary"}
          width={"400px"}
          height={"300px"}
          borderRadius={"10px"}
        >
          <Typography variant="h6" color="gray" textAlign={"center"}>
            Create Post
          </Typography>
          <UserBox>
            <Avatar
              sx={{ width: "10", height: "10" }}
              alt="Remy Sharp"
              src={Src}
            />
            <Typography>Jeen</Typography>
          </UserBox>
          <TextField
            sx={{ width: "90%", margin: "20px" }}
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="What is in your mind"
            variant="standard"
          />
          <Stack direction={"row"} gap={"10px"} marginLeft={"15px"}>
            <EmojiEmotionsIcon color="warning" />
            <VideoCameraBackIcon color="success" />
            <PersonAddIcon color="primary" />
            <ImageIcon color="secondary" />
          </Stack>
          <ButtonGroup
            sx={{marginLeft:"15px",marginTop:"10px"}}
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button sx={{width:"300px"}}>Post</Button>
            <Button><DateRangeIcon/></Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};

export default Add;
