import React from 'react';
import { BackgroundImage } from './Data';

const About = () => {

  return (
<React.Fragment>
    {BackgroundImage.map((bgdImage, index) => {
      const { url } = bgdImage;
      console.log(bgdImage);
      return (
        <div className="container-fluid my-5"
          key={bgdImage.id}
          style={{
            backgroundImage: "url(" + url + ")",
            backgroundSize: 'cover',
            filter : 'contrast(90%)'
          }}
            >
          <div className="row">
            <div className="col my-5">
              <h1>About Me</h1>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="Col-lg-4 col-md-4 text-right">
            <img src="https://cdn.pixabay.com/photo/2017/02/16/23/10/smile-2072907__340.jpg" alt="logo_boutique" style={{ width: "auto"}}/>
            </div>
            <div className="Col-lg-8 col-md-4">
            <h4>Qui suis-je ? </h4>
            <p className="text-justify">Je suis une addicte du concept Do What You Want, Do It Yourself. <br />
            Dynamique, entreprenante, je cherche constamment à me dépasser. Passionnée, J'aime découvrir de
            nouvelles choses et ne mecontente jamais de la routine et du classique.</p>
            <br />
            <h4>Comment m'est venue cette idée ? </h4>
            <p className="text-justify">Je surfais sur les e-commerces pendant les soldes, je trouvais des articles
            intéressant mais à chaque fois je me disais &#8220;<em>je l'aurais pris s'il avait le motif ou la couleur ou
            l'accessoire vu sur l'article précédemment&#8220;</em>.
            Au bout d'un moment, je me suis dis &#8220;<em>Si je pouvais le faire...</em>&#8220;.</p>
            <br />
            <h4>Pourquoi proposer mes services ? </h4>
            <p className="text-justify">J'en ai discuté avec mes amies. Nous avions les mêmes problématiques. Je me suis formée au tricot, le crochet, la couture.
            J'ai réalisé des premières créations pour mon fils et moi (cagoule, mitaines, bonnets). J'ai eu des retours positifs.
            Mes amies m'ont passées commandes, puis mes collègues, à partir de cet instant, j'étais lancée.</p>
            <br />
            <p className="text-justify">A vos commandes ! <br /> Céline &#128513;</p>
            </div>
          </div>
        </div>
      );
    })}
</React.Fragment>
  );

};

export default About;
