// src/redux/filters/slice.js
import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    name: '',
  },
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const { changeFilter } = filtersSlice.actions;

// Додаємо селектор
export const selectNameFilter = (state) => state.filters.name;

export default filtersSlice.reducer;
