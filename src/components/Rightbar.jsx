import {
  styled,
  Avatar,
  AvatarGroup,
  Box,
  Typography,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
} from "@mui/material";
import React from "react";
import PeopleIcon from "@mui/icons-material/People";
import Src2 from "../assets/p2.jpg";
import Src3 from "../assets/p3.jpg";
import Src4 from "../assets/p4.jpg";
import Src5 from "../assets/p5.jpg";
import Src6 from "../assets/p6.jpg";
import Src7 from "../assets/p7.jpg";
import Src8 from "../assets/p8.jpg";
import Src9 from "../assets/p9.jpg";
import PhotoIcon from "@mui/icons-material/Photo";

const Rightbar = () => {
  const Friends = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "start",
    gap: 4,
  }));
  return (
    <Box sx={{ display: { xs: "none", sm: "block" }, p: 2 }} flex={2}>
      <Box position="fixed">
        <Friends>
          <Typography>Friends</Typography>
          <PeopleIcon />
        </Friends>
        <AvatarGroup max={6}>
          <Avatar alt="Remy Sharp" src={Src2} />
          <Avatar alt="Travis Howard" src={Src3} />
          <Avatar alt="Cindy Baker" src={Src4} />
          <Avatar alt="Agnes Walker" src={Src5} />
          <Avatar alt="Trevor Henderson" src={Src6} />
          <Avatar alt="Cindy Baker" src={Src7} />
          <Avatar alt="Agnes Walker" src={Src8} />
          <Avatar alt="Trevor Henderson" src={Src9} />
        </AvatarGroup>
        <Friends sx={{ mt: 2 }}>
          <Typography>Latest Photos</Typography>
          <PhotoIcon />
        </Friends>
        <ImageList
            cols={3}
            rowHeight={100}>
          <ImageListItem
          >
            <img
              src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
              alt="title"
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d"
              alt="title"
              loading="lazy"
            />
          </ImageListItem>
          
          <ImageListItem>
            {" "}
            <img
              src="https://images.unsplash.com/photo-1522770179533-24471fcdba45"
              alt="title"
              loading="lazy"
            />
          </ImageListItem>
        </ImageList>
        <Friends sx={{ mt: 2 }}>
          <Typography>Latest conversation</Typography>
          <PhotoIcon />
        </Friends>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src={Src2} />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src={Src3} />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src={Src5} />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
