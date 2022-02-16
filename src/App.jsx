import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import Landing from './pages/Landingprueba'
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<Landing />} /> */}
      <Route exact path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
