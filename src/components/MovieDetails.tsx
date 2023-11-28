import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { MovieFull } from '../interfaces/movieInterface';
import { Cast } from '../interfaces/creditsInterface';
import Icon from 'react-native-vector-icons/Ionicons';

import currencyFormatter from 'currency-formatter';
import CastItem from './CastItem';

interface Props {
  movieFull: MovieFull;
  cast: Cast[];
  directors: Cast[];
}

const MovieDetails = ({ movieFull, cast, directors }: Props) => {
  console.log({ movieFull, cast });
  return (
    <>
      <View style={{ marginHorizontal: 20 }}>
        <View style={{ flexDirection: 'row' }}>
          <Icon
            name="star-outline"
            color="grey"
            size={16}
          />
          <Text>{' '}{movieFull.vote_average}</Text>
          <Text style={{ marginLeft: 5 }}>
            - {movieFull.genres.map((genre) => genre.name).join(', ')}
          </Text>
        </View>

        <Text style={styles.title}>Historia</Text>
        <Text style={styles.paragraph}>{movieFull.overview}</Text>

        <Text style={styles.title}>Presupuesto</Text>
        <Text style={styles.paragraph}>{currencyFormatter.format(movieFull.budget, { code: 'USD' })}</Text>

      </View>

      <View style={{ marginTop: 10 }}>
        <Text style={{ ...styles.title, marginHorizontal: 20 }}>Dirección</Text>
        <FlatList
          data={directors}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <CastItem actor={item} />}
          style={{
            marginTop: 10,
            height: 180,
          }}
        />
      </View>


      <View style={{ marginTop: 10, marginBottom: 100 }}>
        <Text style={{ ...styles.title, marginHorizontal: 20 }}>Actores</Text>
        <FlatList
          data={cast}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <CastItem actor={item} />}
          style={{
            marginTop: 10,
            height: 180,
          }}
        />
      </View>


    </>
  );
};

export default MovieDetails;

const styles = StyleSheet.create({
  title: {
    fontSize: 23,
    marginTop: 10,
    fontWeight: 'bold',
  },
  paragraph: {
    fontSize: 16,
    marginTop: 10,
  },
});
