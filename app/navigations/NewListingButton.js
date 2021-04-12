import React from 'react';
import {View,StyleSheet, TouchableWithoutFeedback} from 'react-native';
import colors from '../config/colors';
import {MaterialCommunityIcons} from '@expo/vector-icons';

function NewListingButton({onPress}) {
return (
    <TouchableWithoutFeedback onPress={onPress} >
        <View  style={styles.container}> 
            <MaterialCommunityIcons name="plus-circle" color={colors.white} size={40} />
        </View>
    </TouchableWithoutFeedback>
 );
}   

const styles = StyleSheet.create({
container:{
    width:80,
    height:80,
    borderRadius:40,
    backgroundColor:colors.primary,
    bottom:10,
    borderColor:colors.white,
    borderWidth:10,
    alignItems:"center",
    justifyContent:"center",
    alignSelf:'center',
}
})

export default NewListingButton;