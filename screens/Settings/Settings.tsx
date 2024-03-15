import React from 'react';
import { Button, View } from 'react-native';
import { SettingsTabProps } from '../../tabs/Settings/Settings';

const SettingsScreen = ({ navigation }:SettingsTabProps) => {
  return (
    <View>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default SettingsScreen;
