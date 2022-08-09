import React from 'react';
import resume from '../../resume/resume.pdf'

export default function Resume() {
    return (
        <div>
            <p class="resume-content">
               Take a look at my resume <a href={resume} target='_blank' rel="noreferrer" class="resume-overwrite">here</a>!
            </p>
            <p class="tech">Additionally, here is a list of my technical proficiencies:</p>
            <div class="content-box">
                <ul class="skills-list">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React.js</li>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>Handlebars.js</li>
                    <li>Sequelize.js</li>
                    <li>MySQL</li>
                    <li>NoSQL</li>
                    <li>MongoDB</li>
                    <li>Mongoose ODM</li>
                </ul>
             </div>
        </div>
    );
};

