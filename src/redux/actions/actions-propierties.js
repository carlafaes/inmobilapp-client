import axios from 'axios';

import {
  LOAD_ALL_PROPERTIES,
  FILTER_PROPERTIES,
  POST_PROPERTIE
} from './types-propierties'

export const loadAllProperties=(payload)=>{
  return{
    type:LOAD_ALL_PROPERTIES,
    payload
  }
}

export const filterProperties=(payload, filter)=>{
  return {
    type:FILTER_PROPERTIES,
    payload,
    filter
  }
}

export const postProperties = (payload) =>{
  try {
    return async function(dispatch){
        const resp = await axios.post('http://localhost:3001/api/properties',payload);
        console.log(resp)
        return resp
    }
  } catch (e) {
    console.log(e)
  }
}