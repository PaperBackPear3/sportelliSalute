import React from 'react';
import SettingsScreen from '../../screens/Settings/Settings';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { RootStackParamList } from '../../App';

export type SettingsTabProps = BottomTabScreenProps<RootStackParamList, 'Settings'>;

const SettingsTab = ({ navigation, route }:SettingsTabProps) => {
  return <SettingsScreen navigation={navigation} route={route} />;
};

export default SettingsTab;
