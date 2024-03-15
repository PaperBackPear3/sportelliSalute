import React from 'react';
import { Button, View } from 'react-native';
import { HomeTabProps } from '../../tabs/Home/Home';

const HomeScreen = ({ navigation }:HomeTabProps) => {
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
