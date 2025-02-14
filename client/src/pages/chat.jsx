import { IconButton, Stack } from "@mui/material";
import AppLayout from "../components/layout/AppLayout";
import { Fragment, useRef } from "react";
import {
  AttachFile as AttachFileIcon,
  Send as SendIcon,
} from "@mui/icons-material";
import { InputBox } from "../components/styles/StyledComponent";
import FileMenu from "../components/dialogs/FileMenu";
import { sampleMessage } from "../constants/sampleData";
import MessageComponent from "../components/shared/MessageComponent";

const user = {
  _id: 'sdff',
  name: 'Sam'
}

const Chat = () => {
  const containerRef = useRef(null);

  return (
    <Fragment>
      <Stack
        ref={containerRef}
        boxSizing={"border-box"}
        padding={"1rem"}
        spacing={"1rem"}
        bgcolor={"rgba(205, 233, 206, 0.8)"}
        height={"90%"}
        sx={{
          overflowX: "hidden",
          overflowY: "auto",
        }}>
        {/* Messages */}

        {
          sampleMessage.map((i, index) => (
            <MessageComponent message={i} user={user} key={index} />
          ))
        }

      </Stack>

      <form
        style={{
          height: "10%",
        }}>
        <Stack
          direction={"row"}
          height={"100%"}
          padding={"1rem"}
          alignItems={"center"}
          position={"relative"}>
          <IconButton sx={{
            position: 'absolute',
            left: "1.2rem",
            rotate: "30deg",
            transition: 'all',
            transitionDuration: '0.5s',
            '&:hover': {
                bgcolor: "rgba(2, 147, 76, 0.8)",
                color: 'white'
            }
          }}>
            <AttachFileIcon />
          </IconButton>

          <InputBox placeholder="type message here" />

          <IconButton type="submit" sx={{
            bgcolor: 'rgba(1, 164, 84, 0.8)',
            color: 'white',
            marginLeft: '1rem',
            padding: '0.5rem',
            transition: 'all',
            transitionDuration: '0.5s',
            "&:hover": {
                bgcolor: "rgba(2, 147, 76, 0.8)",
                rotate: "-30deg",
            }
          }}>
            <SendIcon sx={{
                transition: 'all',
                transitionDuration: '0.5s',
                "&:hover": {
                translate: '5px'
            }   
            }} />
          </IconButton>
        </Stack>
      </form>

      <FileMenu />
    </Fragment>
  );
};

export default AppLayout()(Chat);
