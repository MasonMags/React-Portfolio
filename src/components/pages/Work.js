import React from 'react';

function Work () {
    return (
        <div class="row">
  <h1 class="column title" id="work">Work</h1>
    <div class="column content-boxes">
      
  
      <div class="row flex-parent">

        <div class="sub-project flex-child">
            <a href="https://cadencechiappe.github.io/GP1-Bootcamp/">
              <img class = "small-img" src="./assets/images/breweatheryapp.jpg" alt="Breweathery web app home page"></img>
            </a>
        </div>

        <div class="work-caption flex-child" id="caption-section-work">
          <p class="app-title">Breweathery</p>
            <p class="app-desc">An easy way to search for breweries and view 
            the weather forecast for a specific area</p>
            <ul>
              <a href="https://cadencechiappe.github.io/GP1-Bootcamp/">
                <li class="work-link-list">Deployed Application</li>
              </a>
              <a href="https://github.com/cadencechiappe/GP1-Bootcamp">
                <li class="work-link-list">Github Repository</li>
              </a>
            </ul>
        </div>

      </div>


      <div class="row flex-parent">
         
        <div class="sub-project flex-child">
          <a href="https://arcane-harbor-36381.herokuapp.com/">
            <img class = "small-img" src="./assets/images/bibliotecha.jpg" alt="bibliotecha web app home page"></img>
          </a>
        </div>

        <div class="work-caption flex-child" id="caption-section-work">
          <p class="app-title">Bibliotecha</p>
            <p class="app-desc">A platform to search for and share books with friends</p>
            <ul>
              <a href="https://arcane-harbor-36381.herokuapp.com/">
                <li class="work-link-list">Deployed Application</li>
              </a>
              <a href="https://github.com/jesusoyer/Bibliotecha-">
                <li class="work-link-list">Github Repository</li>
              </a>
            </ul>
        </div>

      </div>

      <div class="row flex-parent">
         
        <div class="sub-project flex-child">
          <a href="https://github.com/MasonMags/Team-Profile-Generator">
            <img class = "small-img" src="./assets/images/TPG.jpg" alt="TPG web app home page"></img>
          </a>
        </div>

        <div class="work-caption flex-child" id="caption-section-work">
          <p class="app-title">TPG</p>
            <p class="app-desc">A command-line application that generates a team profile
              based on a user's input to a series of prompts
            </p>
            <ul>
              <a href="https://github.com/MasonMags/Team-Profile-Generator">
                <li class="work-link-list">Github Repository</li>
              </a>
            </ul>
        </div>

      </div>

      <div class="row flex-parent">
         
        <div class="sub-project flex-child">
          <a href="https://note-taker-41.herokuapp.com/">
            <img class = "small-img" src="./assets/images/Note-taker.jpg" alt="Note Taker web app home page"></img>
          </a>
        </div>

        <div class="work-caption flex-child" id="caption-section-work">
          <p class="app-title">Note Taker</p>
            <p class="app-desc">A simple note-taking app that uses Express routes to write, 
              read, and delete notes </p>
              <ul>
              <a href="https://note-taker-41.herokuapp.com/">
                <li class="work-link-list">Deployed Application</li>
              </a>
              <a href="https://github.com/MasonMags/Note-Taker">
                <li class="work-link-list">Github Repository</li>
              </a>
              </ul>
        </div>

      </div>


    </div>
</div>
    );
};

export default Work;