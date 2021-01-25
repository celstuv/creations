import React from 'react';
import { Commentaires } from './Data';

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
              <div className="row">
                <div className="col-lg-4 text-right">
                  <img src={illustration} alt="image_d'illustration" className="w-50"/>
                </div>
                <div className="col-lg-8">
                  <h3 className="titre text-center"><strong>{titre}</strong></h3>
                  <p className="text-justify">Commentaire : {commentaire}</p>
                  <img src={outils} alt="outils" style={{ width : '3rem' }}/>
                  <p>Réalisé le : {date}</p>
                </div>
                <hr />
              </div>
              <br />
            </div>
          );
        })}
      </div>
    </React.Fragment>

  );
};
export default Blog;
