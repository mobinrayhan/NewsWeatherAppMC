import {createSlice} from '@reduxjs/toolkit';
import {Appearance} from 'react-native';

interface ThemeState {
  darkMode: boolean;
}

const systemPrefersDark = Appearance.getColorScheme() === 'dark';

const initialState: ThemeState = {
  darkMode: systemPrefersDark,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: state => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const {toggleTheme} = themeSlice.actions;
