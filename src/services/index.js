import axios from 'axios';

export const getAllProducts = async () => {
  let data = await axios
    .get('https://l-ecommerce-default-rtdb.firebaseio.com/products.json')
    .then((res) => res.data)
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
