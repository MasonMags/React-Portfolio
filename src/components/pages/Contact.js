import React from 'react';
// import "../../css/styles.css"


export default function Contact() {
    return(
        <div>
            {/* <h1 className="title">Contact Me</h1> */}
            <ul class="column content-boxes contact-links">
                <li class="cm-links">
                    <a href="mailto:MasonMaglalang1@gmail.com"  id="email-link">Email</a>
                </li>

                <li class="cm-links">
                    <a href="https://github.com/MasonMags" >Github</a>
                </li>

                <li class="cm-links">
                     <a href="https://www.linkedin.com/in/mason-maglalang-930ba322a/">LinkedIn</a>
                </li>
            </ul>
        </div>
    );
};
