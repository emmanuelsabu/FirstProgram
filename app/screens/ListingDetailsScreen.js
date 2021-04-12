import React from 'react';
import { Image, View,StyleSheet, Text } from 'react-native';

import AppText from '../component/AppText';
import colors from '../config/colors';
import ListItem from '../component/ListItem'

function ListingDetailsScreen({route}) {
    const listing = route.params;
    return (
        <View style={styles.viewcontainer}>
            <View style={styles.container}>
            <Image style={styles.imagestyle}  source={listing.image} ></Image>
            <View style={styles.testContainer}>
                <Text style={styles.titlestyle}>{listing.title}</Text>
                <Text style={styles.price}>${listing.price} </Text> 
                
            </View>
                </View>
            <ListItem style={styles.listitem}
                image = {require("../assets/homescreen.jpg")}
                title = "Emmanuel Sabu"
                subtitle = "5 Listings"
            />
        </View>
            
    );
}

const styles = StyleSheet.create({
    viewcontainer:
    {
        flex:1,
        paddingTop:30,
        backgroundColor:colors.cream
    },
    container:
    {
        padding:20,
        overflow:"hidden",
        borderRadius:25,
        backgroundColor:colors.white
    },
    imagestyle:
    {
        width:"100%",
        height:200
    },
    listitem:
    {

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

export default ListingDetailsScreen;