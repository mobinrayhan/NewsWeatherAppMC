import Geolocation from '@react-native-community/geolocation';
import NetInfo from '@react-native-community/netinfo';
import {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, View} from 'react-native';
import WeatherCard from '../components/WeatherCard';
import useFetch from '../hooks/useFetch';
import {getWeatherData, storeWeatherData} from '../utils/asyncStorage';

export type ForeCast = {
  dt_txt: string;
  main: {
    humidity: string;
    temp: string;
  };
  weather: Array<{description: string}>;
  wind: {speed: string};
};
const API_KEY = '587d7d5a1a364e992130de7c104cd402';

const getCurrentLocation = () => {
  return new Promise((resolve, reject) => {
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        resolve({latitude, longitude});
      },
      error => {
        console.error('Error getting location:', error);
        reject(error);
      },
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  });
};

type Cords = {
  latitude: number;
  longitude: number;
};

export default function WeatherScreen() {
  const [forecastsSt, setForecastsSt] = useState<ForeCast[]>([]);

  const [cords, setCords] = useState<Cords>();
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${
    cords?.latitude || 23.810331
  }&lon=${cords?.longitude || 90.412521}&appid=${API_KEY}`;

  const {data, loading} = useFetch(url);

  const forecasts = (data as {list: ForeCast[]})?.list;

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const location = await getCurrentLocation();
        setCords(location as Cords);
      } catch (error) {
        console.error('Location error:', error);
      }
    };
    fetchLocation();
  }, []);

  useEffect(() => {
    const checkNetworkStatus = async () => {
      const state = await NetInfo.fetch();

      if (state.isConnected && forecasts) {
        setForecastsSt(forecasts);
        await storeWeatherData(forecasts);
      } else {
        const localForecasts = await getWeatherData();
        setForecastsSt(localForecasts);
      }
    };
    checkNetworkStatus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(forecasts)]);

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={forecastsSt}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => <WeatherCard forecast={item} />}
        contentContainerStyle={{
          padding: 8,
        }}
        ListFooterComponent={
          loading ? <ActivityIndicator size="large" /> : null
        }
      />
    </View>
  );
}
