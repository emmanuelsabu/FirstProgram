import React from 'react';
import { TextInput, View,StyleSheet, Platform } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'

import defaultStyle from '../config/styles'

function AppTextInput({icon,width="100%",...otherprops}) {
    return (
        <View style={[styles.container,{width}]}>
            {icon &&<MaterialCommunityIcons name={icon} size={20} color={defaultStyle.colors.medium} style={styles.icon}/>}
            <TextInput 
            placeholderTextColor={defaultStyle.colors.medium} 
            style={defaultStyle.text}{...otherprops}/>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container:
    {
        flexDirection:"row",
        backgroundColor:defaultStyle.colors.light,
        borderRadius:25,
        padding:15,
        marginVertical:10,
        alignItems:"center"
    
    },
    icon:
    {
        marginHorizontal:10
    },
    
})

export default AppTextInput;