import { SET_AGENT } from "../actions/actions-agent";

const initialState = {
  agent: null,
};

const reducerAgent = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_AGENT:
      return {
        ...state,
        agent: payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducerAgent;
