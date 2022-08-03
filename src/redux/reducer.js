import { getStorage } from '../services';
let loggedin = false;
let user = null;
if (getStorage('uid')) {
  loggedin = true;
  user = {
    uid: getStorage('uid'),
    name: getStorage('name'),
    email: getStorage('email'),
    phone: getStorage('phone'),
    password: getStorage('password'),
  };
}

const intialState = {
  filters: [],
  products: [],
  tags: [],
  loggedin: loggedin,
  user: user,
  users: [],
};

function reducer(state = intialState, action) {
  console.log(action.type, action);
  switch (action.type) {
    case 'getAllFilters':
      return { ...state, filters: action.payload };
    case 'getAllTags':
      return { ...state, tags: action.payload };
    case 'getAllProducts':
      return { ...state, products: action.payload };
    case 'getAllUsers':
      return { ...state, users: action.payload };
    case 'logout':
      return { ...state, user: null, loggedin: false };
    case 'login':
      return { ...state, user: action.payload, loggedin: true };

    default:
      return state;
  }
}

export default reducer;
