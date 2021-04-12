import React, { useEffect } from 'react';
import {View,StyleSheet, Image, TouchableWithoutFeedback, Alert} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import colors from '../config/colors';
import * as ImagePicker from 'expo-image-picker';

function ImageInput({imageUri,onChangeImage}) 
{
    useEffect(()=>{
        requestPermission();
      },[]);
    const requestPermission=async()=>
  {
    const result= await ImagePicker.requestCameraPermissionsAsync();
    if(!result.granted)
      alert("You need to give permission ");
  }
    const handlePress=()=>
    {
        if(!imageUri) selectImage();
        else
        Alert.alert("Delete","Do you want to delete this image?",[
            {text:"yes",onPress:()=>onChangeImage(null)},
            {text:"No"}
        ])
    }
    const selectImage=async()=>{
        try {
          const result=await ImagePicker.launchImageLibraryAsync({
              mediaTypes:ImagePicker.MediaTypeOptions.Images,
                quality:0.5});
          if(!result.cancelled)
          {
            onChangeImage(result.uri);
          }
        } catch (error) {
          console.log("Error reading an image",error )
        }
        }
return (
    
    <TouchableWithoutFeedback onPress={handlePress}>
        <View style={styles.container}> 
            {!imageUri&&<MaterialCommunityIcons color={colors.medium} name="camera" size={40}/>}
            {imageUri&&<Image style={styles.image} source={{uri:imageUri}}/>}
        </View>
    </TouchableWithoutFeedback>
 );
}

const styles = StyleSheet.create({
container:{
    backgroundColor:colors.light,
    height:100,
    width:100,
    borderRadius:15,
    alignItems:"center",
    justifyContent:"center",
    overflow:"hidden"

},
    image:
    {
        width:"100%",
        height:"100%",
    }
})

export default ImageInput;