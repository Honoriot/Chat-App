import { Avatar, Stack, Typography } from "@mui/material";
import React from "react";
import {Face as FaceIcon, AlternateEmail as UserNameIcon, CalendarMonth as CalenderIcon} from '@mui/icons-material';
import moment from 'moment'

const ProfileCard = ({ text, Icon, heading }) => {
  return (
    <>
      <Stack
        direction={"row"}
        alignItems={"center"}
        spacing={"1rem"}
        color={"white"}
        textAlign={"center"}>
          {Icon && Icon}
          <Stack>
            <Typography variant="body1">{text}</Typography>
            <Typography variant="caption" color="gray">{text}</Typography>
          </Stack>
        </Stack>
    </>
  );
};

const Profile = () => {
  return (
    <Stack spacing={"2rem"} direction={"column"} alignItems={"center"}>
      <Avatar
        sx={{
          width: 200,
          height: 200,
          objectFit: "contain",
          marginBottom: "1rem",
          border: "5px solid white",
        }}
      />
      <ProfileCard
        text={"It's About Me"}
        heading={"Bio"}
      />
      <ProfileCard
        text={"Honor_IOT"}
        Icon={<UserNameIcon />}
        heading={"UserName"}
      />
      <ProfileCard
        text={"Aniket Singh"}
        Icon={<FaceIcon />}
        heading={"Name"}
      />
      <ProfileCard
        text={moment('2025-01-05T18:04:05.795Z').fromNow()}
        Icon={<CalenderIcon />}
        heading={"Joined"}
      />
    </Stack>
  );
};

export default Profile;
