import React from 'react';
import { TouchableOpacity,StyleSheet } from 'react-native';
import AppText from './AppText';

function PickerItem({item,onpress}) {
    return (
        <TouchableOpacity onPress={onpress}>
            <AppText style={styles.text}>{item.label}</AppText>
        </TouchableOpacity> 
            );
}
const styles = StyleSheet.create({
    text:
    {
        padding:10
    }
})

export default PickerItem;