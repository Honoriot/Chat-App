
import React, { memo } from 'react'
import { Link } from '../styles/StyledComponent'
import { Stack, Typography, Box } from '@mui/material'
import AvatarCard from './AvatarCard'



const ChatItem = ({
    avatar=[],
    name,
    _id,
    groupChat=false,
    sameSender,
    isOnline,
    newMessageAlert,
    index=0,
    handleDeleteChat
}) => {
    console.log('_id page ' + sameSender)
  return (    
    <Link
    sx={{
        padding: '0'
    }} 
    to={`/chat/${_id}`} onContextMenu={(e)=>handleDeleteChat(e, _id, groupChat)}>
        <div style={{
            display: 'flex',
            gap: '1rem',
            alignItems: 'center',
            padding: '0.5rem',
            backgroundColor: sameSender ? "rgba(35, 157, 38, 1)" : "unset",
            color: sameSender ? "white" : "unset",
            position: 'relative'
        }}>

            {/* Avatar card */}

            <AvatarCard avatar={avatar} />

            <Stack>
                <Typography >{name}</Typography>

                {
                    newMessageAlert && (<Typography sx={{
                        padding: '0',
                        fontSize: '12px'
                    }}>{newMessageAlert?.count} New Message</Typography>)
                }
            </Stack>

            {
                isOnline && (
                    <Box sx={{
                        width: '10px',
                        height: '10px',
                        borderRadius: '50%',
                        backgroundColor: 'green',
                        position: "absolute",
                        top: '50%',
                        right: '1rem',
                        transform: "translateY(-50%)"
                    }} ></Box>
                )
            }

        </div>
    </Link>
  )
}

export default memo(ChatItem)
