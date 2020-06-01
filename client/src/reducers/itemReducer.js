import axios from 'axios';
export const itemReducer = (state, action) => {
  switch (action.type) {
    case 'GET_ITEMS':
      return action.payload;

    case 'ADD_ITEM':
      axios.post('/api/items', action.payload);
      
    case 'DELETE_ITEM':
      axios.delete(`/api/items/` + action.id);
      
    default:
      return state;
  }
};
