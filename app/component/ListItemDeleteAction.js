import React from 'react';
import { View,StyleSheet} from 'react-native';
import {MaterialCommunityIcons}  from '@expo/vector-icons';

import colors from '../config/colors'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
function ListItemDeleteAction({onpress}) {
    return (
        <TouchableWithoutFeedback onPress={onpress}>
        <View style={styles.delete}>
            <MaterialCommunityIcons name="delete" 
            size={25}
            color="white"/>
        </View>
        </TouchableWithoutFeedback>
        
    );
}
const styles = StyleSheet.create({
    delete:
    {
        width:75,
        height:"100%",
        backgroundColor:colors.primary,
        justifyContent:"center",
        alignItems:"center"
        
    }
    
})
export default ListItemDeleteAction;