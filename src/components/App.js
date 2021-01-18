import logo from './logo.svg';
import Welcome from './Welcome';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Welcome />
    </div>
  );
}

export default App;
