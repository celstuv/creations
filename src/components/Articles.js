import React, { Component } from 'react';
import Interlude from './Interlude';
import Phrases from './Phrase';
import Produits from './Produits';
import Savoir from './Savoir';
import Techniques from './Techniques';

const Articles = () => {

    return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="row">
          <div className="col my-3">
            <Interlude />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col my-3">
            <h2 className="titre">Mon Savoir-Faire</h2>
            <hr />
            <Savoir />
            <h2 className="titre" style={{ marginTop: "4rem" }}>Techniques maîtrisées</h2>
            <hr />
            <Techniques />
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 col-md-4">
            <Phrases />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-md-center text-center">
          <div className="col">
            <h2 className="titre" style={{ marginTop: "2rem" }}>Top Ventes Hiver 2020</h2>
            <hr />
              <div className="row commandes">
                <Produits />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
    );
}

export default Articles;
