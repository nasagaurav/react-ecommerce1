import axios from 'axios';

export const userExists = (users, formData) => {
  return users.some(
    (x) => x.email === formData.email && x.password === formData.password
  );
};
export const userDetails = (users, formData) => {
  if (userExists(users, formData)) {
    return users.find(
      (x) => x.email === formData.email && x.password === formData.password
    );
  } else {
    return null;
  }
};

export const setStorage = (key, value) => {
  localStorage.setItem(key, value);
  // localStorage.setItem("x",100);
  // setStorage("x",100)
};
export const getStorage = (key) => {
  // getStorage("x")
  return localStorage.getItem(key) || '';
};

function img(id) {
  return `https://photospheric-damage.000webhostapp.com/a (${id}).jpg`;
}

export const getAllProducts = async () => {
  let data = await axios
    .get('https://l-ecommerce-default-rtdb.firebaseio.com/products.json')
    .then((res) => res.data)
    .then((d) => d.map((x) => ({ ...x, image: img(x.id) })))
    .catch((e) => []);

  return data;
};
export const getAllTags = async () => {
  let data = await axios
    .get('https://l-ecommerce-default-rtdb.firebaseio.com/tags.json')
    .then((res) => res.data)
    .catch((e) => []);

  return data;
};
export const getAllFilters = async () => {
  let data = await axios
    .get('https://l-ecommerce-default-rtdb.firebaseio.com/filters.json')
    .then((res) => res.data)
    .catch((e) => []);

  return data;
};
export const getAllUsers = async () => {
  let data = await axios
    .get('https://l-ecommerce-default-rtdb.firebaseio.com/users.json')
    .then((res) => res.data)
    .catch((e) => []);

  return data;
};
