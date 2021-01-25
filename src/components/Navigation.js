import React from 'react';
import logo from '../images/logo.png';
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
        <div className="row no-gutters">
          <div className="col-6 col-md-4">
            <Navbar.Brand href="#home">
              <img alt="logo" src={logo} className="d-inline-block align-top" />
              <Navbar.Brand>&#160; Lyline's Boutique</Navbar.Brand>
            </Navbar.Brand>
          </div>
          <div className="col-12 col-sm-6 col-md-8 justify-content-center">
            <Nav style={{ fontSize: '1.25rem' }}>
                {links.map((link, index) => {
                  const { id, url, text } = link;
                  return (
                    <Nav.Link key={id} href={url}>{text}</Nav.Link>
                  );
                })}
              </Nav>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navigation;
