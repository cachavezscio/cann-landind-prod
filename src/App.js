import React from 'react';
import './styles/default.scss';

// Components
import { Header } from './components/Header';
import { Canvas } from './components/Canvas';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Partners } from './components/Partners';
import { ContactUs } from './components/ContactUs';
import { Footer } from './components/Footer';


const App = () => {
  return (
    <>
    <Canvas>
      <Header/>
      <Hero/>
      <Features/>
      <Partners />
        <ContactUs />
        <Footer/>
    </Canvas>
    </>
  ) 
}

export default App;
