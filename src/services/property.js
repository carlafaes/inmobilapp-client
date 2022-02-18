import axios from 'axios';

const baseUrl = '/api/properties';

const getAll = async () => (await axios.get(baseUrl)).data;

const postProperty = (payload) =>{
    return async function(dispatch){
        const resp = await axios.post('http://localhost:3001/api/properties',payload);
        console.log(resp)
        return resp
    }
}

const propertyService = {
  getAll,
  postProperty
};

export default propertyService;