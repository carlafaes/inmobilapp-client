import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { useEffect } from 'react';
import { getScore,orderByScore } from '../redux/actions/action-properties-score';
import reviewsService from '../services/reviews';
import {filterRevies,getAllReviews,getScoreReviews} from '../redux/actions/actions-reviews'

export default function ScoreMax(){
    const dispatch= useDispatch();
    const reviews = useSelector((state) => state.reviews.propertiesScore);
  

    
  useEffect(() => {
    reviewsService.getPropertiesReviews().then((data) => {
      return dispatch(getAllReviews(data));
    }).then(() => {
      return dispatch(filterRevies())
    }).then(() => {
      dispatch(getScoreReviews());
    });
  }, []);

  console.log(reviews);
  
    // const stateScoreMax= useSelector((state)=>state.filteredScore);
    

    // useEffect(()=>{
    //   dispatch(getScore()) 

    // },[]);

    // useEffect(()=>{
    //     // if(stateScoreMax){
    //     //     dispatch(orderByScore(stateScoreMax))
    //     // }
    //     dispatch(orderByScore())
    // },[])
    
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