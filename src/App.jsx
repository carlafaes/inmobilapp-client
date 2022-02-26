import React from "react";
import { Routes, Route } from "react-router-dom";
import PropertyDetails from "./pages/PropertyDetails/PropertyDetails";
import CreateAgent from './componentes/CreateAgent/CreateAgent';
import LoginBeta from "./componentes/LoginBeta";
import { RegisterClient } from "./componentes/RegisterClient";
import Home from "./pages/Home";
import CreateProperty from "./componentes/CreateProperty";
import AgentDetail from "./componentes/AgentDetail/AgentDetail";
import CreatePropertyForm from "./componentes/CreatePropertyForm/CreatePropertyForm";
import FormAdmin from "./pages/FormAdmin";
import PageNotFound from "./pages/PageNotFound";
import ViewAdmin from "./pages/ViewAdmin";
import { ToastContainer } from "react-toastify";
import MaquetaForm from "./componentes/MaquetaForm";
import QuienesSomos from "./componentes/QuienesSomos";
import ClientInterface_DEMO from "./componentes/ClientInterface_DEMO";
import FormAgent from "./pages/FormAgent/FormAgent"

function App() {
  return (
    <>
      <ToastContainer/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/form" element={<CreateProperty />} />
          <Route path="/registerAdmin" element={<FormAdmin />} />
          <Route path="register-agent" element={<FormAgent/>}/>
          <Route path="/login" element={<LoginBeta />} />
          <Route path="/register" element={<RegisterClient />} />
          <Route path="/viewAdmin" element={<ViewAdmin />} />
          <Route path="/viewClient" element={<ClientInterface_DEMO />} />
          <Route exact path="/property/:id" element={<PropertyDetails />} />
          <Route path="/agents/:id" element={<AgentDetail />} />
          <Route path="/create-property" element={<CreatePropertyForm />} />
          <Route path="/quienes" element={<QuienesSomos />} />
          <Route path="/create-agent" element={<CreateAgent/>} />
          <Route path="/maquetaform" element={<MaquetaForm />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
