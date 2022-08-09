import React, { useState } from 'react';
import Nav from './Nav';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';
import Resume from './pages/Resume'
import Footer from './pages/Footer';
import "../css/styles.css"

export default function Portfolio() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'About'){
            return <About />
        };
        if (currentPage === 'Work'){
            return <Work />
        };
        if (currentPage === 'Resume'){
            return <Resume />
        };
        if (currentPage === 'Contact')
            return <Contact />
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
          <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
          {renderPage()}
          <Footer />
        </div>
      );
};


