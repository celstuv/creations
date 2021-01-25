import React from 'react';
import { Technique } from './Data';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';


const Techniques = () => {

  return (
    <div className="container">
      <div className="row justify-content-md-center text-center">
      {
        Technique.map((Techniques, index) => {
          const { id, url } = Techniques;
          //console.log(Techniques);
        return (
          <div className="technique" key={Techniques.id}>
            <CardDeck>
              <Card style={{ width: '20rem', marginLeft: '3rem', marginBottom: '3rem', padding: '1.25rem'}}>
                <img src={url} alt="image_Savoir" className="w-100" />
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

export default Techniques;
