const INITIAL_STATE = {
  app: {},
};

export default appReducers = (state = INITIAL_STATE, action) => {
  let currentState = state;

  switch (action.type) {
    case 'SET_APP': {
      currentState.app = action.payload;
      return currentState;
    }
    default:
      return state;
  }
};
