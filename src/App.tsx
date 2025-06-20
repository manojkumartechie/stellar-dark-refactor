import React from 'react';
import { Router, Route, Switch } from 'wouter';
import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'wouter';
import Navigation from './components/Navigation';
import ParticleBackground from './components/ParticleBackground';
import AnimatedBackground from './components/AnimatedBackground';
import Hero from './pages/Hero';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import './App.css';

function AnimatedRoutes() {
  const [location] = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Switch location={location}>
        <Route path="/" component={Hero} />
        <Route path="/about" component={About} />
        <Route path="/skills" component={Skills} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </AnimatePresence>
  );
}

function App() {
  return (
    <div className="App">
      <AnimatedBackground />
      <ParticleBackground />
      <Router>
        <Navigation />
        <main>
          <AnimatedRoutes />
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;