import {GET_SCORE,ORDER_SCORE} from './constants'
import axios from 'axios';

export function getScore(){
    return async (dispatch)=>{
        let infoSc= await axios.get('/api/reviews?detailsProperty=true');
        let inf=  infoSc.data;
        console.log(inf,'inf de getScore')
        return dispatch({
            type:GET_SCORE,
            payload:inf
        })
    }
}

export function orderByScore(value){
    console.log(value,'payload')
    return{
        type:ORDER_SCORE,
        payload:value,
    }
}