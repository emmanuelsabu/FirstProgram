import React from 'react';
import { Image, View,StyleSheet, Text, TouchableHighlight } from 'react-native';
import colors from '../config/colors';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {MaterialCommunityIcons} from '@expo/vector-icons'

function ListItem({image,title,subtitle,IconComponent,onpress,renderrightactions}) {
    return (
        <Swipeable renderRightActions={renderrightactions}>
        <TouchableHighlight onPress={onpress} underlayColor={colors.cream}>
        <View style={styles.container} >
            {IconComponent      }
            {image &&<Image style={styles.imagestyle} source={image}></Image>}
            <View style={styles.titlecontainer}>
            <Text style={styles.title} numberOfLines={1} >{title}</Text>
            {subtitle &&<Text style={styles.subtitle} numberOfLines={2} >{subtitle}</Text>}
                </View>
            <MaterialCommunityIcons name={"chevron-right"} size={20} color={colors.medium}/>
        </View>
        </TouchableHighlight>
        </Swipeable>
    );
}
const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        padding:20,
        backgroundColor:colors.white,
        alignItems:"center"
           },
    imagestyle: { 
        width:70,
        height:70,
        borderRadius:40,
      
    },
    titlecontainer:
    {
        flex:1,
        marginHorizontal:10,
        justifyContent:"center"
        

    },
    title:
    {
      fontSize:20,
      fontWeight:"500",
    },
    subtitle:
    {
        fontSize:15,
        fontWeight:"300"
    }
})

export default ListItem;