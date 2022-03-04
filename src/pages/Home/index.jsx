import React, { useEffect, useState } from "react";
import propertyService from "../../services/property";
import Landing from "../../componentes/Landingprueba";
import Navbar from "../../componentes/Navbar";
import Loading from "../../componentes/Loading";
import Footer from "../../componentes/Footer";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import ScoreMax from "../../componentes/ScoreMax";
import { ListCard } from "../../componentes/ListCard";
import FilterProperties from "../../componentes/FilterProperties";
import { setAllProperties } from "../../redux/actions/actionsProperties";
import { paginate } from "../../utils/paginate";
import styled from "./Home.module.css";
import Mail from '../../componentes/Newsletter/Mail'

function Home() {
  const properties = useSelector(
    (state) => state.reducerProperties.filteredProperties
  );
  const dispatch = useDispatch();
  const [pageNumber, setPageNumber] = useState(0);

  const nextPage = () => {
    setPageNumber(pageNumber + 1);
  };
  const previusPage = () => {
    setPageNumber(pageNumber - 1);
  };

  const propertiesPerPage = 5;

  useEffect(() => {
    propertyService.getAll().then((data) => {
      dispatch(setAllProperties(data));
    });
  }, []);

  if (!properties) {
    <Loading />;
  }

  return (
    <div>
       <Mail/> 
      <div>
        <Landing />
      </div>
      <div>
        <Navbar />
        <ScoreMax />
        <FilterProperties />
      </div>
      <div className={styled.containerPaginate}>
        <button onClick={previusPage} className={styled.buttonPaginate}>
          Anterior
        </button>
        <button onClick={nextPage} className={styled.buttonPaginate}>
          Siguiente
        </button>
      </div>
      <ListCard
        properties={paginate(properties, pageNumber, propertiesPerPage)}
      />
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
