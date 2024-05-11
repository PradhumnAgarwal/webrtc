import React, { useContext } from 'react'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { SocketContext } from "../SocketContex"

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);

  return (
    <Grid container style={{ justifyContent: 'center' }}>
        <Paper square={false} style={{ padding: '10px', margin: '10px', border: '2px solid black' }}>
          <Grid item xs={12} md={6}>
            <Typography gutterBottom variant='h5'>{name || 'Name'}</Typography>
            <video playsInline muted ref={myVideo || null} autoPlay style={{ width: '550px' }} />
          </Grid>
        </Paper>
    
        <Paper square={false} style={{ padding: '10px', margin: '10px', border: '2px solid black' }}>
          <Grid item xs={12} md={6}>
            <Typography gutterBottom variant='h5'>{call.callerName || 'Name'}</Typography>
            <video playsInline muted ref={userVideo || null} autoPlay style={{ width: '550px' }} />
          </Grid>
        </Paper>
    
    </Grid>
  )
}

export default VideoPlayer
