import React from 'react';

export default function Work () {
    return (
        <div className="row">
  {/* <h1 className="column title" id="work">Work</h1> */}
    <div className="column content-boxes">
      
  
      <div className="row flex-parent">

        <div className="sub-project flex-child">
            <a href="https://cadencechiappe.github.io/GP1-Bootcamp/">
              <img className = "small-img" src="./assets/images/breweatheryapp.jpg" alt="Breweathery web app home page"></img>
            </a>
        </div>

        <div className="work-caption flex-child" id="caption-section-work">
          <p className="app-title">Breweathery</p>
            <p className="app-desc">An easy way to search for breweries and view 
            the weather forecast for a specific area</p>
            <ul>
              <a href="https://cadencechiappe.github.io/GP1-Bootcamp/">
                <li className="work-link-list">Deployed Application</li>
              </a>
              <a href="https://github.com/cadencechiappe/GP1-Bootcamp">
                <li className="work-link-list">Github Repository</li>
              </a>
            </ul>
        </div>

      </div>


      <div className="row flex-parent">
         
        <div className="sub-project flex-child">
          <a href="https://arcane-harbor-36381.herokuapp.com/">
            <img className = "small-img" src="./assets/images/bibliotecha.jpg" alt="bibliotecha web app home page"></img>
          </a>
        </div>

        <div className="work-caption flex-child" id="caption-section-work">
          <p className="app-title">Bibliotecha</p>
            <p className="app-desc">A platform to search for and share books with friends</p>
            <ul>
              <a href="https://arcane-harbor-36381.herokuapp.com/">
                <li className="work-link-list">Deployed Application</li>
              </a>
              <a href="https://github.com/jesusoyer/Bibliotecha-">
                <li className="work-link-list">Github Repository</li>
              </a>
            </ul>
        </div>

      </div>

      <div className="row flex-parent">
         
        <div className="sub-project flex-child">
          <a href="https://github.com/MasonMags/Team-Profile-Generator">
            <img className = "small-img" src="./assets/images/TPG.jpg" alt="TPG web app home page"></img>
          </a>
        </div>

        <div className="work-caption flex-child" id="caption-section-work">
          <p className="app-title">TPG</p>
            <p className="app-desc">A command-line application that generates a team profile
              based on a user's input to a series of prompts
            </p>
            <ul>
              <a href="https://github.com/MasonMags/Team-Profile-Generator">
                <li className="work-link-list">Github Repository</li>
              </a>
            </ul>
        </div>

      </div>

      <div className="row flex-parent">
         
        <div className="sub-project flex-child">
          <a href="https://note-taker-41.herokuapp.com/">
            <img className = "small-img" src="./assets/images/Note-taker.jpg" alt="Note Taker web app home page"></img>
          </a>
        </div>

        <div className="work-caption flex-child" id="caption-section-work">
          <p className="app-title">Note Taker</p>
            <p className="app-desc">A simple note-taking app that uses Express routes to write, 
              read, and delete notes </p>
              <ul>
              <a href="https://note-taker-41.herokuapp.com/">
                <li className="work-link-list">Deployed Application</li>
              </a>
              <a href="https://github.com/MasonMags/Note-Taker">
                <li className="work-link-list">Github Repository</li>
              </a>
              </ul>
        </div>

      </div>


    </div>
</div>
    );
};