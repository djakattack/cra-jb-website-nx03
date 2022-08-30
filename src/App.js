import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavContainer from './components/Nav';
import MenuContainer from './components/Menu';
import HomeContainer from './components/Home';
import CallContainer from './components/Call';
import background from './assets/images/3461470.jpg';

function App() {
  return (
    <div>
      <Router>
        <NavContainer />
        <Routes>
          <Route exact path="/" element={ <HomeContainer /> } />
          <Route exact path="menu" element={ <MenuContainer />} />
        </Routes>
        <CallContainer />
      </Router>
    </div>
  );
}

export default App;
