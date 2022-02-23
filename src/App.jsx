import React from "react";
import { Routes, Route } from "react-router-dom";
import PropertyDetails from "./pages/PropertyDetails/PropertyDetails";
import { LoginClient } from "./componentes/LoginClient";
import { RegisterClient } from "./componentes/RegisterClient";
import Home from "./pages/Home";
import CreateProperty from "./componentes/CreateProperty";
import FormAdmin from "./pages/FormAdmin";
import PageNotFound from "./pages/PageNotFound";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
    <Routes>
      {/* <Route path="/" element={<Landing />} /> */}
      <Route exact path="/" element={<Home />} />
      <Route exact path="/form" element={<CreateProperty />} />
      <Route path="/registerAdmin" element={<FormAdmin />} />
      <Route path="/login" element={<LoginClient />} />
      <Route path="/register" element={<RegisterClient />} />
      <Route exact path="/property/:id" element={<PropertyDetails />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
    <ToastContainer/>
    </>
  );
}

export default App;
