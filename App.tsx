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
  Info: undefined;
  Settings: { name: string };
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
                  fontSize: focused ? 20 : 12,
                  fontWeight: focused ? '600' : '300',
                  color: Colors.primary,
                }}>
                {route.name}
              </Text>
            );
          },
          tabBarIcon: () => {
            let iconSource = faInfoCircle;

            if (route.name === 'Info') {
              iconSource = faInfoCircle;
            }
            if (route.name === 'Home') {
              iconSource = faHomeUser;
            }
            if (route.name === 'Settings') {
              iconSource = faGears;
            }

            const icon = <FontAwesomeIcon icon={iconSource} />;

            return icon;
          },
        })}>
        <Tab.Screen
          name="Info"
          component={InfoTab}
          options={{
            title: 'Info',
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
          name="Settings"
          component={SettingsTab}
          options={{
            title: 'Settings',
            tabBarIcon: () => <FontAwesomeIcon icon={faGears} />,
          }}
          initialParams={{ name: 'Jane' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
