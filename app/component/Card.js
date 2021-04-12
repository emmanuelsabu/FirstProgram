import React from 'react';
import { View,Image,Text,StyleSheet, TouchableWithoutFeedback } from 'react-native';

import colors from "../config/colors"
function Card({image,title,subtitle,onPress}) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.container}>
            <Image style={styles.imagestyle}  source={image} ></Image>
            <View style={styles.testContainer}>
                <Text style={styles.titlestyle}>{title}</Text>
                <Text style={styles.price}>{subtitle} </Text> 
                
            </View>
                </View>
                </TouchableWithoutFeedback>
    );
}
const styles = StyleSheet.create({
    container:
    {
        overflow:"hidden",
        borderRadius:25,
        backgroundColor:colors.white,
        marginVertical:20
    },
    imagestyle:
    {
        width:"100%",
        height:200
    },
    
    testContainer:
    {
        padding:10
    },
    titlestyle:
    {
        fontSize:20,
        fontWeight: "500",
        fontStyle:"normal",
        fontFamily:"Roboto"
    },
    price:{
        fontSize:15,
        color:colors.secondary,
        fontWeight:"bold",
        marginTop: 5
    }
})
export default Card;