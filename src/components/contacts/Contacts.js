import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getContacts } from '../../actions';

import Contact from './Contact';

const Contacts = () => {
  const { contacts } = useSelector((state) => state.contact);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <React.Fragment>
      <h1 className='display-4 mb-2'>
        <span className='text-danger'>Contact</span> List
      </h1>
      {contacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </React.Fragment>
  );
};

export default Contacts;
