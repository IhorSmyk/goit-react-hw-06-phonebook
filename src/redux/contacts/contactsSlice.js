import { createSlice, nanoid } from '@reduxjs/toolkit';
import { initialContacts } from './initialState';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: { items: initialContacts },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.unshift(action.payload);
      },
      prepare(newContact) {
        return { payload: { ...newContact, id: nanoid() } };
      },
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(el => el.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactSlice.actions;
export const contactsReducer = contactSlice.reducer;

// const handleDeleteContact = idToDelete =>
//   setContacts(contacts.filter(contact => contact.id !== idToDelete));

// reducers: {
//     addTask: {
//       reducer(state, action) {
//         state.push(action.payload);
//       },
//       prepare(text) {
//         return {
//           payload: {
//             text,
//             id: nanoid(),
//             completed: false,
//           },
//         };
//       },
//     },
