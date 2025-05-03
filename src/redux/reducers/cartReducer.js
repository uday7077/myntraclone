const initialState = { items: [] };
export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return { ...state, items: [...state.items, action.payload] };
    case 'REMOVE_FROM_CART':
      return { ...state, items: state.items.filter(p => p.id !== action.payload) };
    default:
      return state;
  }
}