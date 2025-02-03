import {View} from 'react-native';
import {Switch} from 'react-native-gesture-handler';
import {ThemeSelector} from '../redux/store';
import {toggleTheme} from '../redux/themeSlice';
import {useThemeDispatch, useThemeSelector} from '../store/hooks';

export default function DarkToggle() {
  const dispatch = useThemeDispatch();
  const darkMode = useThemeSelector(
    (state: ThemeSelector) => state.theme.darkMode,
  );

  const handleThemeToggle = (_: boolean) => {
    dispatch(toggleTheme());
  };

  return (
    <View>
      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={true ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={handleThemeToggle}
        value={darkMode}
      />
    </View>
  );
}
