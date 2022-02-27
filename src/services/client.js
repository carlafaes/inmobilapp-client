import axios from "axios";

<<<<<<< HEAD
export const updateInfo = async (infoToUpdate, token) => {
  const URL = "/api/clients";
=======
const updateInfo = async (infoToUpdate, clientID, token) => {
  const URL = `/api/clients/${clientID}`;
>>>>>>> 7daaddceeecf3faaf1db014a69f16a00ec5d254d
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await axios.put(URL, infoToUpdate, config);
    alert("Information updated");
    return response.data;
  } catch (error) {
    alert(error.message);
  }
};

<<<<<<< HEAD
export const getClientInfo = async (clientID) => {
  const URL = `/api/clients/${clientID}`;
  try {
    const response = await axios.get(URL);
    return response.data;
  } catch (error) {
    alert(error);
  }
};

const clientService = {
  getClientInfo,
  updateInfo,
};

export default clientService;
=======
const getclientInfo=async (clientID,token)=>{
  const URL=`/api/clients/${clientID}`;
  const config={
    headers: {
      Authorization:`Bearer ${token}`
    }
  };
  try{
    const response=await axios.get(URL,config);
    return response.data
  }catch(error){
    console.log(error);
  }
}
const services={
  updateInfo,
  getclientInfo
}
export default services;
>>>>>>> 7daaddceeecf3faaf1db014a69f16a00ec5d254d
