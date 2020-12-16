import React from 'react';

import Contacts from './components/Contacts';
import Header from './components/Header';
import { Provider } from './context';
import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <Provider>
        <div className='App'>
          <Header />
          <div className='container'>
            <Contacts />
          </div>
        </div>
      </Provider>
    );
  }
}
