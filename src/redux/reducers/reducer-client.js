const initialState = {
  client: [],
  clientWithToken: {},
};

const clients = (state = initialState, action) => {
  switch (action.type) {
    case "GET_CLIENT_ID":
      return {
        ...state,
        client: action.payload,
      };

    case "GET_CLIENT_WITH_TOKEN":
      return {
        ...state,
        clientWithToken: action.payload,
      };
    default:
      return state;
  }
};

export default clients;
