import React from 'react';
import { Text,StyleSheet,TouchableOpacity } from 'react-native';
import colors from '../config/colors';
function AppButton({title,onpress,color="primary"}) {
    return (
        <TouchableOpacity onPress={onpress}
         style={[styles.buttons,{backgroundColor:colors[color]}]}> 
          <Text style={styles.text}>{title}</Text> 
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    buttons:{
        width:'100%',
        height:30,
        borderRadius:25,
        justifyContent:"center",
        alignItems:"center",
        marginVertical:10,
        padding:20
        
    },
    text:{
    fontSize:15,
    fontWeight:"bold",
    color:"white", 
    textTransform:"uppercase"

}    
})
export default AppButton;