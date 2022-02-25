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
import{ClientInterface} from "./componentes/ClientInterface/ClientInterface";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        {/* <Route path="/" element={<Landing />} /> */}
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
        <Route path="/register" element={<RegisterClient />} />
        <Route path="/login" element={<LoginBeta />} />
        <Route path="/viewClient" element={<ClientInterface />} />
        <Route path="/viewAdmin/:id" element={<ViewAdmin />} />
        <Route path="/registerAdmin" element={<FormAdmin />} />
        <Route path="/agents/:id" element={<AgentDetail />} />
        <Route path="/form" element={<CreateProperty />} />
        <Route path="/create-property" element={<CreatePropertyForm />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
