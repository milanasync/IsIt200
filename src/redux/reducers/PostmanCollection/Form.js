const INITIAL_STATE = {
  isLoading: true,
  list: [],
  selected: {},
  lastUpdatedAt: new Date(),
};

export default PostmanCollectionFormReducers = (
  state = INITIAL_STATE,
  action,
) => {
  let currentState = state;
  let payload = action.payload;

  switch (action.type) {
    case 'FETCH_PostmanCollectionForm':
      // write logic here
      return currentState;
    case 'LIST_PostmanCollectionForm':
      // write logic here
      currentState.list = payload;
      return currentState;
    case 'CREATE_PostmanCollectionForm':
      currentState.selected = payload;
      return currentState;
    case 'UPDATE_PostmanCollectionForm':
      // write logic here
      return currentState;
    case 'DELETE_PostmanCollectionForm':
      // write logic here
      return currentState;
    default:
      return currentState;
  }
};
