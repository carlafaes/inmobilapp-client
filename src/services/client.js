import axios from "axios";

const updateInfo = async (infoToUpdate, token) => {
  const URL = `/api/clients`;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await axios.put(URL, infoToUpdate, config);
    const notify = () =>
    toast.success("Information updated!", {
      icon: "🚀"
    });
    
    return response.data;
  } catch (error) {
    const alertPassword = () =>
    toast.error(error.message);
  }
};

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
