/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { Text } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import InfoTab from './tabs/Info/Info';
import HomeTab from './tabs/Home/Home';
import SettingsTab from './tabs/Settings/Settings';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faHomeUser,
  faInfoCircle,
  faGears,
} from '@fortawesome/free-solid-svg-icons';


export type RootStackParamList = {
  Home: undefined;
  Informazioni: undefined;
  Impostazioni: undefined;
};

const Tab = createBottomTabNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  //const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        backBehavior="initialRoute"
        screenOptions={({ route }) => ({
          tabBarLabel: ({ focused }) => {
            return (
              <Text
                style={{
                  fontSize: focused ? 18 : 14,
                  fontWeight: focused ? '600' : '400',
                  color: Colors.primary,
                }}>
                {route.name}
              </Text>
            );
          },
          tabBarIcon: () => {
            let iconSource = faInfoCircle;

            if (route.name === 'Informazioni') {
              iconSource = faInfoCircle;
            }
            if (route.name === 'Home') {
              iconSource = faHomeUser;
            }
            if (route.name === 'Impostazioni') {
              iconSource = faGears;
            }

            const icon = <FontAwesomeIcon icon={iconSource} />;

            return icon;
          },
        })}>
        <Tab.Screen
          name="Informazioni"
          component={InfoTab}
          options={{
            title: 'Informazioni',
            tabBarIcon: () => <FontAwesomeIcon icon={faInfoCircle} />,
          }}
        />
        <Tab.Screen
          name="Home"
          component={HomeTab}
          options={{
            title: 'home',
            tabBarIcon: () => <FontAwesomeIcon icon={faHomeUser} />,
          }}
        />
        <Tab.Screen
          name="Impostazioni"
          component={SettingsTab}
          options={{
            title: 'Impostazioni',
            tabBarIcon: () => <FontAwesomeIcon icon={faGears} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
