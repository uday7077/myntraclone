import axios from 'axios';

export const fetchProducts = () => async dispatch => {
  const { data } = await axios.get('https://dummyjson.com/products?limit=100');
  dispatch({ type: 'SET_PRODUCTS', payload: data.products });
};

export const fetchProductById = (id) => async dispatch => {
  const { data } = await axios.get(`https://dummyjson.com/products/${id}`);
  dispatch({ type: 'SET_SELECTED_PRODUCT', payload: data });
};
export const fetchCategories = () => async dispatch => {
  const { data } = await axios.get('https://dummyjson.com/products/categories');
  dispatch({ type: 'SET_CATEGORIES', payload: data });
};

export const fetchProductsByCategory = (category) => async dispatch => {
  const { data } = await axios.get(`https://dummyjson.com/products/category/${category}`);
  dispatch({ type: 'SET_PRODUCTS', payload: data.products });
};

