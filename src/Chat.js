import React from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import MoreVertTwoToneIcon from '@material-ui/icons/MoreVertTwoTone';
import AttachFileTwoToneIcon from '@material-ui/icons/AttachFileTwoTone';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import InsertEmoticonOutlinedIcon from '@material-ui/icons/InsertEmoticonOutlined';
import MicNoneOutlinedIcon from '@material-ui/icons/MicNoneOutlined';

import './chat.css'
// import SelectInput from '@material-ui/core/Select/SelectInput';

const Chat = () => {
    return (
        <div className='chat'>
            <div className="chat__header">
                <Avatar />

                <div className="chat__headerInfo">
                    <h3>Room name</h3>
                    <p>Last seen at...</p>
                </div>

                <div className="chat__headerRigth">
                    <IconButton>
                        <SearchOutlinedIcon />
                    </IconButton>

                    <IconButton>
                        <AttachFileTwoToneIcon />
                    </IconButton>

                    <IconButton>
                        <MoreVertTwoToneIcon />
                    </IconButton>
                </div>
            </div>
            <div className="chat__body">
                <p className="chat__message">
                    <span className="chat__name">Lemzo</span>
                    This is message
                    <span className="chat__timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>

                <p className="chat__message chat__reciever">
                    <span className="chat__name">Lemzo</span>
                    This is message
                    <span className="chat__timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>

            </div>

            <div className="chat__footer">
                <InsertEmoticonOutlinedIcon />

                <form>
                    <input placeholder="Type a message" type="text" />

                    <button type="submit"> Send a message</button>
                </form>
                <MicNoneOutlinedIcon />
            </div>
        </div>

    );
};

export default Chat;