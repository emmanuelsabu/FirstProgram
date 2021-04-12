import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ListingEditScreen from '../screens/ListingEditScreen';
import FeedNavigator from './FeedNavigator';
import AccountNavigator from './AccountNavigator';

import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';

import {MaterialCommunityIcons} from "@expo/vector-icons";
import NewListingButton from './NewListingButton';
import FriendsScreen from '../screens/FriendsScreen';
import { useEffect } from 'react';

const Tab = createBottomTabNavigator();
const AppNavigator = ()=>{
    useEffect(()=>
    {
        registetrForPushNotification();
    },[])
    const registetrForPushNotification =async ()=>
    {
        try {
            const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS)
            if(!permission.granted) return;
            
            const token = (await Notifications.getExpoPushTokenAsync());
            console.log("Token",token)
        } 
        catch (error) {
           console.log("Error getting push token",error); 
        }
    }
return ( 
    <Tab.Navigator>
        <Tab.Screen name="Listing" component={FeedNavigator} options={{
            tabBarIcon:({color,size})=><MaterialCommunityIcons name="home" size={size} color={color} />}} />
        <Tab.Screen name="ListingEdit" component={ListingEditScreen} options={({navigation} )=> ({
            tabBarButton:()=> <NewListingButton onPress={()=>navigation.navigate("ListingEdit")} />,
            tabBarIcon:({color,size})=><MaterialCommunityIcons name="plus-circle" size={size} color={color} />})}/>
        <Tab.Screen name="Account" component={AccountNavigator} options={{
            tabBarIcon:({color,size})=><MaterialCommunityIcons name="account" size={size} color={color} />}} />
        
    </Tab.Navigator>
);};
export default AppNavigator;