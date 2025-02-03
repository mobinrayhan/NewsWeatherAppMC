import {useDispatch, useSelector} from 'react-redux';
import {ThemeDispatch, ThemeSelector} from '../redux/store';

export const useThemeDispatch = useDispatch.withTypes<ThemeDispatch>();
export const useThemeSelector = useSelector.withTypes<ThemeSelector>();
