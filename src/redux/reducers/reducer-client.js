const initialState = {
  credentials:null
};

const clients = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_CLIENT':
      return{
        ...state,
        credentials:action.payload
      }
    
    default: return state;
  }
};

export default clients;
