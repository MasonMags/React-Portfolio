import React, { useState } from 'react';
import Nav from './Nav';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';
import Skills from './pages/Skills';
import Resume from './pages/Resume'

function Portfolio() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === About){
            return <About />
        };
        if (currentPage === Work){
            return <Work />
        };
        if (currentPage === Skills){
            return <Skills />
        };
        if (currentPage === Resume){
            return <Resume />
        };
        if (currentPage === Resume)
            return <Contact />
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
          <Nav currentPage={currentPage} handlePageChange={handlePageChange} />

          {renderPage()}
        </div>
      );
};

export default Portfolio


