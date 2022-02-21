import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { useEffect } from 'react';
import { getScore,orderByScore } from '../redux/actions/action-properties-score';

export default function ScoreMax(){
    const dispatch= useDispatch();
    const stateScore= useSelector((state)=>state.filteredScore);
    

    useEffect(()=>{
        //  dispatch(getScore())
        dispatch(orderByScore())
        
    },[]);
    console.log(stateScore,'stateScore')
    return(
        <div>
            <h1>score</h1>
            {/* {stateScore && stateScore.map((e)=>(

                <h1>{e.user}</h1>
            ))} */}
        
        </div>
    )
}