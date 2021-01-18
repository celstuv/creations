import React from 'react';
import Phrases from './Phrase';
import Articles from './Articles';
import Footer from './Footer';


const Accueil = () => {
  return(
    <div className="container-fluid">
      <Phrases />
      <Articles />
      <Footer />
    </div>
  );
}
export default Accueil;
