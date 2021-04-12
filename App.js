import React, { useEffect, useState }  from 'react';

import {NavigationContainer,useNavigation} from '@react-navigation/native'
import RegisterScreen from './app/screens/RegisterScreen';
import AuthNavigator from './app/navigations/AuthNavigatior';
import  AppNavigator from "./app/navigations/AppNavigator";
import NavigationTheme from './app/navigations/NavigationTheme'
import NetInfo from '@react-native-community/netinfo';
import Screen from './app/component/Screen'
import AsyncStorage from '@react-native-async-storage/async-storage';
import OfflineNotice from './app/component/OfflineNotice';
import { View } from 'react-native';

export default function App() {
  return (
    <Screen>
    <OfflineNotice />
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
    </Screen>
  );
}


