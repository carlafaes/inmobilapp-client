import {GET_SCORE,ORDER_SCORE} from './constants'
import axios from 'axios';

export function getScore(){
    return async (dispatch)=>{
        let infoSc= await axios.get('http://localhost:3001/api/reviews');
        let inf= await infoSc.data;
        console.log(inf,'inf de getScore')
        return dispatch({
            type:GET_SCORE,
            payload:inf
        })
    }
}

export function orderByScore(value){
    return{
        type:ORDER_SCORE,
        payload:value
    }
}