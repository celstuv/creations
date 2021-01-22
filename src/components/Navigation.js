import React from 'react';
import logo from '../images/logo.jpg';
import { Link } from 'react-router-dom';
import { links, social } from './Data';

//Bootstrap
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';

const Navigation = () => {

  return (
    <React.Fragment>
      <div className="container">
        <div classname="row">
          <Navbar bg="transparent" variant="transparent">
            <Navbar.Brand href="#home">
              <img alt="logo_boutique" src={logo} className="d-inline-block align-top"  width="30"/>
              &#160; Lyline's Boutique
            </Navbar.Brand>
            <Nav className="mr-auto">
                {links.map((link, index) => {
                  const { id, url, text } = link;
                  return (
                    <Nav.Link key={id} href={url}>{text}</Nav.Link>
                  );
                })}
            </Nav>
          </Navbar>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navigation;
