import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { useEffect } from 'react';
import { getScore,orderByScore } from '../redux/actions/action-properties-score';

export default function ScoreMax(){
    const dispatch= useDispatch();
    const stateScoreMax= useSelector((state)=>state.filteredScore);
    

    useEffect(()=>{
      dispatch(getScore()) 

    },[]);

    useEffect(()=>{
        // if(stateScoreMax){
        //     dispatch(orderByScore(stateScoreMax))
        // }
        dispatch(orderByScore())
    },[])
    console.log(stateScoreMax,'stateScoreMax')
    return(
        <div>
            <h1>score</h1>
            {/* {stateScoreMax && stateScoreMax.map((e,index)=>(
                <div key={Math.random(index)}>
                    <h1>{e.content}</h1>

                </div>
                
            ))}  */}
        
        </div>
    )
}