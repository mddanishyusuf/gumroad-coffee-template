import Head from 'next/head';

import ProfileBox from '../components/profileBox';
import BuyCoffee from '../components/buyCoffee';
import Messages from '../components/messages';
import '../styles/index.scss';
import 'bootstrap/scss/bootstrap.scss';

export default function Home() {
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
                        <BuyCoffee />
                        <Messages />
                    </div>
                </div>
            </div>
        </div>
    );
}
