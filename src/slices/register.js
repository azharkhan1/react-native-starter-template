import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  failure: false,
  isFetching: false,
  errorMessage: '',
  data: [],
};

const register = createSlice({
  name: 'register',
  initialState,
  reducers: {
    request: state => {
      state.isFetching = true;
    },
    success: (state, action) => {
      state.isFetching = false;
      state.data = action.payload;
      state = {...state.data, ...action.payload};
    },
    failure: (state, action) => {
      state.isFetching = false;
      state.error = action;
    },
  },
});

export const {request, success, failure} = register.actions;

export default register.reducer;
