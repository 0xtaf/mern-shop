import React, { createContext, useReducer, useEffect } from 'react';
import { itemReducer } from '../reducers/itemReducer';
import axios from 'axios';

export const ItemContext = createContext();

const ItemContextProvider = (props) => {
  const [items, dispatch] = useReducer(itemReducer, []);

  useEffect(() => {
    async function getData() {
      try {
        axios.get('api/items').then((res) => {
          dispatch({type:'GET_ITEMS', payload: res.data})
        });
      } catch (error) {}
    }
    getData();
  }, []);

  

  return (
    <ItemContext.Provider value={{ items, dispatch }}>
      {props.children}
    </ItemContext.Provider>
  );
};

export default ItemContextProvider;
