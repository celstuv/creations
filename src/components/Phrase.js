import React from 'react';
import Alert from 'react-bootstrap/Alert'
import '../App.css';

const Phrases = () => {
  return (
    <Alert variant="warning">
      <Alert.Heading style={{ fontSize: '2rem' }}>Première boutique où vous ne trouverez pas d'articles !</Alert.Heading>
      <p className="mb-0">
        Marre de trouver dans l'E-commerce ou en magasin une pléthore d'articles strictement identiques ?
        <br />Tout le monde côtoie les mêmes boutiques et finit par se ressembler.<br />
        <br />
        <strong>Par le biais de Lyline's Boutique, obtenez votre article entièrement personnalisé que vous ne trouvez nulle part ailleurs.</strong>
      </p>
    </Alert>
  );
};
export default Phrases;
