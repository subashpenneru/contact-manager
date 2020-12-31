import {
  ADD_CONTACT,
  DELETE_CONTACT,
  GET_CONTACTS,
  GET_CONTACT,
  UPDATE_CONTACT,
} from './types';
import axios from '../api';

export const getContacts = () => async (dispatch) => {
  try {
    const { data } = await axios.get('/users');

    dispatch({ type: GET_CONTACTS, payload: data });
  } catch (e) {
    console.error(e);
  }
};

export const addContact = (contact) => async (dispatch) => {
  try {
    const { data } = await axios.post('/users', contact, {
      headers: { 'Content-Type': 'application/json' },
    });

    dispatch({ type: ADD_CONTACT, payload: data });
  } catch (e) {
    console.error(e);
  }
};

export const deleteContact = (id) => async (dispatch) => {
  try {
    await axios.delete(`/users/${id}`);

    dispatch({ type: DELETE_CONTACT, payload: id });
  } catch (e) {
    console.error(e);
  }
};

export const getContact = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/users/${id}`);

    dispatch({ type: GET_CONTACT, payload: data });
  } catch (e) {
    console.error(e);
  }
};

export const updateContact = (contact) => async (dispatch) => {
  try {
    const { data } = await axios.put(`/users/${contact.id}`, contact, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    dispatch({ type: UPDATE_CONTACT, payload: data });
  } catch (e) {
    console.error(e);
  }
};
