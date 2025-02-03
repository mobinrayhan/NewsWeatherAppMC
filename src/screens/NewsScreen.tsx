import {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, View} from 'react-native';
import NewsCard from '../components/NewsCard';
import useFetch from '../hooks/useFetch';

type Source = {
  id: string | null;
  name: string;
};

export type News = {
  source: Source;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};

type ResponseType = {
  articles: News[];
  status: string;
  totalResult: number;
};

// const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const NEWS_API_KEY = 'c1d784ac2e534caab43956c2a016c369';
const ARTICLE_PER_PAGE = 12;

export default function NewsScreen() {
  const [pageCount, setPageCount] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [news, setNews] = useState<News[]>([]);
  const [userHasScrolled, setUserHasScrolled] = useState<boolean>(false);

  const url = `https://newsapi.org/v2/everything?q=tesla&pageSize=${ARTICLE_PER_PAGE}&page=${pageCount}&apiKey=${NEWS_API_KEY}`;

  const {data, loading} = useFetch<ResponseType>(url);

  useEffect(() => {
    if (data?.articles?.length) {
      setNews(prev => [...prev, ...data.articles]);
    }

    if (data?.totalResult && data?.articles?.length) {
      const totalPages = Math.ceil(data?.totalResult / ARTICLE_PER_PAGE);
      if (pageCount >= totalPages) {
        setHasMore(false);
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(data), pageCount]);

  const loadMoreNews = () => {
    if (hasMore && !loading && userHasScrolled) {
      setPageCount(prev => prev + 1);
    }
  };

  return (
    <View style={{flex: 1, margin: 10}}>
      <FlatList
        data={news}
        keyExtractor={item => item.title + Math.random()}
        renderItem={({item}) => <NewsCard article={item} />}
        onEndReached={loadMoreNews}
        onEndReachedThreshold={0.5}
        onMomentumScrollBegin={() => setUserHasScrolled(true)}
        ListFooterComponent={
          loading ? <ActivityIndicator size="large" /> : null
        }
      />
    </View>
  );
}
