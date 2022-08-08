import React from 'react';

import profilepic from '../../images/profilepic.jpg'

export default function About() {
    return (
        <div className="about-container">
                <div className="about-content">
                 <img className="avatar" src={profilepic} alt="Mason on the river"></img>
                    <p>
                         Hello! My name is Mason Maglalang and I'm a full-stack web developer based out of Austin, Texas. 
                        I'm a creative thinker and a problem solver who loves to design, build, and implement things that 
                        live on the internet. In my free time, I'm a competitive weightlifter and nature enjoyer.
                    </p>
                </div>
        </div>
    );
};