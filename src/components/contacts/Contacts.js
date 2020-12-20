import React, { Component } from 'react';

import Contact from './Contact';
import { Consumer } from '../../context';

export default class Contacts extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          const { contacts } = value;
          return (
            <>
              {contacts.map((c) => (
                <Contact key={c.id} contact={c} />
              ))}
            </>
          );
        }}
      </Consumer>
    );
  }
}
