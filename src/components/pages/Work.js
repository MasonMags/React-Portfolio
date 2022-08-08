import React from 'react';

import breweathery from "../../images/breweatheryapp.jpg";
import bibliotecha from "../../images/bibliotecha.jpg";
import noteTaker from "../../images/Note-taker.jpg";
import TPG from "../../images/TPG.jpg";
import weatherDash from "../../images/weather-dash.jpg";
import readmeGen from "../../images/readme-gen.jpg";

export default function Work () {
  console.log("must display SIX projects")
    return (
        <div className="row">
  {/* <h1 className="column title" id="work">Work</h1> */}
    <div className="column content-boxes">
      
  
      <div className="row flex-parent">

        <div className="sub-project flex-child">
            <a href="https://cadencechiappe.github.io/GP1-Bootcamp/">
              <img className = "work-img" src={breweathery} alt="Breweathery web app home page"></img>
            </a>
        </div>

        <div className="work-caption flex-child" id="caption-section-work">
          <p className="app-title">Breweathery</p>
            <p className="app-desc">An easy way to search for breweries and view 
            the weather forecast for a specific area</p>
            <ul>
              <a href="https://cadencechiappe.github.io/GP1-Bootcamp/" className="work-link-list">
                <li>Deployed Application</li>
              </a>
              <a href="https://github.com/cadencechiappe/GP1-Bootcamp" className="work-link-list">
                <li>Github Repository</li>
              </a>
            </ul>
        </div>

      </div>


      <div className="row flex-parent">
         
        <div className="sub-project flex-child">
          <a href="https://arcane-harbor-36381.herokuapp.com/">
            <img className = "work-img" src={bibliotecha} alt="bibliotecha web app home page"></img>
          </a>
        </div>

        <div className="work-caption flex-child" id="caption-section-work">
          <p className="app-title">Bibliotecha</p>
            <p className="app-desc">A platform to search for and share books with friends</p>
            <ul>
              <a href="https://arcane-harbor-36381.herokuapp.com/" className="work-link-list">
                <li>Deployed Application</li>
              </a>
              <a href="https://github.com/jesusoyer/Bibliotecha-" className="work-link-list">
                <li>Github Repository</li>
              </a>
            </ul>
        </div>

      </div>

      <div className="row flex-parent">
         
        <div className="sub-project flex-child">
          <a href="https://github.com/MasonMags/Team-Profile-Generator">
            <img className = "work-img" src={TPG} alt="TPG web app home page"></img>
          </a>
        </div>

        <div className="work-caption flex-child" id="caption-section-work">
          <p className="app-title">TPG</p>
            <p className="app-desc">A command-line application that generates a team profile
              based on a user's input to a series of prompts
            </p>
            <ul>
              <a href="https://github.com/MasonMags/Team-Profile-Generator" className="work-link-list">
                <li>Github Repository</li>
              </a>
            </ul>
        </div>

      </div>

      <div className="row flex-parent">
         
        <div className="sub-project flex-child">
          <a href="https://note-taker-41.herokuapp.com/">
            <img className = "work-img" src={noteTaker} alt="Note Taker web app home page"></img>
          </a>
        </div>

        <div className="work-caption flex-child" id="caption-section-work">
          <p className="app-title">Note Taker</p>
            <p className="app-desc">A simple note-taking app that uses Express routes to write, 
              read, and delete notes </p>
              <ul>
              <a href="https://note-taker-41.herokuapp.com/" className="work-link-list">
                <li>Deployed Application</li>
              </a>
              <a href="https://github.com/MasonMags/Note-Taker" className="work-link-list">
                <li>Github Repository</li>
              </a>
              </ul>
        </div>

      </div>

      <div className="row flex-parent">
         
        <div className="sub-project flex-child">
          <a href="https://masonmags.github.io/Weather-Dashboard/">
            <img className = "work-img" src={weatherDash} alt="Weather Dashboard web app home page"></img>
          </a>
        </div>

        <div className="work-caption flex-child" id="caption-section-work">
          <p className="app-title">Weather Dashboard</p>
            <p className="app-desc">A front-end application that uses a third-party API to display 
            the current weather as well as a five-day forecast </p>
              <ul>
              <a href="https://masonmags.github.io/Weather-Dashboard/" className="work-link-list">
                <li>Deployed Application</li>
              </a>
              <a href="https://github.com/MasonMags/Weather-Dashboard" className="work-link-list">
                <li>Github Repository</li>
              </a>
              </ul>
        </div>

      </div>

      <div className="row flex-parent">
         
        <div className="sub-project flex-child">
          <a href="https://github.com/MasonMags/Professional-README-Generator">
            <img className = "work-img" src={readmeGen} alt="README being generated from the command line"></img>
          </a>
        </div>

        <div className="work-caption flex-child" id="caption-section-work">
          <p className="app-title">README Generator</p>
            <p className="app-desc">A command-line application that generates a professional README.md file 
            based on a user's input to a series of prompts </p>
              <ul>
              <a href="https://github.com/MasonMags/Professional-README-Generator" className="work-link-list">
                <li>Github Repository</li>
              </a>
              </ul>
        </div>

      </div>


    </div>
</div>
    );
};