import React from 'react'
import '/home/levin/Documents/Entwicklung/hello-world/src/App.css';
import Navbar from './Components/Navbar';
import Home from './Components/pages/Home';
import AboutMe from './Components/pages/AboutMe';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Projects from './Components/pages/Projects';
import Fahrtkostenrechner from './Components/pages/Fahrtkostenrechner';


class App extends React.Component {
  render() {
      return (
   <>
   <Router>
   <Navbar />
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/AboutMe" component={AboutMe}/>
      <Route exact path="/Projects" component={Projects}/>
      <Route exact path="/Fahrtkostenrechner" component={Fahrtkostenrechner}/>
    </Switch>
   </Router>
    </>
  );
}
}

export default App;
