import React, { useState } from 'react';
import {  View,StyleSheet, Modal, Button, FlatList } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import defaultStyle from '../config/styles'
import AppText from './AppText';
import Screen from './Screen'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import PickerItem from './PickerItem';
import ListItemSeperator from './ListItemSeperator';

function AppPicker({items,icon,placeholder,numberOfColumn=1,onSelectItem,PickerItemComponent=PickerItem,selectedItem,width="100%"}) {
    const [modalVisible,setModalVisible]=useState(false);
    // console.log(items);

    return (
        <>
        <TouchableWithoutFeedback onPress={()=>setModalVisible(true)}>
        <View style={[styles.container,{width}]}>
            {icon &&<MaterialCommunityIcons 
            name={icon} 
            size={20} 
            color={defaultStyle.colors.medium} 
            style={styles.icon}/>}

            {selectedItem?
            (<AppText style={styles.text}>{selectedItem.label}</AppText>
            ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>)}
            
            <MaterialCommunityIcons 
            name="chevron-down" 
            size={20} 
            color={defaultStyle.colors.medium} 
            />  
            
        </View>
        </TouchableWithoutFeedback>
        <Modal  visible={modalVisible} animationType={"slide"} >
                    <Screen>
                        <Button title="Close" color="black" onPress={()=>setModalVisible(false)}/>
                            <FlatList
                                data={items}
                                keyExtractor={item =>item.value.toString() }
                                numColumns={numberOfColumn}
                                renderItem={({item})=>(
                                    <PickerItemComponent
                                        item={item}
                                        label={item.label}
                                        onpress={()=>
                                        {
                                            setModalVisible(false);
                                            onSelectItem(item)
                                        }}/>
                                        
                                )}
                                />
                    </Screen> 
                    
        </Modal>
    </>
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
    text:
    {
        flex:1
    },
    placeholder:
    {
      color:defaultStyle.colors.medium,
      flex:1  
    }
    
})

export default AppPicker;