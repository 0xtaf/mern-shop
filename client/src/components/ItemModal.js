import React, { useContext, useState } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
import { ItemContext } from '../contexts/ItemContext';
import axios from 'axios';

const ItemModal = () => {
  const { dispatch } = useContext(ItemContext);
  
  const [modal, setModal] = useState(false);
  const [name, setName] = useState({name: ''});

  const toggle = () => {
    setModal(!modal);
  };

  const onChange = (e) => {
    setName({name: e.target.value});
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    dispatch({type: 'ADD_ITEM', payload: name})
    axios.get('api/items').then((res) => {
      dispatch({type:'GET_ITEMS', payload: res.data})
    });
    toggle();
  };

  return (
    <div>
      <Button onClick={toggle}>Add Item</Button>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add To Shopping List</ModalHeader>
        <ModalBody>
          <Form onSubmit={(e) => onSubmit(e)}>
            <FormGroup>
              <Label for="item">Item</Label>
              <Input
                type="text"
                name="name"
                id="item"
                placeholder="asdasdasd"
                onChange={onChange}
              />
              <Button block>OK</Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ItemModal;
