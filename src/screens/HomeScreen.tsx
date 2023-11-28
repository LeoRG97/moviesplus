import { View, ActivityIndicator, useWindowDimensions, ScrollView } from 'react-native';
import React, { useContext, useEffect } from 'react';
import { useMovies } from '../hooks/useMovies';
import MoviePoster from '../components/MoviePoster';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import HorizontalSlider from '../components/HorizontalSlider';
import GradientBackground from '../components/GradientBackground';
import { getImageColors } from '../helpers/getColors';
import { GradientContext } from '../context/GradientContext';

const HomeScreen = () => {
  // const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();
  const { top } = useSafeAreaInsets();
  const { width } = useWindowDimensions();

  const { setMainColors } = useContext(GradientContext);

  const getPosterColors = async (index: number) => {
    const movie = nowPlaying[index];
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    const [primary = 'black', secondary = 'gray'] = await getImageColors(uri);
    setMainColors({ primary, secondary });
  };

  useEffect(() => {
    if (nowPlaying.length > 0) {
      getPosterColors(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nowPlaying]);

  if (isLoading) {
    return (
      <View style={{ justifyContent: 'center', flex: 1 }}>
        <ActivityIndicator color="red" size={100} />
      </View>
    );
  }

  return (
    <GradientBackground>
      <ScrollView>
        <View style={{ marginTop: top + 20 }}>
          <View style={{
            height: 470,
          }}>
            <Carousel
              inactiveSlideOpacity={0.9}
              data={nowPlaying}
              renderItem={({ item }: any) => <MoviePoster movie={item} />}
              sliderWidth={width}
              itemWidth={300}
              onSnapToItem={(index) => getPosterColors(index)}
            />
          </View>

          {/* Películas populares */}
          <HorizontalSlider
            movies={popular}
            title="Populares"
          />
          <HorizontalSlider
            movies={topRated}
            title="Mejor calificadas"
          />
          <HorizontalSlider
            movies={upcoming}
            title="Próximos estrenos"
          />
        </View>
      </ScrollView>
    </GradientBackground>
  );
};

export default HomeScreen;
