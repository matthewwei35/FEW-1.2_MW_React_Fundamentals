import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Title from './components/Title';
import POPOSList from './components/POPOSList/POPOSList';
import Footer from './components/Footer';
import About from './components/About/About';
import POPOSDetails from './components/POPOSDetails/POPOSDetails';

function App() {
  return (
    <Router>

      <div className="App">
        <Title />
        <Route exact path="/" component={POPOSList} />
        <Route path="/about" component={About} />
        <Route path="/details/:id" component={POPOSDetails} />
        <Footer />
      </div>

    </Router>
  );
}

export default App;
