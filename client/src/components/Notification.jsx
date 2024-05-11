import React, { useContext } from 'react'
import Button from '@mui/material/Button';

import { SocketContext } from '../SocketContex';

const Notification = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);
  return (
    <>
      {call.isReceivingCall && !callAccepted && (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <h1>{call.callerName} wants to join!</h1>
          <Button variant="contained" color="primary" onClick={answerCall}>
            Answer
          </Button>
        </div>
      )}
    </>
  )
}

export default Notification
