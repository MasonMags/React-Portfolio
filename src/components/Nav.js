import React from 'react';

function Nav({ currentPage, handlePageChange }){
    <nav>
    <ul class="navigation">
      <li>
        <a href="#About" class="nav-item"
        onClick={() => handlePageChange('Home')}
        className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>
            About
        </a>
      </li>
      <li>
        <a href="#Skills" class="nav-item" 
        onClick={() => handlePageChange('Skills')}
        className={currentPage === 'Skills' ? 'nav-link active' : 'nav-link'}>
            Skills
        </a>
      </li>
      <li>
        <a href="#Work" class="nav-item" 
        onClick={() => handlePageChange('Work')}
        className={currentPage === 'Work' ? 'nav-link active' : 'nav-link'}>
            Work
        </a>
      </li>
      <li>
        <a href="#contact-me" class="nav-item" 
        onClick={() => handlePageChange('Home')}
        className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
            Contact
        </a>
      </li>
    </ul>
</nav>
};

export default Nav