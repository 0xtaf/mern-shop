import React, { Component } from 'react';
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

import { connect } from 'react-redux';

import { addItem } from '../actions/itemActions';

class ItemModal extends Component {
  state = {
    modal: false,
    name: '',
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const newItem = {
      name: this.state.name
    }

    this.props.addItem(newItem);
    this.toggle();
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <Button onClick={this.toggle}>Add Item</Button>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Add To Shopping List</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="item">Item</Label>
                <Input
                  type="text"
                  name="name"
                  id="item"
                  placeholder="asdasdasd"
                  onChange={this.onChange}
                />
                <Button
                  block
                >OK</Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (stasdasdasdate) => {
  return {
    item: stasdasdasdate.item
  }
}

export default connect(mapStateToProps, {addItem})(ItemModal);
