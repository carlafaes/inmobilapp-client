import React from "react";
import { Routes, Route } from "react-router-dom";
import PropertyDetails from "./pages/PropertyDetails/PropertyDetails";
// import Landing from './pages/Landingprueba'
import { LoginClient } from './componentes/LoginClient';
import { RegisterClient } from './componentes/RegisterClient';
import Home from './pages/Home';
import CreateProperty from './componentes/CreateProperty'
import AgentDetail from './componentes/AgentDetail/AgentDetail'
import CreatePropertyForm from './componentes/CreatePropertyForm/CreatePropertyForm'
import FormAdmin from "./pages/FormAdmin";
import PageNotFound from "./pages/PageNotFound";
import ViewAdmin from "./pages/ViewAdmin";
import { ToastContainer } from "react-toastify";
import QuienesSomos from './componentes/QuienesSomos'

function App() {
  return (
    <>
      <ToastContainer/>
        <Routes>
          {/* <Route path="/" element={<Landing />} /> */}
          <Route exact path="/" element={<Home />} />
          <Route exact path="/form" element={<CreateProperty />} />
          <Route path="/registerAdmin" element={<FormAdmin />} />
          <Route path="/login" element={<LoginClient />} />
          <Route path="/register" element={<RegisterClient />} />
          <Route path="/viewAdmin/:id" element={<ViewAdmin />} />
          <Route exact path="/property/:id" element={<PropertyDetails />} />
          <Route path="/agents/:id" element={<AgentDetail/>} />
          <Route path="/create-property" element={<CreatePropertyForm/>} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/quienes" element={<QuienesSomos />} />
        </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
