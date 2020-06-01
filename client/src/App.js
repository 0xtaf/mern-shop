import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar';
import ShoppingList from './components/ShoppingList';

import ItemModal from './components/ItemModal';
import { Container } from 'reactstrap';
import ItemContextProvider from './contexts/ItemContext';

function App() {
  return (
    <ItemContextProvider>
      <NavBar />
      <Container>
        <ItemModal />
        <ShoppingList />
      </Container>
    </ItemContextProvider>
  );
}

export default App;
