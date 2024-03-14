import React from 'react';
import { Button, View } from 'react-native';

const HomeTab = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Go to Help"
        onPress={() => navigation.navigate('Help', { name: 'Jane' })}
      />
    </View>
  );
};

export default HomeTab;
