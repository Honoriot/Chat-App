import React from "react";
import AdminLayout from "../../components/layout/AdminLayout";
import { Box, Container, Paper, Stack, Typography } from "@mui/material";
import { AdminPanelSettings, Notifications } from "@mui/icons-material";
import moment from "moment";
import { CurveButton, SearchField } from "../../components/styles/StyledComponent";

const DashBoard = () => {
  const AppBar = <Paper elevation={3} sx={{
    padding:"2rem", margin: "2rem 0", borderRadius: '1rem'
  }}>

  <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
    <AdminPanelSettings sx={{
      fontSize: "3rem"
    }}/>
    <SearchField type="text" placeholder="Search..." ></SearchField>

    <CurveButton>Search</CurveButton>
    
    <Box flexGrow={1} />

    <Typography
    display={{
      xs: "none",
      lg: "block"
    }}
    >{moment().format("D MMMM YYYY")}</Typography>

    <Notifications/>
  </Stack>

  </Paper>;

  const widgets = <>dfs</>

  return (
    <AdminLayout>
      <Container component={"main"}>
        {AppBar}
        <Stack direction={"row"} spacing={"2rem"} flexWrap={"wrap"}>
          <Paper
            elevation={3}
            sx={{
              padding: "2rem .5rem",
              borderRadius: "1rem",
              width: "100%",
              maxWidth: "45rem"
            }}>
            <Typography margin={"2rem 0"} variant="h4">Last Messages</Typography>
            {"chart"}
          </Paper>
          <Paper
            elevation={3}
            sx={{
              padding: "1rem",
              borderRadius: "1rem",
              display: "flex",
              justifyContent: "center",
              width: {xs: "100%", sm: "50%"},
              position: "relative",
              width: "100%",
              maxWidth: '25rem'
            }}>

          </Paper>
        </Stack>
        
        {
          widgets
        }

      </Container>
    </AdminLayout>
  );
};

export default DashBoard;
