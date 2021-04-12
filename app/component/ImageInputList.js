import React, { useRef } from 'react';
import {View,StyleSheet, ScrollView} from 'react-native';
import ImageInput from './ImageInput';

function ImageInputList({imageUris=[],addImage,removeImage}) {
    const scrollView=useRef();
return (
<View> 
<ScrollView
    horizontal={true} 
    ref={scrollView} 
    onContentSizeChange={()=>scrollView.current.scrollToEnd()}>
<View style={styles.container}> 
    {imageUris.map((uri)=>(
        // to add style to the Image Input ,we add View here
    <View key={uri} style={styles.image} > 
    <ImageInput 
        imageUri={uri}          
        onChangeImage={()=>removeImage(uri)}/>
        </View>))}
    
    <ImageInput onChangeImage={(uri)=>addImage(uri)}/>
</View>
</ScrollView>
</View>
 );
}

const styles = StyleSheet.create({
container:
{
    flexDirection:"row"
},
image:
{
    marginRight:10
}
})

export default ImageInputList;