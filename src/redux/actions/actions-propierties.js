import {
  LOAD_ALL_PROPERTIES,
  FILTER_PROPERTIES
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