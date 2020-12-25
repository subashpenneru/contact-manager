import React, { Component } from 'react';

import TextInputGroup from '../layout/TextInputGroup';
import { Consumer } from '../../context';
import axios from '../../api';

export default class EditContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {},
  };

  async componentDidMount() {
    const {
      params: { id },
    } = this.props.match;

    if (id) {
      try {
        const {
          data: { name, email, phone },
        } = await axios.get(`/users/${id}`);

        this.setState({ name, email, phone });
      } catch (err) {
        console.error(err);
      }
    }
  }

  onInputChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmitHandler = async (e, dispatch) => {
    e.preventDefault();

    const { name, email, phone } = this.state;
    const {
      params: { id },
    } = this.props.match;

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

    const { data } = await axios.put(
      `/users/${id}`,
      { name, email, phone },
      { headers: { 'Content-Type': 'application/json' } }
    );

    dispatch({ type: 'UPDATE_CONTACT', payload: data });
    this.setState({ name: '', email: '', phone: '', errors: {} });

    this.props.history.push('/');
  };

  render() {
    const { name, email, phone, errors } = this.state;

    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;

          return (
            <div className='card mb-3'>
              <div className='card-header'>Edit Contact</div>
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
                    value='Edit Contact'
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
