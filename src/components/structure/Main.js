import React from 'react';
import { Switch, Route } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import About from '../pages/About';
import Contact from '../pages/Contact';

const Main = ({toggled, handleToggleSidebar}) => {
  return (
    <main>
      <Header handleToggleSidebar={handleToggleSidebar} />
      <Switch>
        <Route exact path="/">
          <Home /> 
        </Route>
        <Route path="/projekt">
          <Projects />
          <Footer />
        </Route>
        <Route path="/om">
          <About />
          <Footer />
        </Route>
        <Route path="/kontakt">
          <Contact />
          <Footer />
        </Route>
      </Switch>
    </main>
  );
};

export default Main;