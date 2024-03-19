import React from 'react';
import InfoScreen from '../../screens/Info/Info';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { RootStackParamList } from '../../App';

export type InfoTabProps = BottomTabScreenProps<RootStackParamList, 'Informazioni'>;


const InfoTab = ({ navigation,route }:InfoTabProps) => {
  return <InfoScreen navigation={navigation} route={route} />;
};

export default InfoTab;
