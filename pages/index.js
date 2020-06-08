import React, { useState, useEffect } from 'react';
import Head from 'next/head';

import ProfileBox from '../components/profileBox';
import BuyCoffee from '../components/buyCoffee';
import Messages from '../components/messages';
import '../styles/index.scss';
import 'bootstrap/scss/bootstrap.scss';

export default function Home() {
    const [messages, setMessages] = useState([]);
    const [flagNumber, setFlagNumber] = useState(0);

    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
        };

        fetch('/api/messages', requestOptions)
            .then((response) => response.text())
            .then((result) => {
                console.log(JSON.parse(result));
                setMessages(JSON.parse(result));
            })
            .catch((error) => console.log('error', error));
    }, [flagNumber]);

    const triggerGumroadFile = () => {
        setFlagNumber(flagNumber + 1);
    };

    return (
        <div className="main-container">
            <Head>
                <title>Buy Coffee to Mohd Danish</title>
                <link rel="icon" href="/favicon.png" />
                <script type="text/javascript" src="https://gumroad.com/js/gumroad.js" />
                <link href="https://fonts.googleapis.com/css2?family=Sen:wght@400;700&display=swap" rel="stylesheet" />
            </Head>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <ProfileBox />
                    </div>
                    <div className="content-conatiner col-md-8">
                        <BuyCoffee messages={messages} triggerGumroadFile={triggerGumroadFile} />
                        <Messages messages={messages} />
                    </div>
                </div>
            </div>
        </div>
    );
}
