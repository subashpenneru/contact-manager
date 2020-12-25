import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Consumer } from '../../context';
import axios from '../../api';

export default class Contact extends Component {
  constructor() {
    super();
    this.state = {
      showContactInfo: false,
    };
  }

  onShowClick = () => {
    this.setState({ showContactInfo: !this.state.showContactInfo });
  };

  deleteClickHandler = async (dispatch, id) => {
    try {
      await axios.delete(`/users/${id}`);

      dispatch({ type: 'DELETE_CONTACT', payload: id });
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    const { showContactInfo } = this.state;
    const { contact } = this.props;

    const { id, name, email, phone } = contact;

    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;

          return (
            <div className='card card-body mb-3'>
              <h4>
                {name}{' '}
                <i
                  onClick={this.onShowClick}
                  className={
                    !showContactInfo ? 'fas fa-sort-down' : 'fas fa-sort-up'
                  }
                  style={{ cursor: 'pointer' }}></i>
                <i
                  className='fas fa-times'
                  style={{ cursor: 'pointer', float: 'right', color: 'red' }}
                  onClick={() => this.deleteClickHandler(dispatch, id)}></i>
                <Link to={`contact/edit/${id}`}>
                  <i
                    className='fas fa-pencil-alt'
                    style={{
                      cursor: 'pointer',
                      float: 'right',
                      color: 'goldenrod',
                      marginRight: '1rem',
                    }}></i>
                </Link>
              </h4>
              {showContactInfo && (
                <ul className='list-group'>
                  <li className='list-group-item'>Email: {email}</li>
                  <li className='list-group-item'>Phone: {phone}</li>
                </ul>
              )}
            </div>
          );
        }}
      </Consumer>
    );
  }
}
