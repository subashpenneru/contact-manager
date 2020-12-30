import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { v4 as uid } from 'uuid';

import TextInputGroup from '../layout/TextInputGroup';
import { addContact } from '../../actions';

const AddContact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({});
  const { push } = useHistory();
  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    e.preventDefault();

    // Check For Errors
    if (name === '') {
      setErrors({ name: 'Name is required' });
      return;
    }

    if (email === '') {
      setErrors({ email: 'Email is required' });
      return;
    }

    if (phone === '') {
      setErrors({ phone: 'Phone is required' });
      return;
    }

    dispatch(
      addContact({
        id: uid(),
        name,
        email,
        phone,
      })
    );

    // Clear State
    setName('');
    setEmail('');
    setPhone('');
    setErrors({});

    push('/');
  };

  return (
    <div className='card mb-3'>
      <div className='card-header'>Add Contact</div>
      <div className='card-body'>
        <form onSubmit={onSubmitHandler}>
          <TextInputGroup
            label='Name'
            name='name'
            placeholder='Enter Name'
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            error={errors.name}
          />
          <TextInputGroup
            label='Email'
            name='email'
            type='email'
            placeholder='Enter Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={errors.email}
          />
          <TextInputGroup
            label='Phone'
            name='phone'
            placeholder='Enter Phone'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
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
};

export default AddContact;
