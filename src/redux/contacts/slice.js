import { createSlice, createSelector } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';
import { logout } from '../auth/operations'; // Імпортуємо операцію logout

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    loading: false,
    error: null,
    filter: '', // Додаємо поле фільтра
  },
  reducers: {
    clearContacts(state) {
      state.items = []; // Очищення списку контактів
    },
    setFilter(state, action) {
      state.filter = action.payload; // Оновлюємо значення фільтра
    },
  },
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
        state.items = state.items.filter(contact => contact.id !== action.payload);
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(logout.fulfilled, (state) => {
        state.items = []; // Очищаємо список контактів при виході користувача
      });
  },
});

export const { clearContacts, setFilter } = contactsSlice.actions;

// Selectors
export const selectContacts = (state) => state.contacts.items;
export const selectFilter = (state) => state.filters.name;

// Мемоізований селектор для фільтрації контактів за ім'ям або номером телефону
export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name, number }) => 
      name.toLowerCase().includes(normalizedFilter) ||
      number.includes(normalizedFilter)
    );
  }
);

export default contactsSlice.reducer;
