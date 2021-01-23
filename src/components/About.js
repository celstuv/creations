import React from 'react';
import { BackgroundImage } from './Data';

const About = () => {

  return (
<React.Fragment>
    {BackgroundImage.map((bgdImage, index) => {
      const { url } = bgdImage;
      console.log(bgdImage);
      return (
        <div className="container-fluid my-5" key={bgdImage.id} style={{ backgroundImage: "url(" + url + ")", backgroundSize: 'cover' }}>
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
            <p className="text-justify">Eius populus ab incunabulis primis ad usque pueritiae tempus extremum,
            quod annis circumcluditur fere trecentis, circummurana pertulit bella, deinde
            aetatem ingressus adultam post multiplices bellorum aerumnas Alpes transcendit
            et fretum, in iuvenem erectus et virum ex omni plaga quam orbis ambit inmensus,
            reportavit laureas et triumphos, iamque vergens in senium et nomine solo aliquotiens
            vincens ad tranquilliora vitae discessit.</p>
            <br />
            <h4>Qu'est ce que la Lyline Boutique ? </h4>
            <p className="text-justify">Quo cognito Constantius ultra mortalem modum exarsit ac nequo casu idem Gallus de
            futuris incertus agitare quaedam conducentia saluti suae per itinera conaretur, remoti
            sunt omnes de industria milites agentes in civitatibus perviis.Coactique aliquotiens nostri pedites ad eos persequendos scandere clivos sublimes
            etiam si lapsantibus plantis fruticeta prensando vel dumos ad vertices venerint summos,
            inter arta tamen et invia nullas acies explicare permissi nec firmare nisu valido gressus.</p>
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
