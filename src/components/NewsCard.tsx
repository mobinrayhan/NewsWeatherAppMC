import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {ThemeSelector} from '../redux/store';
import {News} from '../screens/NewsScreen';
import {useThemeSelector} from '../store/hooks';

const NewsCard = ({article}: {article: News}) => {
  const {title, author, source, publishedAt, description, urlToImage} = article;

  const darkMode = useThemeSelector<ThemeSelector>(
    state => state.theme.darkMode,
  ) as boolean;
  const styles = createStyles(darkMode);

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

const createStyles = (colorScheme: boolean) =>
  StyleSheet.create({
    card: {
      backgroundColor: colorScheme ? '#1c1c1c' : '#fff',
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
      color: colorScheme ? '#fff' : '#333',
    },
    source: {
      fontSize: 12,
      color: colorScheme ? '#ccc' : '#888',
      marginBottom: 5,
    },
    date: {
      fontSize: 12,
      color: colorScheme ? '#ccc' : '#888',
      marginBottom: 10,
    },
    description: {
      fontSize: 14,
      color: colorScheme ? '#ddd' : '#333',
      lineHeight: 20,
      marginBottom: 10,
    },
  });

export default NewsCard;
