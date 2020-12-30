import { ADD_CONTACT, DELETE_CONTACT, GET_CONTACTS } from './types';

export const getContacts = () => {
  return { type: GET_CONTACTS };
};

export const addContact = (contact) => {
  return { type: ADD_CONTACT, payload: contact };
};

export const deleteContact = (id) => {
  return { type: DELETE_CONTACT, payload: id };
};
