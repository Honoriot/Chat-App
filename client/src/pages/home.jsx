import { Typography } from "@mui/material";
import AppLayout from "../components/layout/AppLayout";

const Home = () => {
    return (
        <Typography p={'2rem'} variant="h5" textAlign={'center'}>Select a friend to chat</Typography>
    );
}

export default AppLayout()(Home);