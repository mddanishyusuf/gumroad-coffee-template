import React from 'react';
import Head from 'next/head';

import profileData from '../data.json'
import '../styles/index.scss';
import 'bootstrap/scss/bootstrap.scss';

export default function HeadMeta(){
    return (
        <Head>
                <title>Buy Coffee to {profileData.name}</title>
                <link rel="icon" href="/favicon.png" />
                <script type="text/javascript" src="https://gumroad.com/js/gumroad.js" />
                <link href="https://fonts.googleapis.com/css2?family=Sen:wght@400;700&display=swap" rel="stylesheet" />
            </Head>
    )
}