import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { deleteContact } from '../../actions';

const Contact = ({ contact: { id, name, email, phone } }) => {
  const [showContactInfo, setShowContactInfo] = useState(false);
  const dispatch = useDispatch();

  const onDeleteHandler = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className='card card-body mb-3'>
      <h4>
        {name}{' '}
        <i
          onClick={() => setShowContactInfo((prev) => !prev)}
          className='fas fa-sort-down'
          style={{ cursor: 'pointer' }}
        />
        <i
          className='fas fa-times'
          style={{ cursor: 'pointer', float: 'right', color: 'red' }}
          onClick={onDeleteHandler}
        />
        <Link to={`contact/edit/${id}`}>
          <i
            className='fas fa-pencil-alt'
            style={{
              cursor: 'pointer',
              float: 'right',
              color: 'black',
              marginRight: '1rem',
            }}
          />
        </Link>
      </h4>
      {showContactInfo ? (
        <ul className='list-group'>
          <li className='list-group-item'>Email: {email}</li>
          <li className='list-group-item'>Phone: {phone}</li>
        </ul>
      ) : null}
    </div>
  );
};

export default Contact;
