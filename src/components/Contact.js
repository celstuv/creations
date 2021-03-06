import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'

const Contact = () => {
  return(
    <React.Fragment>
      <div className="container my-5">
          <h1>Besoin d'informations ? Demande d'un devis ? <br /> Utilisez le formulaire ci-dessous : </h1>
        <form className="my-5 py-5 pr-5 pl-5 border border-success rounded mb-0">
          <Form.Row>
            <div className="col-lg-6">
              <Form.Label>Nom : </Form.Label>
              <Form.Control placeholder="Renseignez votre nom" />
            </div>
            <div className="col-lg-6">
              <Form.Label>Prénom :</Form.Label>
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
