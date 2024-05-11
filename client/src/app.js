import React from 'react';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import VideoPlayer from './components/VideoPlayer';
import Options from './components/Options';
import Notification from './components/Notification';


const App = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%',}}>
            <AppBar position='static' color='inherit' style={{borderRadius:15, margin: '30px 100px', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '600px', border: '2px solid black',}}>
                <Typography variant='h3' align='center'>Web-RTC Chat</Typography>
            </AppBar>
            <VideoPlayer />
            <Options>
                <Notification />
            </Options>
        </div>
    );
};

export default App;