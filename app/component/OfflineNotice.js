import React,{useEffect} from 'react';
import {View,StyleSheet,Text} from 'react-native';
import colors from '../config/colors';
import Constants from 'expo-constants';

import {useNetInfo} from '@react-native-community/netinfo';

function OfflineNotice(props) {
    let netInfo = useNetInfo();
    // console.log(netInfo);

    useEffect(()=>{
        // console.log("Network connection changed");
    },[netInfo.isInternetReachable])

    if(netInfo.type!=="unknown" && netInfo.isInternetReachable === false)
        return (
        <View style={styles.container}> 
            <Text style ={styles.text}>No Internet Connection </Text>
        </View>
        );

    return null;
}

const styles = StyleSheet.create({
container:
{ 
    backgroundColor:colors.primary,
    width:'100%',
    height:50,
    position:"absolute",
    top:Constants.statusBarHeight,
    justifyContent:"center",
    alignItems:"center",
    zIndex:1,
},
text:
{
    color:colors.white,
    fontSize:17
}
})

export default OfflineNotice;