import React from 'react';
import Alert from 'react-bootstrap/Alert'
import '../App.css';

const Phrases = () => {
  return (
    <Alert variant="warning">
      <Alert.Heading>Première boutique où vous ne trouverez pas d'articles !</Alert.Heading>
      <p className="mb-0">
        Commandez votre article entièrement personnalisé que vous ne trouvez nulle part ailleurs.
      </p>
    </Alert>
  );
};
export default Phrases;
