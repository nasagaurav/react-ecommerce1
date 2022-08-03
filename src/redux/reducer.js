const intialState = {
  filters: [],
  products: [],
  tags: [],
  loggedin: false,
  user: null,
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
    default:
      return state;
  }
}

export default reducer;
