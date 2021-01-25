import React from 'react';
import logo from '../images/logo.jpg';
import { links, social } from './Data';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const Footer = () => {
  return (
      <div className="container-Footer py-3">
        <div className="row justify-content-center">
          <div className="col-lg-3 col-md-5 text-center ml-1 email" style={{ backgroundColor: '' }}>
              <Form.Control type="email" placeholder="Tapez votre email" />
              <Button variant="primary" type="submit">Newsletter</Button>
          </div>
          <div className="col-lg-4" style={{ backgroundColor: ''}}>
            <ul className="text-center">
              {links.map((link, index) => {
                const { id, url, text } = link;
                return (
                  <li key={id}><a href={url}>{text}</a></li>
                );
              })}
            </ul>
          </div>
          <div className="col-lg-3" style={{ backgroundColor: ''}}>
            <ul className="text-center">
              {social.map((social, index) => {
                const { id, url, icon, text } = social;
                return (
                  <li key={id}> <a href={url}>{icon}</a></li>
                );
              })}
            </ul>
          </div>
        </div>
        <hr />
        <div class="footer-copyright text-center">© 2020 Copyright: Projet réalisé par Céline</div>
      </div>
  );
};

export default Footer;
