import React from 'react';
import ReactDOM from 'react-dom';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import logo from '../images/logo.jpg';

const Menu = () => {
    return (
        <Navbar bg="transparent" variant="transparent">
          <Navbar.Brand href="#home">
          <img alt="logo_boutique" src={logo} className="d-inline-block align-top" />&#160;
          Lyline's Boutique
        </Navbar.Brand>
         <Nav className="mr-auto">
           <Nav.Link href="#home">Home</Nav.Link>
           <Nav.Link href="#features">Savoir-Faire</Nav.Link>
           <Nav.Link href="#features">Best-Sellers</Nav.Link>
           <Nav.Link href="#pricing">Contact</Nav.Link>
         </Nav>
         <Form inline>
           <FormControl type="text" placeholder="Search" className="mr-sm-2" />
           <Button variant="outline-primary">Search</Button>
         </Form>
       </Navbar>
    );
};
export default Menu;
