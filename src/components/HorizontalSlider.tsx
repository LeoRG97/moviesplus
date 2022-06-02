/* eslint-disable react-native/no-inline-styles */
import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Movie } from '../interfaces/movieInterface';
import MoviePoster from './MoviePoster';

interface Props {
  title?: string;
  movies: Movie[];
}

const HorizontalSlider = ({ title, movies }: Props) => {
  return (
    <View style={{
      height: title ? 280 : 225,
    }}>
      {title && <Text style={styles.title}>
        {title}
      </Text>}
      <FlatList
        horizontal
        data={movies}
        renderItem={({ item }: any) => (
          <MoviePoster
            movie={item}
            width={140}
            height={200}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default HorizontalSlider;

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
    marginLeft: 10,
  },
});
