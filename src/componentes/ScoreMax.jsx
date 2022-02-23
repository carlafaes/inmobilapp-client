import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { useEffect } from 'react';
import { getScore,orderByScore } from '../redux/actions/action-properties-score';
import reviewsService from '../services/reviews';
import {filterRevies,getAllReviews,getScoreReviews} from '../redux/actions/actions-reviews'
import { isValidURL } from "../utils/validurl";
import '../styles/Score.css'
import Carousel from 'react-elastic-carousel'

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
  
  reviews.forEach((review) => {
    review.images.forEach((img) => {
      console.log(isValidURL(img), img);
    });
  });

  const breakPoints=[
    {width:100,itemsToShow:1},
    {width:500,itemsToShow:2},
    {width:1200,itemsToShow:3},
    {width:1500,itemsToShow:5}
  ]
    
    return(
        <div>
          <Carousel breakPoints={breakPoints}>
            {reviews.length !== 0 ? reviews.map((e,index)=>(
                <div className='container_score' key={Math.random(index)}>
                    <h1>{e.location.city}-{e.location.neighborhood}</h1>
                    <h2>{e.score}</h2>
                    <h3>{e.state}</h3>
                    <a><img className='img_score' src={e.images.filter(e=>e)}/></a>

                </div>
                
            )) : <h1>no existen mejores puntuados</h1>} 
          </Carousel>
        </div>
    )
}