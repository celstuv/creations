import React from 'react';
import Alert from 'react-bootstrap/Alert'
import '../App.css';

const Interlude = () => {
  return (
    <Alert variant="success">
      <Alert.Heading>Qu'est ce que la Lyline's Boutique ? </Alert.Heading>
      <p className="mb-0 text-center">Le principe est simple : <strong>Commandez un vêtement ou un accessoire réalisé par mes soins.</strong>
      <br /> Dans l'E-commerce ou en magasin, vous avez une pléthore d'articles strictement identiques, avec plus ou moins d'originalités.
      Tout le monde côtoie les mêmes boutiques et finit par se ressembler. <br /> Dans ce monde où le conformisme est de rigueur,
      je vous propose de confectionner un vêtement, un accessoire <strong>unique</strong>.
      Vous choissisez la couleur, le motif, les accessoires et obtenez <strong>votre produit à votre image</strong>.</p>
    </Alert>
  );
};
export default Interlude;
