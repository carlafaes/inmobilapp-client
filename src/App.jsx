import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LoginClient } from './componentes/LoginClient';
import { RegisterClient } from './componentes/RegisterClient';
import Home from './pages/Home';
import CreateProperty from './pages/CreateProperty'

function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<Landing />} /> */}
      <Route exact path="/" element={<Home />} />
      <Route path="/login" element={<LoginClient/>}/>
      <Route path='/register' element={<RegisterClient/>}/>
    </Routes>
  );
}

export default App;
