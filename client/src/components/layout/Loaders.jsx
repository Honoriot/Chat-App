import { Grid, Skeleton, Stack } from "@mui/material";
import React from "react";

export const LayoutLoader = () => {
  return (
    <div>
      <Grid container height={"calc(100vh - 4rem)"} spacing={"1rem"}>
        <Grid
          item
          sm={4}
          md={3}
          height={"100%"}
          sx={{
            display: { xs: "none", sm: "block" },
          }}>
          <Skeleton variant="rectangular" height={"100vh"} />
        </Grid>

        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          lg={6}
          height={"100%"}
          sx={{
            display: { xs: "none", sm: "block" },
          }}>
          <Stack spacing={"1rem"}>
            {Array.from({ length: 10 }).map((_, index) => (
              <Skeleton variant="rounded" key={index} height={"5rem"} />
            ))}
          </Stack>
        </Grid>

        <Grid
          item
          md={4}
          lg={3}
          height={"100%"}
          sx={{
            display: { xs: "none", md: "block" },
          }}>
          <Skeleton variant="rectangular" height={"100vh"} />
        </Grid>
      </Grid>
    </div>
  );
};
