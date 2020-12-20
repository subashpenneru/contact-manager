import React, { Component } from 'react';

export default class AddContact extends Component {
  constructor(props) {
    super();

    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.phoneInput = React.createRef();
  }

  onSubmitHandler = (e) => {
    e.preventDefault();

    const contact = {
      name: this.nameInput.current.value,
      email: this.emailInput.current.value,
      phone: this.phoneInput.current.value,
    };

    console.log(contact);
  };

  static defaultProps = {
    name: 'Sai Subash Penneru',
    email: 'subashpenneru@outlook.com',
    phone: '+917095692523',
  };

  render() {
    const { name, email, phone } = this.props;

    return (
      <div className='card mb-3'>
        <div className='card-header'>Add Contact</div>
        <div className='card-body'>
          <form onSubmit={this.onSubmitHandler}>
            <div className='form-group'>
              <label htmlFor='name'>Name</label>
              <input
                type='text'
                name='name'
                id='name'
                className='form-control form-control-lg'
                placeholder='Enter Name...'
                defaultValue={name}
                ref={this.nameInput}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                name='email'
                id='email'
                className='form-control form-control-lg'
                placeholder='Enter Email...'
                defaultValue={email}
                ref={this.emailInput}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='phone'>Phone</label>
              <input
                type='text'
                name='phone'
                id='phone'
                className='form-control form-control-lg'
                placeholder='Enter Phone...'
                defaultValue={phone}
                ref={this.phoneInput}
              />
            </div>
            <input
              type='submit'
              value='Add Contact'
              className='btn btn-light btn-block'
            />
          </form>
        </div>
      </div>
    );
  }
}
