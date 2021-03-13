import React from 'react';
import { Switch, Route, useLocation } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import Home from '../pages/Home';
import Services from '../pages/Services';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import About from '../pages/About';
import { AnimatePresence } from 'framer-motion';

const Main = ({handleToggleSidebar}) => {

  const location = useLocation(); 

  return (
    <main style={{position: 'relative', overflowX: 'hidden', alignItems: 'center'}}>
      <Header handleToggleSidebar={handleToggleSidebar} />
      <AnimatePresence style={{position: 'relative', overflowX: 'hidden', display: 'flex', flex: 1, alignItems: 'center', minHeight: '100%', marginBottom: '-50px'}}>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/">
            <Home /> 
          </Route>
          <Route path="/tjanster">
            <Services />
          </Route>
          <Route path="/projekt">
            <Projects />
          </Route>
          <Route path="/kontakt">
            <Contact />
          </Route>
          <Route path="/om">
            <About />
          </Route>
        </Switch>
      </AnimatePresence>
      <Footer />
    </main>
  );
};

export default Main;