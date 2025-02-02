import {ActivityIndicator, FlatList, View} from 'react-native';
import WeatherCard from '../components/WeatherCard';
import useFetch from '../hooks/useFetch';

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
export default function WeatherScreen() {
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=23.810331&lon=90.412521&appid=${API_KEY}`;

  const {data, loading} = useFetch(url);

  const forecasts = (data as {list: ForeCast[]})?.list;

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={forecasts}
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
