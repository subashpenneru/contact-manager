import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Contacts from './components/contacts/Contacts';
import Header from './components/layout/Header';
import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import Test from './components/test/Test';
import { Provider } from './context';
import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className='App'>
            <Header />
            <div className='container'>
              <Switch>
                <Route exact path='/' component={Contacts} />
                <Route exact path='/contact/add' component={AddContact} />
                <Route exact path='/contact/edit/:id' component={EditContact} />
                <Route exact path='/about' component={About} />
                <Route exact path='/test' component={Test} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}
