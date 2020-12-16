import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter((c) => c.id !== action.payload),
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: 'Subash Penneru',
        email: 'subashpenneru@gmail.com',
        phone: '709-569-2523',
      },
      {
        id: 2,
        name: 'John Doe',
        email: 'john@gmail.com',
        phone: '555-555-5555',
      },
      {
        id: 3,
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
