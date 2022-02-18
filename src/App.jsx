import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import CreateProperty from './pages/CreateProperty'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/form" element={<CreateProperty />} />
    </Routes>
  );
}

export default App;
