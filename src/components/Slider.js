import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import mitaine from '../images/red.jpg';
import plaid from '../images/rocknwool.jpg';
import snood from '../images/wool.jpg';

class Slider extends Component {
  render() {
    return(
      <React.Fragment>
      <div className="slider" style={{ width: "20rem" }}>
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src={mitaine}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Créations</h3>
              <p>Différents Modèles à votre disposition</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src={plaid}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Votre style</h3>
              <p>Adapté à votre intérieur</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={snood}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Tricot ou Crochet</h3>
              <p>Tout doux, bien chaud !</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      </React.Fragment>
    );
  }
}
export default Slider;
