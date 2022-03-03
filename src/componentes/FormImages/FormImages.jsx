import React from "react";
import styles from "./FormImages.module.css"



export default function FormImages({image, onClose,index}) {
    return (
        <div onClick={onClose} className={styles.image_container}>
            <img className={styles.image} id={index} src={image}/>
                
        </div>
    )
}