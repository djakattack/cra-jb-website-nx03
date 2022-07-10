import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavContainer from './components/Nav';
import MenuContainer from './components/Menu';
import HomeContainer from './components/Home';

function App() {
  return (
    <Router>
      <div className="App">
          <NavContainer />
          <Routes>
            <Route exact path="/" component={HomeContainer} />
            <Route exact path="menu" component={MenuContainer} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
