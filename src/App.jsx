import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PropertyDetails from './pages/PropertyDetails/PropertyDetails';
// import Landing from './pages/Landingprueba'
import { LoginClient } from './componentes/LoginClient';
import { RegisterClient } from './componentes/RegisterClient';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<Landing />} /> */}
      <Route exact path="/" element={<Home />} />
      <Route exact path= "/property/:id" element={<PropertyDetails/>}/>
    </Routes>
  );
}

export default App;
