import {configureStore} from '@reduxjs/toolkit';
import {themeSlice} from './themeSlice';

const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
  },
});

export type ThemeSelector = ReturnType<typeof store.getState>;
export type ThemeDispatch = typeof store.dispatch;

export default store;
