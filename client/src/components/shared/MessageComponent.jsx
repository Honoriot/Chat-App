import { Box, Typography } from "@mui/material";
import moment from "moment";
import React, { memo } from "react";
import { fileformat } from "../../lib/features";
import RenderAttachment from "./RenderAttachment";

const MessageComponent = ({ message, user }) => {
  const { sender, content, attachments = [], createdAt } = message;

  const sameSender = sender?._id === user?._id;

  const timeAgo = moment(createdAt).fromNow()

  return (
    <div
      style={{
        alignSelf: sameSender ? "flex-end" : "flex-start",
        backgroundColor: "white",
        color: "black",
        borderRadius: "5px",
        padding: "0 0.5rem",
        width: "fit-content",
      }}>


      {!sameSender && <Typography variant="caption" color="rgba(63, 87, 64, 0.8)" fontSize={'10px'} fontWeight={'800'}>{sender?.name}</Typography>}

      {content && <Typography color="rgba(21, 79, 24, 0.8)">{content}</Typography>}

      {/* Attachment */}
      {attachments.length>0 && attachments.map((attachment, index)=>{
        const url = attachment?.url
        const file = fileformat(url)
        console.log(attachment)

        return (
            <Box key={index}>
                <a
                href={url}
                target="_blank"
                download
                style={{
                    color: 'black'
                }}>
                  <RenderAttachment file={file}  url={url}/>
                </a>
            </Box>
        )
      })}

      <Typography variant="caption" color="text.secondary">{timeAgo}</Typography>

    </div>
  );
};

export default memo(MessageComponent);
