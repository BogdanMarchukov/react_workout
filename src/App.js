import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../src/Components/Header';
import Baner from '../src/Components/Baner';
import AboutUs from '../src/Components/AboutUs';
import OurServis from '../src/Components/OurServis';
import LatestWorks from '../src/Components/LatestWorks';

let works = {
  h2: 'Latest Works',
  p: `Lorem ipsum dolor sit amet, consectetur adipisicing 
      elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
      aliqua. Ut enim ad minim veniam,`,
  button1: 'ALL',
  button2: 'WEB DESIGN',
  button3: 'UI/UX DESIGN',
  button4: 'MOCKUPS',
  button5: 'VIEW ALL'
};

function App() {
  return (
    <div>
      <Header/>
      <Baner/>
      <AboutUs/>
      <OurServis/>
      <LatestWorks works={works}/>
    </div>
  );
}

export default App;
