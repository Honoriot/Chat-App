import {
  Close as CloseIcon,
  Dashboard as DashboardIcon,
  ExitToApp,
  Group,
  ManageAccounts,
  Menu as MenuIcon,
  Message,
} from "@mui/icons-material";
import {
  Box,
  Drawer,
  Grid,
  IconButton,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import { green } from "@mui/material/colors";
import { useState } from "react";
import { useLocation, Link as LinkComponent, Navigate } from "react-router-dom";
import "./style.css";

const Link = styled(LinkComponent)`
  text-decoration: none;
  border-radius: 2rem;
  padding: 1rem 2rem;
  transition: all 0.3s ease-in-out;
  color: white;
`;

const adminTabs = [
  {
    name: "Dashboard",
    path: "/admin/dashboard",
    icon: <DashboardIcon />,
  },
  {
    name: "User",
    path: "/admin/user-management",
    icon: <ManageAccounts />,
  },
  {
    name: "Chat",
    path: "/admin/chat-management",
    icon: <Group />,
  },
  {
    name: "Messages",
    path: "/admin/message-management",
    icon: <Message />,
  },
];

const isAdmin = true
const SideBar = ({ w = "100%" }) => {
  const location = useLocation();

  const logoutHandler = () => {};

  return (
    <Stack
      width={w}
      direction={"column"}
      sx={{
        background: green[500],
        height: "100vh",
        color: "white",
        padding: "2rem",
      }}>
      <Typography
        varient="h3"
        sx={{
          fontSize: "2rem",
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "2rem",
        }}
        textTransform={"uppercase"}>
        ChatTo
      </Typography>

      <Stack spacing={"1rem"}>
        {adminTabs.map((tab) => (
          <Link
            key={tab.path}
            to={tab.path}
            sx={
              location.pathname === tab.path && {
                borderBottom: "1px solid",
                bgcolor: green[700],
                color: "white",
              }
            }>
            <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
              {tab.icon}
              <Typography
                className={location.pathname !== tab.path ? "hover_text": ""}
                sx={{
                  fontSize: "1.3rem",
                }}>
                {tab.name}
              </Typography>
            </Stack>
          </Link>
        ))}

        <Link onClick={logoutHandler}>
          <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
            <ExitToApp />
            <Typography
              className="hover_text"
              sx={{
                fontSize: "1.3rem",
              }}>
              Logout
            </Typography>
          </Stack>
        </Link>
      </Stack>
    </Stack>
  );
};

const AdminLayout = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);

  const handleClose = () => {
    setIsMobile(false);
  };
  const handleMobile = () => {
    setIsMobile((prev) => !prev);
  };
  if(!isAdmin) return <Navigate to={"/admin/login"} />

  return (
    <Grid container minHeight={"100vh"}>
      <Box
        sx={{
          display: { xs: "block", md: "none" },
          position: "fixed",
          right: "1rem",
          top: "1rem",
        }}>
        <IconButton onClick={handleMobile} sx={{ color: "white" }}>
          {isMobile ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </Box>

      <Grid item md={4} lg={3} sx={{ display: { xs: "none", md: "block" } }}>
        <SideBar />
      </Grid>

      <Grid item xs={12} md={8} lg={9} sx={{ background: "grey" }}>
        {children}
      </Grid>

      <Drawer open={isMobile} onClose={handleClose}>
        <SideBar w="50vw" />
      </Drawer>
    </Grid>
  );
};

export default AdminLayout;
