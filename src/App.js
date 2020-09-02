import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../src/Components/Header';
import Baner from '../src/Components/Baner';
import AboutUs from '../src/Components/AboutUs';
import OurServis from '../src/Components/OurServis';

function App() {
  return (
    <div>
      <Header/>
      <Baner/>
      <AboutUs/>
      <OurServis/>
    </div>
  );
}

export default App;
