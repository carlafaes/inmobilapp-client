import React,{ useEffect, useState } from "react";
import agentServices from "../../services/agent";
import { useParams } from "react-router-dom";
import Loading from "../Loading";




export default function AgentDetails() {
    const { id } = useParams();
    const [agent, setAgent] = useState({})
    useEffect(async () => {
        const request = await agentServices.getAgentDetails(id)
        console.log(request);
        setAgent(request);
    },[]);
    return agent.id? (
        <div>
            <h2>{agent.name}</h2>
            <div>
                <p><span>Phone: </span> {agent.phone}</p>
                <p><span>Address: </span> {agent.address}</p>
                <p><span>DNI: </span>{agent.dni}</p>
                <p><span>Age: </span>{agent.age}</p>
            </div>
            <div>
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