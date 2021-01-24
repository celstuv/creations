import React from 'react';
import Interlude from './Interlude';
import Articles from './Articles';
import Footer from './Footer';


const Accueil = () => {
  return(
    <div className="container-fluid">
      <Interlude />
      <Articles />
      <Footer />
    </div>
  );
}
export default Accueil;
