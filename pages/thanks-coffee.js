import React from 'react';
import HeadMeta from '../components/head'
import { GiCoffeeCup } from 'react-icons/gi';


import profileData from '../data.json'
import {getIcon} from '../config/function'
import '../styles/thanks-page.scss'

export default function Thanks() {

    return (
        <div className="main-container">
            <HeadMeta />
            <div className="thanks-page">
                <h2><span>Thanks!</span><GiCoffeeCup /></h2>
                
                <p>Big love for the coffee - I’m confident the amount you sent will actually go towards coffee beans:)</p>
                <small>Let's connect</small>
                <ul>
                    {profileData.links.map((profile, key) => {
                        if(profile.category === 'social'){
                            return (
                                <li key={key}>
                                    <a href={profile.link} target="_blank" rel="noopener norerferrer">
                                        {getIcon(profile.type)}
                                        <span>{profile.name}</span>
                                    </a>
                                </li> 
                            )
                        }
                    })}
                </ul>
            </div>
        </div>
    );
}
