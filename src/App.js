import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../src/Components/Header';
import Baner from '../src/Components/Baner';
import AboutUs from '../src/Components/AboutUs'

function App() {
  return (
    <div>
      <Header/>
      <Baner/>
      <AboutUs/>
    </div>
  );
}

export default App;
