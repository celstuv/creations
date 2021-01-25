import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import CardDeck from 'react-bootstrap/CardDeck'
import  { ListeProduits }  from './Data';

const Produits = () => {

  //console.log(imageSrc);

  return (
      <React.Fragment>
        {ListeProduits.map((list, index) => {
          const { name, image, imageSrc, imageAlt, description, prix } = list;
          return (
            <div className="col" key={list.id} md={4}>
              <CardDeck>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={imageSrc} className="w-100" alt={imageAlt} />
                  <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <hr />
                    <Card.Text>
                      {description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </CardDeck>
            </div>
        );
        })
      }
    </React.Fragment>
    );

};

export default Produits;
