import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {News} from '../screens/NewsScreen';

const NewsCard = ({article}: {article: News}) => {
  const {title, author, source, publishedAt, description, urlToImage} = article;

  return (
    <Pressable
      style={styles.card}
      onPress={() => console.log('Navigate to article', article.url)}>
      {urlToImage && <Image source={{uri: urlToImage}} style={styles.image} />}

      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.source}>
          {source.name} | {author}
        </Text>
        <Text style={styles.date}>
          {new Date(publishedAt).toLocaleDateString()}
        </Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  content: {
    padding: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  source: {
    fontSize: 12,
    color: '#888',
    marginBottom: 5,
  },
  date: {
    fontSize: 12,
    color: '#888',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
    marginBottom: 10,
  },
});

export default NewsCard;
