import { Animated, Button, View } from 'react-native';
import React from 'react';
import { useFade } from '../hooks/useFade';

const FadeScreen = () => {

  const { opacity, fadeIn, fadeOut } = useFade();

  return (
    <View style={{
      flex: 1,
      backgroundColor: 'gray',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Animated.View style={{
        backgroundColor: '#084f6a',
        width: 150,
        height: 150,
        borderColor: 'white',
        borderWidth: 10,
        marginBottom: 10,
        opacity,
      }} />
      <View style={{ marginBottom: 10 }}>
        <Button title="Fade In" onPress={fadeIn} />
      </View>
      <Button title="Fade Out" onPress={fadeOut} />
    </View>
  );
};

export default FadeScreen;

