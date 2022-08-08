import React from 'react';
import resume from '../../resume/resume.pdf'

export default function Resume() {
    return (
        <div>
            <p class="resume-content">
               Take a look at my resume <a href={resume} target='_blank' rel="noreferrer" class="resume-overwrite">here</a>!
            </p>
        </div>
    );
};

