/* eslint-disable react-native/no-inline-styles */
import { View, Text, Button } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { movieDB } from '../api/movieDB';

const HomeScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  useEffect(() => {
    movieDB.get('/now_playing')
      .then((res) => {
        console.log(res.data);
      });
  }, []);
  return (
    <View>
      <Text style={{ marginBottom: 30 }}>HomeScreen</Text>
      <Button
        title="Lol"
        onPress={() => navigation.navigate('DetailScreen')}
      />
    </View>
  );
};

export default HomeScreen;
