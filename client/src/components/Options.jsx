import React, { useContext, useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PhoneIcon from '@mui/icons-material/Phone';
import PhoneDisabledIcon from '@mui/icons-material/PhoneDisabled';

import { SocketContext } from '../SocketContex';

import { CopyToClipboard } from 'react-copy-to-clipboard'

const Options = ({ children }) => {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState('');

  return (
    <Container style={{ width: '100%', margin: '35px 0', padding: 0, }}>
      <Paper square={false} elevation={10} style={{ padding: '5px 8px', border: '2px solid black'}}>
        <form noValidate autoComplete='off' style={{ display: 'flex', flexDirection: 'column'}}>
          <Grid Container style={{ width: '100%', display:'flex' , flexDirection: 'row' }}>
            <Grid item  style={{ padding: 10, width:'50%' }}>
              <Typography gutterBottom variant="h6">Account Info</Typography>
              <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth style={{ margin: 10 }} />
              <CopyToClipboard text={me} style={{ margin: 10 }}>
                <Button variant="contained" color="primary" fullWidth startIcon={<AssignmentIcon fontSize="large" />}>
                  Copy Your ID
                </Button>
              </CopyToClipboard>
            </Grid>
            <Grid item style={{ padding: 10, width:'50%' }}>
              <Typography gutterBottom variant="h6">Make a call</Typography>
              <TextField label="ID to call" value={idToCall} onChange={(e) => setIdToCall(e.target.value)} fullWidth style={{ margin: 10 }} />
              {callAccepted && !callEnded ? (
                <Button variant="contained" color="secondary" startIcon={<PhoneDisabledIcon fontSize="large" />} fullWidth onClick={leaveCall} style={{ margin: 10 }}>
                  Hang Up
                </Button>
              ) : (
                <Button variant="contained" color="primary" startIcon={<PhoneIcon fontSize="large" />} fullWidth onClick={() => callUser(idToCall)} style={{ margin: 10 }}>
                  Call
                </Button>
              )}
            </Grid>
          </Grid>
        </form>
      {children}
      </Paper>
    </Container>
  )
}

export default Options
