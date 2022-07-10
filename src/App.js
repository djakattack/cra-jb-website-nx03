import logo from './assets/images/logo-black.png';
import NavContainer from './components/Nav';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavContainer />
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div className="logo-main">
          <img src={logo} alt="logo"/>
        </div>
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
