import React from 'react'
import { FaProductHunt, FaTwitter } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
import { AiOutlineRocket, AiOutlineInstagram, AiFillFacebook, AiOutlineAlert } from 'react-icons/ai';

export const getIcon = function(type){
    if(type === 'github'){
        return <FiGithub />
    }
    if(type === 'projects'){
        return <AiOutlineRocket />
    }
    if(type === 'twitter'){
        return <FaTwitter />
    }
    if(type === 'producthunt'){
        return <FaProductHunt />
    }
    if(type === 'instagram'){
        return <AiOutlineInstagram />
    }
    if(type === 'facebook'){
        return <AiFillFacebook />
    }
    return <AiOutlineAlert />
}