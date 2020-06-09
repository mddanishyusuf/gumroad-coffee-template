import React, { useEffect, useState } from 'react';

import '../styles/messages.scss';

const Messages = ({ messages }) => {
    return (
        <div className="messages">
            {messages.map((message, key) => (
                <div className="message-card" key={key}>
                    <div className="name">
                        <b>{message.custom_fields.Name}</b> bought {message.quantity} {message.quantity === 1 ? 'coffee' : 'coffees'}.
                    </div>
                    <div className="message">{message.custom_fields['Say something nice.']}</div>
                </div>
            ))}
        </div>
    );
};

export default Messages;
