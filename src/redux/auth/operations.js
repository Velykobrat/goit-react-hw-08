// src/redux/auth/operations.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { clearContacts } from '../contacts/slice'; // Перевірте правильність цього шляху та експорт

axios.defaults.baseURL = 'https://connections-api.goit.global';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk('auth/register', async (credentials, thunkAPI) => {
  try {
    const response = await axios.post('/users/signup', credentials);
    const { token } = response.data;
    localStorage.setItem('token', token);
    setAuthHeader(token);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const login = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
  try {
    const response = await axios.post('/users/login', credentials);
    const { token } = response.data;
    localStorage.setItem('token', token);
    setAuthHeader(token);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    localStorage.removeItem('token');
    clearAuthHeader();
    thunkAPI.dispatch(clearContacts()); // Очистити контакти при логауті
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const persistedToken = localStorage.getItem('token');

  if (!persistedToken) {
    return thunkAPI.rejectWithValue('Unable to fetch user');
  }

  setAuthHeader(persistedToken);
  try {
    const response = await axios.get('/users/current');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
