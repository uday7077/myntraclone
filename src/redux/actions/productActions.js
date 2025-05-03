import axios from 'axios';
export const fetchProducts = () => async dispatch => {
  const { data } = await axios.get('https://fakestoreapi.com/products');
  dispatch({ type: 'SET_PRODUCTS', payload: data });
};