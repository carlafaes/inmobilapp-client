import React, { useState } from "react";
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
import Generales from "./componentes/PreguntasFrecuentes/Generales";
import Contact from "./pages/Contact/Contact";
import ViewAgent from "./pages/ViewAgent";
import Reservas from "./componentes/PreguntasFrecuentes/Reservas";
import Checkout from "./pages/Checkout/Checkout";
import { ReseñaProperty } from "./componentes/ClientInterface/reseñaProperty/ReseñaProperty";
import AssignProperty from "./pages/AssignProperty";
import Payment from "./pages/Payment";

function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/property/:id" element={<PropertyDetails />} />
        <Route path="/register" element={<RegisterClient />} />
        <Route path="/viewClient" element={<ClientInterface />} />
        <Route path="/viewAdmin" element={<ViewAdmin />} />
        <Route path="/viewAgent" element={<ViewAgent />} />
        <Route path="/registerAdmin" element={<FormAdmin />} />
        <Route path="/registerAgent" element={<FormAgent />} />
        <Route path="/login" element={<LoginBeta />} />
        <Route path="/agents/:id" element={<AgentDetail />} />
        <Route path="/create-property" element={<CreatePropertyForm />} />
        <Route path="/quienes" element={<QuienesSomos />} />
        <Route path="/preguntasFrecuentes" element={<Generales />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/checkout/:id" element={<Checkout />} />
        <Route path="/preguntasFrecuentes" element={<Generales />} />
        <Route path="/reservas" element={<Reservas />} />
        <Route path="/reseProperty" element={<ReseñaProperty />} />
        <Route path="/preguntasFrecuentes" element={<Generales />} />
        <Route
          path="/assignproperty/:clientID/:propertyID/:agentID"
          element={<AssignProperty />}
        />
        <Route path="/payment" element={<Payment />} />
        <Route path="/reservas" element={<Reservas />} />
      </Routes>
      <Toaster position="top-center" reverseOrder={false} />
      <ToastContainer />
    </>
  );
}

export default App;
