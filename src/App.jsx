import React from "react";
import { Routes, Route } from "react-router-dom";
import PropertyDetails from "./pages/PropertyDetails/PropertyDetails";
// import Landing from './pages/Landingprueba'
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
import { ClientInterface } from "./componentes/ClientInterface/ClientInterface";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
        <Route path="/register" element={<RegisterClient />} />
        <Route path="/viewClient" element={<ClientInterface />} />
        <Route path="/viewAdmin" element={<ViewAdmin />} />
        <Route path="/registerAdmin" element={<FormAdmin />} />
        <Route exact path="/form" element={<CreateProperty />} />
        <Route path="/login" element={<LoginBeta />} />
        <Route path="/agents/:id" element={<AgentDetail />} />
        <Route path="/create-property" element={<CreatePropertyForm />} />
        <Route path="/quienes" element={<QuienesSomos />} />
        <Route path="/maquetaform" element={<MaquetaForm />} />
      </Routes>
      <Toaster position="top-center" reverseOrder={false} />
      <ToastContainer />
    </>
  );
}

export default App;
