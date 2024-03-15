import React from 'react';
import { Button, View } from 'react-native';
import { InfoTabProps } from '../../tabs/Info/Info';



const InfoScreen = ({ navigation }:InfoTabProps) => {
  return (
    <View>
      <Button
        title="go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

export default InfoScreen;
