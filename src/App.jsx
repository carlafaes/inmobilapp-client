import React from "react";
import { Routes, Route } from "react-router-dom";
import PropertyDetails from "./pages/PropertyDetails/PropertyDetails";
import CreateAgent from "./componentes/CreateAgent/CreateAgent";
import LoginBeta from "./componentes/LoginBeta";
import { RegisterClient } from "./componentes/RegisterClient";
import Home from "./pages/Home/index";
import AgentDetail from "./componentes/AgentDetail/AgentDetail";
import CreatePropertyForm from "./componentes/CreatePropertyForm/CreatePropertyForm";
import FormAdmin from "./pages/FormAdmin";
import PageNotFound from "./pages/PageNotFound";
import ViewAdmin from "./pages/ViewAdmin";
import { ToastContainer } from "react-toastify";
import QuienesSomos from "./componentes/QuienesSomos";
import FormAgent from "./pages/FormAgent/FormAgent";
import { ClientInterface } from "./componentes/ClientInterface/ClientInterface";
import { Toaster } from "react-hot-toast";
import Generales from './componentes/PreguntasFrecuentes/Generales'

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/property/:id" element={<PropertyDetails />} />
        <Route path="/register" element={<RegisterClient />} />
        <Route path="/viewClient" element={<ClientInterface />} />
        <Route path="/viewAdmin" element={<ViewAdmin />} />
        <Route path="/registerAdmin" element={<FormAdmin />} />
        <Route path="registerAgent/:id/:role" element={<FormAgent />} />
        <Route path="/login" element={<LoginBeta />} />
        <Route path="/agents/:id" element={<AgentDetail />} />
        <Route
          path="/create-property/:agentID"
          element={<CreatePropertyForm />}
        />
        <Route path="/quienes" element={<QuienesSomos />} />
        <Route path="/preguntasFrecuentes" element={<Generales/>}/>
      </Routes>
      <Toaster position="top-center" reverseOrder={false} />
      <ToastContainer />
    </>
  );
}

export default App;
