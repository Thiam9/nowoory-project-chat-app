import React, { useState } from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import MoreVertTwoToneIcon from '@material-ui/icons/MoreVertTwoTone';
import AttachFileTwoToneIcon from '@material-ui/icons/AttachFileTwoTone';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import InsertEmoticonOutlinedIcon from '@material-ui/icons/InsertEmoticonOutlined';
import MicNoneOutlinedIcon from '@material-ui/icons/MicNoneOutlined';
import axios from './axios';

import './chat.css'
// import SelectInput from '@material-ui/core/Select/SelectInput';

const Chat = ({ messages }) => {

    const [input, setInput] = useState('');

    const sendMessage = async (e) => {
        e.preventDefault();

        await axios.post('/messages/new', {
            message: input,
            name: "lamine",
            timestamp: "message reçu de suite",
            received: false,
        });

        setInput("");
    };

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
                {messages.map(message => (
                    <p className={`chat__message ${message.received && "chat__reciever"}`}>
                        <span className="chat__name"> {message.name} </span>
                        {message.message}
                        <span className="chat__timestamp">
                            {message.timestamp}
                        </span>
                    </p>
                ))}

            </div>

            <div className="chat__footer">
                <InsertEmoticonOutlinedIcon />

                <form>
                    <input value={input} onChange={e => setInput(e.target.value)} placeholder="Type a message" type="text" />

                    <button onClick={sendMessage} type="submit"> Send a message</button>
                </form>
                <MicNoneOutlinedIcon />
            </div>
        </div>

    );
};

export default Chat;