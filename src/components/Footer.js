import React from 'react';
import wool from '../images/wool.jpg';
import rocknwool from '../images/rocknwool.jpg';

const Footer = () => {
  return (
    <footer>
      <div className="container-Footer">
        <div className="row">
          <div className="col-lg-6 text-center">
            <h6>Projet réalisé par Céline &#x1F604; - 2020</h6>
            <img src={wool} alt="image_footer" />
            <img src={rocknwool} alt="image_footer" />
          </div>
          <div className="col-lg-6">
            <div className="row">
              <div className="col-lg-6">
                <h6>Menu</h6>
                  <ul>
                    <li>Accueil</li>
                    <li>Savoir-Faire</li>
                    <li>Best-Sellers</li>
                    <li>Contact</li>
                  </ul>
              </div>
              <div className="col-lg-6">
                <h6>Contacts</h6>
                  <ul>
                    <li><a href="https://www.facebook.com/boutiquedeLyline">Facebook</a></li>
                    <li><a href="https://www.instagram.com/lylineboutique/">Instagram</a></li>
                  </ul>
              </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
}
export default Footer;
