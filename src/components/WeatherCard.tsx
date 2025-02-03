import {StyleSheet, Text, View} from 'react-native';
import {ForeCast} from '../screens/WeatherScreen';

export default function WeatherCard({forecast}: {forecast: ForeCast}) {
  return (
    <View style={styles.card}>
      <Text style={styles.date}>{forecast.dt_txt}</Text>

      <Text style={styles.info}>Temperature: {forecast.main.temp} K</Text>

      <Text style={styles.info}>
        Weather: {forecast.weather[0].description}
      </Text>

      <Text style={styles.info}>Wind Speed: {forecast.wind.speed} m/s</Text>

      <Text style={styles.info}>Humidity: {forecast.main.humidity}%</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    padding: 8,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  date: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  info: {
    fontSize: 14,
    marginVertical: 2,
  },
});
