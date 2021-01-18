import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Navigation from './Navigation';
import Accueil from './Accueil';
import Contact from './Contact';
import '../App.css';


function App() {
  return (
    <div className="App">
        <Router>
          <Navigation />
          <Route path="/" exact component={Accueil} />
          <Route path="/contact" component={Contact} />
        </Router>
    </div>
  );
}

export default App;
