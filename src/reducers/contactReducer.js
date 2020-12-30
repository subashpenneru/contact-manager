import { v4 as uid } from 'uuid';

import { ADD_CONTACT, DELETE_CONTACT, GET_CONTACTS } from '../actions/types';

const initialState = {
  contacts: [
    {
      id: uid(),
      name: 'John Doe',
      email: 'john@gmail.com',
      phone: '555-555-5555',
    },
    {
      id: uid(),
      name: 'Karen Williams',
      email: 'karen@gmail.com',
      phone: '444-444-4444',
    },
    {
      id: uid(),
      name: 'Henry Johnson',
      email: 'henry@gmail.com',
      phone: '333-333-333',
    },
  ],
};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTACTS:
      return {
        ...state,
      };
    case ADD_CONTACT:
      return {
        ...state,
        contacts: state.contacts.concat(action.payload),
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter((c) => c.id !== action.payload),
      };
    default:
      return state;
  }
};

export default contactReducer;
