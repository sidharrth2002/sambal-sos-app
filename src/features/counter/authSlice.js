import { createSlice } from '@reduxjs/toolkit';
import cookie from 'js-cookie'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user : cookie.get('user') !== undefined? JSON.parse(cookie.get('user')) : {},
    isAuthenticated: cookie.get('access_token') ? true : false,
    accessToken: cookie.get('accessToken') ? cookie.get('accessToken') : ''
  },
  // fix all this
  reducers: {
    LOGIN: (state, action) => {
      console.log(action.payload.user);
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken
      state.isAuthenticated = true;
    },
    LOGOUT: (state) => {
      state.isAuthenticated = false
      state.accessToken = ""
      state.user = null
    },
    UPDATE: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { LOGIN, LOGOUT, UPDATE_USER } = authSlice.actions;

export const selectIsAuthenticated = state => state.isAuthenticated;
export const selectUser = state => state.user;

// // The function below is called a thunk and allows us to perform async logic. It
// // can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// // will call the thunk with the `dispatch` function as the first argument. Async
// // code can then be executed and other actions can be dispatched
// export const incrementAsync = amount => dispatch => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount));
//   }, 1000);
// };

// // The function below is called a selector and allows us to select a value from
// // the state. Selectors can also be defined inline where they're used instead of
// // in the slice file. For example: `useSelector((state) => state.counter.value)`
// export const selectCount = state => state.counter.value;

export default authSlice.reducer;