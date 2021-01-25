import React from 'react';
import { SavoirImge } from './Data';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';


const Savoir = () => {
  return (
    <div className="container">
      <div className="row justify-content-md-center text-center">
      {
        SavoirImge.map((SavoirImges, index) => {
          const { id, url } = SavoirImges;
          //console.log(SavoirImges);
        return (
          <div className="savoir" key={SavoirImges.id}>
          <CardDeck>
            <Card style={{ width: '20rem', marginLeft: '3rem', padding: '1.25rem'}}>
              <img src={url} alt="image_Savoir" className="w-100"/>
              </Card>
            </CardDeck>
          </div>
        );
      })
      }
      </div>
    </div>

  );
};

export default Savoir;
