import React from 'react';
import { Image,StyleSheet, View } from 'react-native';

import colors from '../config/colors';
import {MaterialCommunityIcons} from '@expo/vector-icons'

function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
        <View style={styles.nexticon}>
            <MaterialCommunityIcons name="close" color={colors.white} size={30} />
            </View> 
        <View style={styles.deleteicon}>
            <MaterialCommunityIcons name="delete" color={colors.white} size={30} />
        </View>

        <Image style={styles.image1} resizeMode="contain" source={require("../assets/chair.jpg")}>
            
        </Image>
        </View>

    );
}

const styles = StyleSheet.create({
    container:
    {
        backgroundColor:colors.black,
        flex:1

    },
    image1:
    {
        height:"100%",
        width:"100%",
        resizeMode:"contain"
    },
    nexticon: {
        
        position:"absolute",
        top:50,
        left:30
    },
    deleteicon: {
        
        position:"absolute",
        top:50,
        right:30
    }
    
})
export default ViewImageScreen;
