import {
  ADD_CONTACT,
  DELETE_CONTACT,
  GET_CONTACT,
  GET_CONTACTS,
  UPDATE_CONTACT,
} from '../actions/types';

const initialState = {
  contacts: [],
  editContact: null,
};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTACTS:
      return {
        ...state,
        contacts: action.payload,
        editContact: null,
      };
    case ADD_CONTACT:
      return {
        ...state,
        contacts: state.contacts.concat(action.payload),
        editContact: null,
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter((c) => c.id !== action.payload),
      };
    case GET_CONTACT:
      return {
        ...state,
        editContact: action.payload,
      };
    case UPDATE_CONTACT:
      const { id } = action.payload;

      return {
        ...state,
        contacts: state.contacts.map((c) => (c.id === id ? action.payload : c)),
        editContact: null,
      };
    default:
      return state;
  }
};

export default contactReducer;
