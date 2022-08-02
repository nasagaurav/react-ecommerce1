const intialState = {};

function reducer(state = intialState, action) {
  console.log('reducer', action);
  switch (action.type) {
    default:
      return state;
  }
}

export default reducer;
