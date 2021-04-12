import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import MessageScreen from '../screens/MessageScreen';
import AccountScreen from '../screens/AccountScreen';
import FriendsScreen from '../screens/FriendsScreen';


const Stack = createStackNavigator();
const AccountNavigator=()=>
(
    <Stack.Navigator >
        <Stack.Screen name ="Account" component={AccountScreen} />
        <Stack.Screen name ="Messages" component={MessageScreen} />
        <Stack.Screen name ="Friends" component={FriendsScreen}/>
    </Stack.Navigator>
);
export default AccountNavigator;