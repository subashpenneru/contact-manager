import React, { Component } from 'react';

import TextInputGroup from '../layout/TextInputGroup';
import { Consumer } from '../../context';

export default class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {},
  };

  onInputChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmitHandler = (e, dispatch) => {
    e.preventDefault();

    const { name, email, phone } = this.state;

    // Check for errors
    if (name === '') {
      this.setState({ errors: { name: 'Name is required' } });
      return;
    }

    if (email === '') {
      this.setState({ errors: { email: 'Email is required' } });
      return;
    }

    if (phone === '') {
      this.setState({ errors: { phone: 'Phone is required' } });
      return;
    }

    dispatch({ type: 'ADD_CONTACT', payload: { name, email, phone } });
    this.setState({ name: '', email: '', phone: '', errors: {} });
  };

  render() {
    const { name, email, phone, errors } = this.state;

    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;

          return (
            <div className='card mb-3'>
              <div className='card-header'>Add Contact</div>
              <div className='card-body'>
                <form onSubmit={(e) => this.onSubmitHandler(e, dispatch)}>
                  <TextInputGroup
                    label='Name'
                    name='name'
                    placeholder='Enter Name...'
                    value={name}
                    onChange={this.onInputChangeHandler}
                    error={errors.name}
                  />
                  <TextInputGroup
                    label='Email'
                    name='email'
                    type='email'
                    placeholder='Enter Email...'
                    value={email}
                    onChange={this.onInputChangeHandler}
                    error={errors.email}
                  />
                  <TextInputGroup
                    label='Phone'
                    name='phone'
                    placeholder='Enter Phone...'
                    value={phone}
                    onChange={this.onInputChangeHandler}
                    error={errors.phone}
                  />
                  <input
                    type='submit'
                    value='Add Contact'
                    className='btn btn-light btn-block'
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
