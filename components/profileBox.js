import React from 'react';

import '../styles/profile.scss';
import profileData from '../data.json'
import {getIcon} from '../config/function'


const ProfileBox = () => {
    return (
        <div className="profile">
            <div className="profile-head">
                <div className="profile-photo">
                    <img src="https://pbs.twimg.com/profile_images/1199611613080276992/94p0_IIQ_400x400.png" alt="" />
                </div>
                <h2>{profileData.name}</h2>
                <small>{profileData.subtitle}</small>
                <p>
                    {profileData.about}
                </p>

                <ul>
                    {profileData.links.map((profile, key) => (
                        <li>
                            <a href={profile.link} target="_blank" rel="noopener norerferrer">
                                {getIcon(profile.type)}
                                <span>{profile.name}</span>
                            </a>
                        </li> 
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ProfileBox;
