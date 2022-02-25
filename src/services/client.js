import axios from "axios";

const updateInfo = async (infoToUpdate, clientID, token) => {
  const URL = `http://localhost:3001/api/clients/${clientID}`;
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

const getclientInfo=async (clientID,token)=>{
  const URL=`http://localhost:3001/api/clients/${clientID}`;
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
