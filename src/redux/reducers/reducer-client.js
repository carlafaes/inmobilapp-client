const initialState = {
  client: null,
  userId:[]
  
};

const clients = (state = initialState, action) => {
  switch (action.type) {
    case "GET_CLIENT_ID":
      return {
        ...state,
        client: action.payload,
      };
      case 'CLEAN_ACTIVE_USER':
      return{ 
        ...state,
        client:null
      }
    case 'CLIENT_BY_ID':
      return{
        ...state,
        userId: action.payload
      }
    default:
      return state;
  }
};

export default clients;
