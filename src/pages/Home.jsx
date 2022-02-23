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
import { loadAllProperties } from "../redux/actions/actions-propierties";
import { Switch } from "@material-ui/core";
import { Link } from "react-router-dom";
import {getScore,orderByScore} from '../redux/actions/action-properties-score'
import ScoreMax from '../componentes/ScoreMax'
import {ListCard} from "../componentes/ListCard";


function Home() {
  const properties = useSelector((state) => state.properties);
  const dispatch = useDispatch();
  const [darkMode, setDarkMode] = useState(false);

  const [pageNumber, setPageNumber] = useState(1);

  

	const dwellingPerPage= 5;
	const pagesVisited= pageNumber * dwellingPerPage;
	const pageCount= Math.ceil(properties.length / dwellingPerPage);
	const changePage = ({selected})=>{
		setPageNumber(selected)
	}
	console.log(properties);

	
	useEffect(() => {
		
		propertyService.getAll().then((result) => {
			dispatch(loadAllProperties(result))
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
          <h2>
            🔆
            <Switch
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
              color="primary"
            />{" "}
            🌙
          </h2>
		  <ScoreMax/>
        </div>
        <ListCard
          properties={properties.slice(
            pagesVisited,
            pagesVisited + dwellingPerPage
            )}
           />
	
			<div>
				<ReactPaginate
				previousLabel={'⋘'}
				nextLabel={'⋙'}
				breakLabel={'...'}
				pageCount={pageCount} //cantidad de paginas total
				marginPagesDisplayed={2}//num de paginas que se muestran antes y despues del breakLabel
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
