import React from "react";
import AdminLayout from "../../components/layout/AdminLayout";
import { Box, Container, Paper, Stack, Typography } from "@mui/material";
import { AdminPanelSettings } from "@mui/icons-material";
import moment from "moment";
import { SearchField } from "../../components/styles/StyledComponent";

const DashBoard = () => {
  const AppBar = <Paper elevation={3} sx={{
    padding:"2rem", margin: "2rem 0", borderRadius: '1rem'
  }}>

  <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
    <AdminPanelSettings sx={{
      fontSize: "3rem"
    }}/>
    <SearchField type="text" />

    <button>sdf</button>
    
    <Box flexGrow={1} />

    <Typography>{moment().format("MMMM Do YYYY")}</Typography>
  </Stack>

  </Paper>;
  return (
    <AdminLayout>
      <Container component={"main"}>{AppBar}</Container>
    </AdminLayout>
  );
};

export default DashBoard;
