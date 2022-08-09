import React from 'react';

import githubIcon from '../../images/github-small.png'
import linkedinIcon from '../../images/linkedin-icon.png'

/* eslint-disable */
export default function Footer() {   
    return (
    <footer className="footer fixed-bottom">
        <div>    
            <a href="https://github.com/MasonMags">
                <img class="icon" src={githubIcon}></img>
            </a>
            <a href="https://www.linkedin.com/in/mason-maglalang-930ba322a/">
                <img class="icon" src={linkedinIcon}></img> 
            </a> 
        </div>
    </footer>
    )
}
