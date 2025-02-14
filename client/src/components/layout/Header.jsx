import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Tooltip,
  Backdrop,
} from "@mui/material";
import {
  black,
  green600,
  green700,
  green800,
  white,
} from "../../constants/color";
import {
  Add as AddIcon,
  Group as GroupIcon,
  Logout,
  Menu as MenuIcon,
  Notifications,
  Search as SearchIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { lazy, Suspense, useState } from "react";

const SearchDialogs = lazy(() => import("../specific/Search"));
const NotificationDialog = lazy(() => import("../specific/Notification"));
const NewGroupDialog = lazy(() => import("../specific/NewGroup"));

const Header = () => {
  const navigate = useNavigate();

  const [isMobile, setIsMobile] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [isNewGroup, setIsNewGroup] = useState(false);
  const [isNotification, setIsNotification] = useState(false);

  const handleMobile = () => {
    console.log("handleMobile");
    setIsMobile(!isMobile);
  };
  const openSearchDialog = () => {
    console.log("openSearchDialog");
    setIsSearch(!isSearch);
  };
  const openNewGroup = () => {
    console.log("OpenNewGroup");
    setIsNewGroup(!isNewGroup);
  };
  const navigateToGroup = () => {
    console.log("navigateToGroup");
    navigate("/Groups");
  };
  const handleLogout = () => {
    console.log("Logout");
  };
  const manageNotifications = () => {
    console.log("Notification");
    setIsNotification(!isNotification);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }} height={"4rem"}>
        <AppBar position="static" sx={{ bgcolor: green600, color: white }}>
          <Toolbar>
            <Typography
              variant="h6"
              sx={{
                display: { xs: "none", sm: "block" },
                letterSpacing: "5px",
                fontWeight: "600",
                transition: "all",
                transitionDuration: "0.2s",
                padding: "0 4px",
                borderBottom: "2px solid",
                borderLeft: "2px solid",
                borderRadius: "5px",
                ":hover": {
                  letterSpacing: "6px",
                  bgcolor: green800,
                  cursor: "pointer",
                },
              }}>
              ChatTo
            </Typography>

            <Box
              sx={{
                display: { xs: "block", sm: "none" },
              }}>
              <IconButton color="inherit" onClick={handleMobile}>
                <MenuIcon />
              </IconButton>
            </Box>

            <Box sx={{ flexGrow: 1 }}></Box>
            <Box>
              <IconBtn
                title="Search"
                ICON={SearchIcon}
                onClickHandler={openSearchDialog}
              />

              <IconBtn
                title="New Group"
                ICON={AddIcon}
                onClickHandler={openNewGroup}
              />

              <IconBtn
                title="Manage Group"
                ICON={GroupIcon}
                onClickHandler={navigateToGroup}
              />

              <IconBtn
                title="Notification"
                ICON={Notifications}
                onClickHandler={manageNotifications}
              />

              <IconBtn
                title="Logout"
                ICON={Logout}
                onClickHandler={handleLogout}
              />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>

      {isSearch && (
        <Suspense fallback={<Backdrop open />}>
          <SearchDialogs />
        </Suspense>
      )}

      {isNotification && (
        <Suspense fallback={<Backdrop open />}>
          <NotificationDialog />
        </Suspense>
      )}

      {isNewGroup && (
        <Suspense fallback={<Backdrop open />}>
          <NewGroupDialog />
        </Suspense>
      )}
    </>
  );
};

const IconBtn = ({ title, ICON, onClickHandler }) => {
  return (
    <Tooltip
      title={title}
      sx={{
        ":hover": { bgcolor: green700 },
      }}>
      <IconButton color="inherit" size="large" onClick={onClickHandler}>
        <ICON />
      </IconButton>
    </Tooltip>
  );
};

export default Header;
