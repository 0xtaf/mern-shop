import React, { useContext, useEffect } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { ItemContext } from '../contexts/ItemContext';
import axios from 'axios';

const ShoppingList = () => {
  const { items, dispatch } = useContext(ItemContext);

  const onDeleteClick = (id) => {
    dispatch({type: 'DELETE_ITEM', id: id})
    axios.get('api/items').then((res) => {
      dispatch({type:'GET_ITEMS', payload: res.data})
    });
  }

  return (
    <Container>
      <ListGroup>
        <TransitionGroup className="shopping-list">
          {items ? (
            items.map(({ _id, name }) => (
              <CSSTransition key={_id} timeout={500} classNames="fade">
                <ListGroupItem>
                  <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={() => onDeleteClick(_id)}
                  >
                    &times;
                  </Button>

                  {name}
                </ListGroupItem>
              </CSSTransition>
            ))
          ) : (
            <div>Loading...</div>
          )}
        </TransitionGroup>
      </ListGroup>
    </Container>
  );
};

export default ShoppingList;
