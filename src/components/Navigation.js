import React from 'react';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import logo from '../images/logo.jpg';
import FormControl from 'react-bootstrap/FormControl'
import { Link } from 'react-router-dom';

const Navigation = () => {

  return (
    <div className="container-fluid my-3">
      <ul style={{ display: 'flex', justifyContent: 'between' }}>
        <Link to="/">
          <li style={{ marginLeft: 5, listStyle: 'none' }}>
            <img alt="logo_boutique" src={logo} className="d-inline-block align-top" />&#160;
            <span>Lyline's Boutique</span>
          </li>
        </Link>
        <Link to="/">
          <li style={{ marginLeft: 10, listStyle: 'none' }}>Accueil</li>
        </Link>
        <Link to="savoirfaire">
          <li style={{ marginLeft: 10, listStyle: 'none' }}>Savoir-Faire</li>
        </Link>
        <Link to="blog">
          <li style={{ marginLeft: 10, listStyle: 'none' }}>Blog</li>
        </Link>
        <Link to="/contact">
          <li style={{ marginLeft: 10, listStyle: 'none' }}>Contact</li>
        </Link>
      </ul>
    </div>
  );
}

export default Navigation;
