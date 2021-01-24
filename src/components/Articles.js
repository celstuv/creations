import React, { Component } from 'react';
import Phrases from './Phrase';
import Produits from './Produits';
import Images from './Images';

import  { ListeProduits }  from './Data';


const Articles = () => {

    return (
    <React.Fragment>
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col">
            <h2>Mon Savoir-Faire</h2>
            <hr />
            <Images />
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
            <h2>Top Ventes Hiver 2020</h2>
            <hr />
              <div className="row commandes">
                {
                  ListeProduits.map((list, index) => {
                    const { name, image, imageSrc, imageAlt, description, prix } = list;
                    return (
                      <div className="col" key={ListeProduits.id} md={4}>
                        <Produits
                          name={name}
                          imageSrc={imageSrc}
                          imageAlt={imageAlt}
                          description={description}
                          prix={prix}>{image}
                        </Produits>
                      </div>
                  );
                  })
                }
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
    );
}

export default Articles;
