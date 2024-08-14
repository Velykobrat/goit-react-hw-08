// contactsSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './contactsOps';
import { createSelector } from 'reselect';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addContact.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteContact.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter((contact) => contact.id !== action.payload);
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// Вибірка контактів і фільтра
const selectContacts = (state) => state.contacts.items;
const selectFilter = (state) => state.filters.nameFilter;

// Мемоізований селектор для відфільтрованих контактів
export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    if (!filter) return contacts;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

export default contactsSlice.reducer;
