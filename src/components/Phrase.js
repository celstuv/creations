import React from 'react';
import Alert from 'react-bootstrap/Alert'
import '../App.css';

const Phrases = () => {
  return (
    <Alert variant="warning">
      <Alert.Heading>Bonjour, Bienvenue !</Alert.Heading>
      <p>
        Première boutique où l'on ne vend aucun article
      </p>
      <p className="mb-0">
        Commandez votre article entièrement personnalisé que vous ne trouvez nulle part ailleurs.
      </p>
    </Alert>
  );
};
export default Phrases;
