import React from 'react';

import Contacts from './components/contacts/Contacts';
import Header from './components/layout/Header';
import AddContact from './components/contacts/AddContact';
import { Provider } from './context';
import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <Provider>
        <div className='App'>
          <Header />
          <div className='container'>
            <AddContact />
            <Contacts />
          </div>
        </div>
      </Provider>
    );
  }
}
