import React from 'react';

export default function About() {
    return (
        <div className="about-container">
            {/* <h1> About Me </h1> */}
                <div className="about-content">
                 <img src={avatar} alt="Mason on the river" id="about-me-img"></img>
                    <p>
                         Hello! My name is Mason Maglalang and I'm a full-stack web developer based out of Austin, Texas. 
                        I'm a creative thinker and a problem solver who loves to design, build, and implement things that 
                        live on the internet. In my free time, I'm a competitive weightlifter and nature enjoyer.
                    </p>
                </div>
        </div>
    );
};