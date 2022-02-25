import React from "react";
import errorNF from '../Img/gif/piffle-error.gif'
import '../styles/PageNotFound.css'

export default function PageNotFound() {
  return (
     <>      
      <div className="contenedor_nf">
      <img className="gif_nf" src={errorNF} alt="NF" />
      <h1 className="title_nt">PAGE NOT FOUND</h1>
      </div>
    </>
  );
}
