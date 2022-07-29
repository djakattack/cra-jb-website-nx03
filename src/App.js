import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import NavContainer from './components/Nav';
import MenuContainer from './components/Menu';
import HomeContainer from './components/Home';
// import background from './assets/images/IMG_1204.jpeg';

function App() {
  return (
    <Router>
      <div className="upper"></div>
      <div className="lower">
          {/* <NavContainer /> */}
          <Routes>
            <Route exact path="/" element={ <HomeContainer /> } />
            <Route exact path="menu" element={ <MenuContainer />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
