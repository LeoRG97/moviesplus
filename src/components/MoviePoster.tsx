/* eslint-disable react-native/no-inline-styles */
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { Movie } from '../interfaces/movieInterface';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

interface Props {
  movie: Movie;
  height?: number;
  width?: number;
}

const MoviePoster = ({ movie, height = 440, width = 300 }: Props) => {

  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('DetailScreen', movie)}
      activeOpacity={0.7}
    >
      <View style={{
        width,
        height,
        marginHorizontal: 2,
        paddingBottom: 10,
        paddingHorizontal: 6,
      }}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri,
            }}
            style={styles.image}
          />
        </View>

      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 7,
    elevation: 10,
  },
  image: {
    flex: 1,
    borderRadius: 18,
  },
});

export default MoviePoster;
