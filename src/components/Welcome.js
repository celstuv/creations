import React, {Component} from 'react';
import Header from './Header';
import Slider from './Slider';
import Phrases from './Phrase';
import Articles from './Articles';
import Footer from './Footer';


class Welcome extends Component {
  render() {
    return(
      <div className="container-fluid">
      <Header />
      {/*<Slider >*/}
      <Phrases />
      <Articles />
      <Footer />
      </div>
    )
  }
}
export default Welcome;
