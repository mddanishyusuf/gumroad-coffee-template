import React from 'react';
import { FaProductHunt, FaTwitter } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
import { AiOutlineRocket } from 'react-icons/ai';

import '../styles/profile.scss';

const ProfileBox = () => {
    return (
        <div className="profile">
            <div className="profile-head">
                <div className="profile-photo">
                    <img src="https://pbs.twimg.com/profile_images/1199611613080276992/94p0_IIQ_400x400.png" alt="" />
                </div>
                <h2>Mohd Danish</h2>
                <small>is building nocodeapi.com</small>
                <p>
                    💻Full Stack Engineer + Independent + Bootstrapped 💯My Indie-Maker Journey of 2019. Building my 9th
                    bootstrapped micro-startup product in 2019.
                </p>

                <ul>
                    <li>
                        <a href="https://github.com/mddanishyusuf" target="_blank" rel="noopener norerferrer">
                            <FiGithub />
                            <span>Open Source Projects</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://mohddanish.me/projects" target="_blank" rel="noopener norerferrer">
                            <AiOutlineRocket />
                            <span>Projects</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/mddanishyusuf" target="_blank" rel="noopener norerferrer">
                            <FaTwitter />
                            <span>Let's Connect</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.producthunt.com/@mddanishyusuf" target="_blank" rel="noopener norerferrer">
                            <FaProductHunt />
                            <span>ProductHunt</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ProfileBox;
