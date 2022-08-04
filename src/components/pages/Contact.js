import React from 'react';

function Contact() {
    return(
        <div>
            <h1>Contact Me</h1>
            <ul class="column content-boxes contact-links">
                <li class="cm-links">
                    <a href="mailto:MasonMaglalang1@gmail.com" target="_blank" id="email-link">Email</a>
                </li>

                <li class="cm-links">
                    <a href="https://github.com/MasonMags" target="_blank">Github</a>
                </li>

                <li class="cm-links">
                     <a href="https://www.linkedin.com/in/mason-maglalang-930ba322a/" target="_blank">LinkedIn</a>
                </li>

                <li class="cm-links">
                    <a href="./assets/files/resume.pdf" target="_blank">Resume</a>
                </li>
            </ul>
        </div>
    );
};

export default Contact;