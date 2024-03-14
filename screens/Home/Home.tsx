import React from 'react';
import { Button, View } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings', { name: 'Jane' })}
      />
    </View>
  );
};

export default HomeScreen;
