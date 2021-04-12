import React from 'react';
import { FlatList, View,StyleSheet } from 'react-native';

import Screen from '../component/Screen';
import Card from '../component/Card';
import colors from '../config/colors';
import routes  from '../navigations/routes'

const listings = [
    {
        id:1,
        title:"Royal Enfield for Sale",
        price:1000,
        image:require("../assets/homescreen.jpg")
    },
    {
        id:2,
        title:"Red Chair for Sale",
        price:50,
        image:require("../assets/chair.jpg")
    }]
function ListingScreen({navigation}) {
    return (
        <Screen style={styles.screen}>
            <FlatList 
            data={listings}
            keyExtractor={listing=>listing.id.toString()}
            renderItem={({item})=>
            <Card 
                title={item.title} 
                subtitle={"$"+item.price} 
                image={item.image}
                onPress={()=>navigation.navigate(routes.LISTING_DETAILS,item)}
                  />}/>

        </Screen>
    );
}
const styles = StyleSheet.create({
    screen:
    {
        padding:20,
        backgroundColor:colors.cream
    }
    
})
export default ListingScreen;