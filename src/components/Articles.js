import React, { Component } from 'react';
import Produits from './Produits';
import Images from './Images';
import  { ListeProduits }  from './Data';


const Articles = () => {

    return (
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col">
            <Images />
          </div>
        </div>
        <hr />
          <h2>Top Ventes Hiver 2020</h2>
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

    );
}

export default Articles;
