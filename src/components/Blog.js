import React from 'react';
import { Commentaires, Fournisseurs } from './Data';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const Blog = () => {

  return (
    <React.Fragment>
      <div className="container">
        <h2 className="titre">Blog</h2>
        <hr />
        {Commentaires.map((com, index) => {
          const { id, titre, date, outils, commentaire, illustration } = com;
          return (
            <div className="commentaire" key={id}>
              <div className="row justify-content-end">
                <div className="col-lg-8">
                  <h3 className="titre text-center"><strong>{titre}</strong></h3>
                  <p className="text-justify">Commentaire : {commentaire}</p>
                  <img src={outils} alt="outils" style={{ width : '3rem' }}/>
                </div>
                <div className="col-lg-4 text-center">
                  <img src={illustration} alt="image_d'illustration" className="w-75"/>
                  <p>Réalisé le : {date}</p>
                </div>
                <hr />
              </div>
              <br />
            </div>
          );
        })}
      </div>
      <div className="container-fluid my-5">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-4">
            <Card>
              <Card.Img variant="top" src="https://www.metstonbonnet.fr/image-pool/scale/377/243/b992fcc861080724a4dc82396b46e281d00c688a.png" />
              <Card.Body>
                <Card.Text>
                  Participation annuelle à l'opération "Met ton bonnet". <a href="https://www.metstonbonnet.fr/cestquoi">Découvrir</a>.
                </Card.Text>
              </Card.Body>
            </Card>
          <br />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-4">
          <Card bg="sucess" text="muted" className="text-center p-3">
            <blockquote className="blockquote mb-0 card-body">
              {Fournisseurs.map((fournisseur, index) => {
                const { id, name, image } = fournisseur;
                return (
                  <footer className="footer" key={id}>
                    <small className="text-muted">
                    <img src={image} alt={name} />
                    </small>
                  </footer>
                );
              })}
              Un peu de douceur <cite title="Source Title">cela fait plaisir</cite>
            </blockquote>
          </Card>
          <br/ >
          </div>
        </div>
      </div>
    </React.Fragment>

  );
};
export default Blog;
