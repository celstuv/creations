import React from 'react';
import wool from '../images/wool.jpg';
import rocknwool from '../images/rocknwool.jpg';
import { links, social } from './Data';


const Footer = () => {
  return (
      <div className="container-Footer py-5">
        <div className="row">
          <div className="col-lg-6 text-center">
            <img src={wool} alt="image_footer" />
            <img src={rocknwool} alt="image_footer" />
          </div>
          <div className="col-lg-6">
            <div className="row">
              <div className="col-lg-6">
                <h6>Menu</h6>
                  <ul>
                    {links.map((link, index) => {
                      const { id, url, text } = link;
                      return (
                        <li key={id}><a href={url}>{text}</a></li>
                      );
                    })}
                  </ul>
              </div>
              <div className="col-lg-6 text-center">
                <h6>Contacts</h6>
                  <ul>
                    {social.map((social, index) => {
                      const { id, url, icon } = social;
                      return (
                        <li style={{ marginLeft: '2rem', listStyle: 'none', display: 'inline' }} key={id}> <a href={url}>{icon}</a></li>
                      );
                    })}
                  </ul>
              </div>
          </div>
        </div>
      </div>
      <hr />
      <div class="footer-copyright text-center py-3">© 2020 Copyright: Projet réalisé par Céline
      </div>
    </div>
  )
}
export default Footer;
