const INITIAL_STATE = {
  isLoading: true,
  list: [],
  selected: {},
  lastUpdatedAt: new Date(),
};
  
export default DashboardScreenReducers = (state = INITIAL_STATE, action) => {
  let currentState = state;
  let payload = action.payload;

  switch (action.type) {
    case 'FETCH_DashboardScreen':
        // write logic here
        return currentState;      
    case 'LIST_DashboardScreen':
      // write logic here
      currentState.list = payload;
      return currentState;
    case 'CREATE_DashboardScreen':
      // write logic here
      return currentState;
    case 'UPDATE_DashboardScreen':
      // write logic here
      return currentState;
    case 'DELETE_DashboardScreen':
      // write logic here
      return currentState;
    default:
      return currentState;
  }
};
