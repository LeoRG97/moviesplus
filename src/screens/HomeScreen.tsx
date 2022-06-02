/* eslint-disable react-native/no-inline-styles */
import { View, ActivityIndicator, useWindowDimensions, ScrollView } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useMovies } from '../hooks/useMovies';
import MoviePoster from '../components/MoviePoster';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import HorizontalSlider from '../components/HorizontalSlider';

const HomeScreen = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();
  const { top } = useSafeAreaInsets();
  const { width } = useWindowDimensions();

  if (isLoading) {
    return (
      <View style={{ justifyContent: 'center', flex: 1 }}>
        <ActivityIndicator color="red" size={100} />
      </View>
    );
  }

  return (
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
  );
};

export default HomeScreen;
