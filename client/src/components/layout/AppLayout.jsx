import { Grid } from "@mui/material";
import Title from "../shared/Title";
import Header from "./Header";
import ChatList from "../specific/ChatList";
import { green200 } from "../../constants/color";
import { sampleChats } from "../../constants/sampleData";
import { useParams } from "react-router-dom";
import Profile from "../specific/Profile";

const AppLayout = () => (WrappedComponent) => {
  return (props) => {
    const param = useParams();
    const chatId = param?.chatId;
    const handleDeleteChat = () => {

    }

    return (
      <div>
        <Title />
        <Header />

        <Grid container height={"calc(100vh - 4rem)"}>
          <Grid
            item
            sm={4}
            md={3}
            sx={{
              display: { xs: "none", sm: "block" },
            }}
            height={"100%"}
            bgcolor={green200}>
            <ChatList
              chats={sampleChats}
              chatId={chatId}
              handleDeleteChat={handleDeleteChat}
              onlineUsers={["1", "2"]}
            />
          </Grid>

          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            lg={6}
            height={"100%"}
            bgcolor="rgba(242, 255, 242, 0.8)">
            <WrappedComponent {...props} />
          </Grid>

          <Grid
            item
            md={4}
            lg={3}
            sx={{
              display: { xs: "none", md: "block" },
              padding: "2rem",
              bgcolor: "rgba(42, 50, 42, 1)",
            }}
            height={"100%"}>
            <Profile />
          </Grid>
        </Grid>
      </div>
    );
  };
};

export default AppLayout;
