import React from 'react';
import HomeScreen from '../../screens/Home/Home';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { RootStackParamList } from '../../App';

export type HomeTabProps = BottomTabScreenProps<RootStackParamList, 'Home'>;


const HomeTab = ({ navigation,route }:HomeTabProps) => {
  return <HomeScreen navigation={navigation} route={route} />;
};

export default HomeTab;
