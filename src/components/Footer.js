import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
        <div className="col-lg-6">
          <p>Projet réalisé par Céline &#x1F604; - 2020</p>
        </div>
        <div className="col-lg-6">
          <div className="row">
            <div className="col-lg-6">
            <p>Menu</p>
              <ul>
                <li>Accueil</li>
                <li>Savoir-Faire</li>
                <li>Best-Sellers</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="col-lg-6">
            <p>Lien</p>
            <ul>
            <li><a href="https://www.facebook.com/boutiquedeLyline">Faceboof</a></li>
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
