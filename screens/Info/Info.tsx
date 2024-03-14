import React from 'react';
import { Button, View } from 'react-native';

const InfoScreen = ({ navigation }) => {
  return (
    <View>
      <Button
        title="go to Home"
        onPress={() => navigation.navigate('Home', { name: 'Jane' })}
      />
    </View>
  );
};

export default InfoScreen;
