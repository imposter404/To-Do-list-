
import React, { useRef, useEffect } from 'react';
import { Animated, Text, View, Button } from 'react-native';

const FadeOutView = ({ children }) => {
  const fadeAnim = useRef(new Animated.Value(1)).current; // Initial opacity is 1 (fully visible)

  const fadeOut = () => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 0, // Target opacity to 0 (fully transparent)
        duration: 1000, // Animation duration in milliseconds
        useNativeDriver: true, // Use native driver for better performance
      }
    ).start();
  };

  return (
    <Animated.View
      style={{
        opacity: fadeAnim, // Bind opacity to animated value
      }}
    >
      {children}
      <Button title="Fade Out" onPress={fadeOut} />
    </Animated.View>
  );
};

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <FadeOutView>
        <Text style={{ fontSize: 24 }}>Watch me fade out!</Text>
      </FadeOutView>
    </View>
  );
};

export default App;