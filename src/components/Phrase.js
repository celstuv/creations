import React from 'react';
import Alert from 'react-bootstrap/Alert'
import '../App.css';

const Phrases = () => {
  return (
    <Alert variant="warning">
      <Alert.Heading>Bonjour, Bienvenue !</Alert.Heading>
      <p>
        Découvrez notre savoir-faire et laissez-vous tenter.
      </p>
      <hr />
      <p className="mb-0">
        Commander un article entèrement personnalisé que vous ne pourrez trouver nulle part ailleurs.
      </p>
  </Alert>
  );
};
export default Phrases;
