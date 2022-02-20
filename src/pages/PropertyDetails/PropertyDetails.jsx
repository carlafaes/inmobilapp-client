import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


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

let imageIndex = 0
export default function PropertyDetails() {
    const [property, setProperty] = useState([]);
    const [image, setImage] = useState(slideData[0])
    const {id} = useParams();
    let previousButton = null

    useEffect(() => {
        const request = axios.get(`http://localhost:3001/api/properties/${id}`)
        request.then(data => {
            setProperty(data.data)
        })
        .catch(err => {
            console.log(err)
        });
    },[])

    function onClickHandler(e){
        e.preventDefault();
        if(!previousButton) {
            previousButton = e.target;
        }
        previousButton.className = ''
        previousButton = e.target
        console.log('pppp',previousButton.className, previousButton.value)
        console.log(e.target)
        imageIndex = e.target.value
        e.target.className = styles.active
        setImage(slideData[imageIndex])
    
    }

    return property !== undefined? (
        <div className={styles.main_container}>
            {console.log(property)}
            <div className={styles.container}>
                <section className={styles.slider_container}>
                    <img className={styles.image} src={image.image} alt="property-images" />
                    <div className={styles.buttons}>
                        {slideData.map((p, i) => <button className='' key={i} type="button" value={i} onClick={onClickHandler}></button>)}
                    </div>
                </section>
                <section className={styles.details_container}>
                    <div className={styles.details}>
                        <h2 className={styles.details_title}>Details</h2>
                        <h2>{property.location.address}</h2>
                        <h3>{property.location.city}, {property.location.neighborhood}</h3>
                        <p><span>Surface: </span>{property.details.area}</p>
                        <p><span>Rooms: </span>{property.details.rooms}</p>
                        <p><span>Baths: </span>{property.details.baths}</p>
                        <p><span>Garage: </span>{property.details.garage?(<span>Yes</span>):(<span>No</span>)}</p>
                    </div>
                    <div className={styles.agent_info_container}>
                        <h3>Agent info</h3>
                        <div className={styles.agent_info}>
                            <p><span>Name: </span>{property.agentID.name}</p>
                            <p><span>Phone: </span>{property.agentID.phone}</p>
                        </div>
                    </div>
                </section>

            </div>



        </div>
    ):(<div>
        {console.log(property)}
        Empty
    </div>)
}