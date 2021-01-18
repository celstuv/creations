import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'

const Contact = () => {
  return(
    <React.Fragment>
      <div className="container">
          <h3>Besoin d'informations ? Demande de devis ? Veuillez utiliser le formulaire ci-dessous : </h3>
        <form className="my-5 py-5 pr-5 pl-5 border border-warning rounded mb-0">
          <Form.Row>
            <div className="col-lg-6">
              <Form.Label>Nom : </Form.Label>
              <Form.Control placeholder="Renseignez votre nom" />
            </div>
            <div className="col-lg-6">
              <Form.Label>Prenom :</Form.Label>
              <Form.Control placeholder="Renseignez votre prénom" />
            </div>
          </Form.Row>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email :</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Votre demande d'informations</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Bonjour, je souhaite....."/>
          </Form.Group>
          <Button variant="outline-primary">Valider</Button>
        </form>
      </div>
    </React.Fragment>
  );
}
export default Contact;
