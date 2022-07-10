import logo from './assetts/images/logo-white.png';
import './App.css';
import NavContainer from './components/Nav';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavContainer />
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <img src={logo} alt="logo"/>
        <p>
          Johnny Bull's Steakhouse
        </p>
        <p>
          <i>a great meal is around the corner!</i>
        </p>
      </header>
    </div>
  );
}

export default App;
