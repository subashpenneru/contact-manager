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
              <h1 className='dispaly-4 mb-2'>
                <span className='text-danger'>Contact</span> List
              </h1>
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
