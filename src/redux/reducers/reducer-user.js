const initialState = {
  users: [],
};

const reducerUsers = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER_WITH_TOKEN":
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};

export default reducerUsers;
