import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Cast } from '../interfaces/creditsInterface';

interface Props {
  actor: Cast;
}

const CastItem = ({ actor }: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;

  return (
    <View style={styles.container}>
      {actor.profile_path &&
        <Image
          source={{ uri }}
          style={styles.profileImg}
        />
      }
      <View style={styles.actorInfo}>
        <Text style={styles.actorName}>
          {actor.name}
        </Text>
        <Text style={styles.characterName}>
          {actor.character}
        </Text>
      </View>
    </View>
  );
};

export default CastItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 7,
    elevation: 10,
    marginLeft: 20,
    paddingRight: 10,
    height: 60,
  },
  actorInfo: {
    marginLeft: 20,
    marginTop: 5,
  },
  actorName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  characterName: {
    fontSize: 16,
    opacity: 0.7,
  },
  profileImg: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
});
