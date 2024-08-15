// src/redux/contacts/operations.js
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// Змінити цей шлях, якщо він неправильний
axios.defaults.baseURL = 'https://connections-api.goit.global';

// Fetch contacts
export const fetchContacts = createAsyncThunk('contacts/fetchContacts', async (_, thunkAPI) => {
  try {
    const response = await axios.get('/contacts'); // Перевірте, чи правильний шлях
    console.log('Fetched contacts:', response.data); // Логування отриманих контактів
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// Add contact
export const addContact = createAsyncThunk('contacts/addContact', async (contact, thunkAPI) => {
  try {
    const response = await axios.post('/contacts', contact); // Перевірте, чи правильний шлях та формат даних
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// Delete contact
export const deleteContact = createAsyncThunk('contacts/deleteContact', async (contactId, thunkAPI) => {
  try {
    await axios.delete(`/contacts/${contactId}`); // Перевірте, чи правильний шлях
    return contactId; // Повертає контакт ID для видалення з локального стану
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
