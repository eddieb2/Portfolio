import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './app.scss';
// Components
import Nav from './components/Nav';
import Home from './components/Home';
import Bio from './components/Bio';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';
import WelcomePage from './components/WelcomePage';

function App() {
  return (
    <Router>
      <WelcomePage />
      <Nav />
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/bio'>
        <Bio />
      </Route>
      <Route path='/projects'>
        <Projects />
      </Route>
      <Route path='/resume'>
        <Resume />
      </Route>
      <Route path='/contact'>
        <Contact />
      </Route>
    </Router>
  );
}

export default App;
