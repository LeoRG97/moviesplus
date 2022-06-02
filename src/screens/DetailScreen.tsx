import { View, Text } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/types';

interface Props extends NativeStackScreenProps<RootStackParamList, 'DetailScreen'> { }

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const DetailScreen = ({ navigation, route }: Props) => {
  const movie = route.params;
  console.log(movie.title);
  return (
    <View>
      <Text>DetailScreen</Text>
    </View>
  );
};

export default DetailScreen;
