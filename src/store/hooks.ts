import {useDispatch, useSelector} from 'react-redux';
import {ThemeDispatch, ThemeSelector} from './store';

export const useThemeDispatch = useDispatch.withTypes<ThemeDispatch>();
export const useThemeSelector = useSelector.withTypes<ThemeSelector>();
