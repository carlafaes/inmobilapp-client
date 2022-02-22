import React, {useEffect, useState} from "react"
import agentServices from "../../services/agent"
import { Link } from "react-router-dom";
import Loading from "../Loading";


export default function AgentsList() {
    const [agents, setAgents] = useState([]);
    useEffect(async ()=>{
        const request = await agentServices.getAll();
        setAgents(request);
    },[]);
    return agents.length? (
        <div>
            {agents.map((a,i) => {
                return (
                    <Link key={i} to={`/agents/${a.id}`}>    
                        <div>
                            <h2><span>Name:</span> {a.name}</h2>
                            <p><span>Phone:</span> {a.phone}</p>
                            <p><span>Age:</span> {a.age}</p>
                        </div>
                    </Link>
                )
            })}
        </div>
    ):<Loading/>
}