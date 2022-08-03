const intialState = {
  filters: [],
  products: [],
  tags: [],
  loggedin: false,
  user: null,
  users: [],
};

function reducer(state = intialState, action) {
  console.log('reducer', action);
  switch (action.type) {
    case 'getAllFilters':
      return { ...state, filters: action.payload };
    case 'getAllTags':
      return { ...state, tags: action.payload };
    case 'getAllProducts':
      return { ...state, products: action.payload };
    case 'getAllUsers':
      return { ...state, users: action.payload };

    default:
      return state;
  }
}

export default reducer;
