import React from "react";
import styles from "./FormImages.module.css"



export default function FormImages({image}) {
    return (
        <div className={styles.image_container}>
            <img className={styles.image} src={image}/>
        </div>    
    )
}