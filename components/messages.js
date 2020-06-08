import React from 'react';

import '../styles/messages.scss';

const Messages = () => {
    return (
        <div className="messages">
            <div className="message-card">
                <div className="name">
                    <b>Fajar Siddiqui</b> bought 10 coffees.
                </div>
                <div className="message">
                    Have a great time building your bootstrapped microstartups. Here is a small gift from me! I enjoyed
                    watching you grow into a successful indie-maker. Much love from me from Singapore 🇸🇬
                    https://fajarsiddiq.com
                </div>
            </div>
            <div className="message-card">
                <div className="name">
                    <b>@sohafidz</b> bought a coffee.
                </div>
                <div className="message">
                    Thank you for the support ofor the launch of FatihaTV.com, and for alerting that it was shown on the
                    wrong day on producthunt. 💪 🙌{' '}
                </div>
            </div>
            <div className="message-card">
                <div className="name">
                    <b>Brendan Weinstein</b> bought a coffee.
                </div>
                <div className="message">{''}</div>
            </div>
        </div>
    );
};

export default Messages;
