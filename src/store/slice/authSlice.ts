import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

// Define a type for the AuthState
interface AuthState {
  username: string;
  email: string;
  password: string;
  token: string;
  isLoggedIn: boolean;
}

// Define the initial state of AuthState
const initialState: AuthState = {
  username: 'John Doe',
  email: 'john@gmail.com',
  password: '',
  token: '',
  isLoggedIn: true,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<AuthState>) => {
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.username = '';
      state.email = '';
      state.password = '';
      state.token = '';
      state.isLoggedIn = false;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
