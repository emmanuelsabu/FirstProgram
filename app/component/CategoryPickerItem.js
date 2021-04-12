import React from 'react';
import { View,StyleSheet, TouchableOpacity } from 'react-native';
import Icon from './Icon';

import AppText from './AppText'

function CategoryPickerItem({item,onpress}) {
    return (
        <TouchableOpacity style={styles.container} onPress={onpress}>
    {/* <View style={styles.container}  > */}
         <Icon backgroundColor={item.backgroundColor}
          name={item.name} 
          size={50}>
          </Icon>
         <AppText style={styles.label}>{item.label}</AppText>  
    {/* </View> */}
    </TouchableOpacity>
    
    );}
const styles = StyleSheet.create(
    {
        container:
        {  
            paddingHorizontal:20,
            paddingVertical:30,
            alignItems:"center",
            width:"33%"   },
        label:
        {
            marginTop:5,
            textAlign:"center"

        }
    
})

export default CategoryPickerItem;