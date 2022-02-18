const initialState = {
  openModal:false
};

const clients = (state = initialState, action) => {
  switch (action.type) {
    case 'OPEN_MENU_MODAL':
      return{
        ...state,
        openModal: true
      }
    default: return state;
  }
};

export default clients;
