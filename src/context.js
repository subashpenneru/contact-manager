import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter((c) => c.id !== action.payload),
      };
    case 'ADD_CONTACT':
      const contact = {
        ...action.payload,
        id: uuid(),
      };

      return {
        ...state,
        contacts: [contact, ...state.contacts],
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: uuid(),
        name: 'Subash Penneru',
        email: 'subashpenneru@gmail.com',
        phone: '709-569-2523',
      },
      {
        id: uuid(),
        name: 'John Doe',
        email: 'john@gmail.com',
        phone: '555-555-5555',
      },
      {
        id: uuid(),
        name: 'Max Millian',
        email: 'max@gmail.com',
        phone: '970-470-9509',
      },
    ],
    dispatch: (action) => this.setState((state) => reducer(state, action)),
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
