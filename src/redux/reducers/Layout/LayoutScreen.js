const INITIAL_STATE = {
  isLoading: true,
  list: [],
  selected: {},
  lastUpdatedAt: new Date(),
};
  
export default LayoutLayoutScreenReducers = (state = INITIAL_STATE, action) => {
  let currentState = state;
  let payload = action.payload;

  switch (action.type) {
    case 'FETCH_LayoutLayoutScreen':
        // write logic here
        return currentState;      
    case 'LIST_LayoutLayoutScreen':
      // write logic here
      currentState.list = payload;
      return currentState;
    case 'CREATE_LayoutLayoutScreen':
      // write logic here
      return currentState;
    case 'UPDATE_LayoutLayoutScreen':
      // write logic here
      return currentState;
    case 'DELETE_LayoutLayoutScreen':
      // write logic here
      return currentState;
    default:
      return currentState;
  }
};
