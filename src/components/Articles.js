import React, { Component } from 'react';
import Produits from './Produits';
import Images from './Images';


class Articles extends Component {

  state = {
      ListeProduits: [
        { name: 'Snoods', description: 'Boutonner ou enfiler, différents motifs', prix: 35, imageSrc: '../images/snood.jpg', imageAlt: 'image_snood'},
        { name: 'Mitaines', description: 'Avec ou sans pouce', prix: 20, imageSrc: '../images/mitaine.jpg', imageAlt: 'image_mitaine' },
        { name: 'Plaids', description: 'A partir 1 mètre', prix: 70, imageSrc: '../images/plaid.jpg', imageAlt: 'image_snood' },
      ],
    };


  render() {
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
              this.state.ListeProduits.map((list, index) => {
                return (
                  <div className="col" key={index} md={4}>
                    <Produits
                      name={list.name}
                      imageSrc={list.imageSrc}
                      imageAlt={list.imageAlt}
                      description={list.description}
                      prix={list.prix}>{list.image}</Produits>
                  </div>
              );
              })
            }
        </div>

      </div>

    );
  }
}

export default Articles;
