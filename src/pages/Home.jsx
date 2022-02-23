import React, { useEffect, useState } from "react";
import propertyService from "../services/property";
import Landing from "../componentes/Landingprueba";
import Navbar from "../componentes/Navbar";
import "../styles/Loading.css";
import Load from "../Img/LOAD5gif.gif";
import "../styles/Loading.css";
import Footer from "../componentes/Footer";
import NavFilterProperty from "../componentes/Nav-filter";
import ReactPaginate from "react-paginate";
import "../styles/Pagination.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import { Switch } from "@material-ui/core";
import { ListCard } from "../componentes/ListCard";
import FilterProperties from "../componentes/FilterProperties";
import { setAllProperties } from "../redux/actions/actionsProperties";

function Home() {
  const properties = useSelector(
    (state) => state.reducerProperties.filteredProperties
  );
  const dispatch = useDispatch();
  const [darkMode, setDarkMode] = useState(false);

  const [pageNumber, setPageNumber] = useState(1);

  const dwellingPerPage = 5;
  const pagesVisited = pageNumber * dwellingPerPage;
  const pageCount = Math.ceil(properties.length / dwellingPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  useEffect(() => {
    propertyService.getAll().then((data) => {
      dispatch(setAllProperties(data));
    });
  }, []);

  if (!properties) {
    return (
      <div className="loading_style">
        <div className="contenedor_home">
          <img className="home_load" src={Load} />
        </div>
      </div>
    );
  }

  const theme = createTheme({
    palette: {
      type: darkMode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div>
        <div>
          <Landing />
        </div>
        <div>
          <Navbar />
          <NavFilterProperty />
          <FilterProperties />
          <h2>
            🔆
            <Switch
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
              color="primary"
            />{" "}
            🌙
          </h2>
        </div>
        <ListCard
          properties={properties.slice(
            pagesVisited,
            pagesVisited + dwellingPerPage
          )}
        />
        <div style={{ padding: "20px 20px" }}>
          <ReactPaginate
            previousLabel={"⋘"}
            nextLabel={"⋙"}
            breakLabel={"..."}
            pageCount={pageCount} //cantidad de paginas total
            marginPagesDisplayed={2} //num de paginas que se muestran antes y despues del breakLabel
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBttn"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
          />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default Home;
