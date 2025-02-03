import AsyncStorage from '@react-native-async-storage/async-storage';
import {News} from '../screens/NewsScreen';
import {ForeCast} from '../screens/WeatherScreen';

export const storeWeatherData = async (weatherData: ForeCast[]) => {
  try {
    await AsyncStorage.setItem('weatherData', JSON.stringify(weatherData));
  } catch (error) {
    console.error('Error storing weather data', error);
  }
};

export const getWeatherData = async () => {
  try {
    const storedData = await AsyncStorage.getItem('weatherData');
    if (storedData !== null) {
      return JSON.parse(storedData);
    }
    return [];
  } catch (error) {
    console.error('Error retrieving weather data', error);
    return [];
  }
};

export const storeNewsData = async (newsData: News[]) => {
  try {
    await AsyncStorage.setItem('newsData', JSON.stringify(newsData));
  } catch (error) {
    console.error('Error storing news data', error);
  }
};

export const getNewsData = async () => {
  try {
    const storedData = await AsyncStorage.getItem('newsData');
    if (storedData !== null) {
      return JSON.parse(storedData);
    }
    return [];
  } catch (error) {
    console.error('Error retrieving news data', error);
    return [];
  }
};
