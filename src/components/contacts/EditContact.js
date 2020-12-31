import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import TextInputGroup from '../layout/TextInputGroup';
import { getContact, updateContact } from '../../actions';

const EditContact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({});
  const { push } = useHistory();
  const { id: userId } = useParams();
  const dispatch = useDispatch();
  const { editContact } = useSelector((state) => state.contact);

  useEffect(() => {
    dispatch(getContact(userId));
  }, [userId, dispatch]);

  useEffect(() => {
    if (editContact) {
      setName(editContact.name);
      setEmail(editContact.email);
      setPhone(editContact.phone);
    }
  }, [editContact]);

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

    dispatch(updateContact({ id: userId, name, email, phone }));

    // Clear State
    setName('');
    setEmail('');
    setPhone('');
    setErrors({});

    push('/');
  };

  return (
    <div className='card mb-3'>
      <div className='card-header'>Edit Contact</div>
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
            value='Update Contact'
            className='btn btn-light btn-block'
          />
        </form>
      </div>
    </div>
  );
};

export default EditContact;
