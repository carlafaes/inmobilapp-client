import React from "react";
import { MdExpandMore } from "react-icons/md";
import { Link as Scroll } from "react-scroll";
import Logo from "../../Img/inmobilapp-logo-landing.png";
import styled from "./Landing.module.css";

export default function Landing() {
  return (
    <div className={styled.container}>
      <div className={styled.content}>
        <img
          src={Logo}
          alt="Logo Inmobil App"
          style={{ transform: "scale(0.6)" }}
        />
        <Scroll to="navbar" smooth>
          <button className={styled.button}>
            <MdExpandMore className={styled.arrow} />
          </button>
        </Scroll>
      </div>
    </div>
  );
}
