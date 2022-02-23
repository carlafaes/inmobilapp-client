const initialState = {
  client:[]
};

const clients = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CLIENT_ID':
      return{
        ...state,
        client:action.payload
      }
    
    default: return state;
  }
};

export default clients;
