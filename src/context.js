import React, { Component } from 'react';

import axios from './api';

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
      };

      return {
        ...state,
        contacts: [contact, ...state.contacts],
      };
    case 'UPDATE_CONTACT':
      const { id } = action.payload;

      return {
        ...state,
        contacts: state.contacts.map((c) => (c.id === id ? action.payload : c)),
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [],
    dispatch: (action) => this.setState((state) => reducer(state, action)),
  };

  async componentDidMount() {
    const { data } = await axios.get('/users');

    this.setState({ contacts: data });
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
