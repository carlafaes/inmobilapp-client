import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import { useParams } from "react-router-dom";
import getProperty from "../../redux/actions/actions";


import styles from "./PropertyDetails.module.css"

const slideData = [
{
    image: 'https://images.unsplash.com/photo-1645091751802-547f311002bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
},
{
    image: 'https://images.unsplash.com/photo-1645090531845-ed3d634c5d87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
},
{
    image: 'https://images.unsplash.com/photo-1645091246457-db3ae1e426d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80'
},
{
    image:'https://images.unsplash.com/photo-1645089657907-02c0c9319394?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
}
]

function onClickHandler(e){
    e.preventDefault()
    console.log(e.target.value)
    imageIndex = e.target.value
}
let imageIndex = 0
export default function PropertyDetails() {
    const {id} = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProperty(id))
    },[])
    const response = useSelector((state) => state.property);
    console.log(response);
    const property = response
    if(!Array.isArray(slideData) || slideData.length <= 0) {
        return null
    }
    return (
        <div className={styles.main_container}>
            <div className={styles.container}>
                <section className={styles.slider}>
                    {/* {slideData.map((slide, index) => {
                    return (
                        <img key={index} src={slide.image} alt="Images" className={styles.image} />
                    )
                    })} */}
                    <img src={slideData[imageIndex].image} alt="" />
                    {slideData.map((p, i) => <button key={i} type="button" value={i} onClick={onClickHandler}>{i+1}</button>)}
                </section>
                <section className={styles.details_container}>
                    <h2>{property.ubication.adress}</h2>
                    <h3>{property.ubication.city}, {property.ubication.neighborhood}</h3>
                    <h2>Details</h2>
                    <div className={styles.details}>
                        <p><span>Surface: </span>{property.details.area}</p>
                        <p><span>Rooms: </span>{property.details.rooms}</p>
                        <p><span>Baths: </span>{property.details.baths}</p>
                        <p><span>Garage: </span>{property.details.garage?(<span>Yes</span>):(<span>No</span>)}</p>
                        <button>Mas Información</button>
                    </div>
                </section>

            </div>



        </div>
    )
}