import React,{ useEffect, useState } from "react";
import agentServices from "../../services/agent";
import { useParams } from "react-router-dom";
import Loading from "../Loading";
import styles from "./AgentDetails.module.css"




export default function AgentDetails() {
    const { id } = useParams();
    const [agent, setAgent] = useState({})
    useEffect(async () => {
        const request = await agentServices.getAgentID(id)
        console.log(request);
        setAgent(request);
    },[]);
    return agent.id? (
        <div className={styles.container}>
            <h2 className={styles.name}>{agent.name}</h2>
            <div className={styles.info_container}>
                <p><span>Phone: </span> {agent.phone}</p>
                <p><span>Address: </span> {agent.address}</p>
                <p><span>DNI: </span>{agent.dni}</p>
                <p><span>Age: </span>{agent.age}</p>
            </div>
            <div className={styles.properties_container}>
                <p>Properties:</p>
                {agent.properties.map((p,i) => {
                    return(
                        <p key={i} >{p.location.city}</p>
                    )
                })}
            </div>
        </div>
    ):<Loading/>
}