import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import CardDeck from 'react-bootstrap/CardDeck'


const Produits = ({ name, description, prix, imageSrc, imageAlt }) => {

  // const prixProduit = prix ? (<p>Prix : {prix}</p>) : (<p>Prix : pas de prix</p>);

  console.log(imageSrc);

  return (
    <CardDeck>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={imageSrc} className="w-100" alt={imageAlt} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <hr />
          <Card.Text>
            {description}
          </Card.Text>
          <Button variant="outline-secondary">{prix} €</Button>
        </Card.Body>
      </Card>
    </CardDeck>

    );

};

export default Produits;
