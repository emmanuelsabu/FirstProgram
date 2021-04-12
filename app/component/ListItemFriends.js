import React from 'react';
import {View,StyleSheet,Image,Text} from 'react-native';
import colors from '../config/colors';

function ListItemFriends({imageUrl,firstName,email}) {
return (
<View style={styles.container}> 
<Image style={styles.imagestyle} source={{uri:imageUrl}}></Image>
            <View style={styles.titlecontainer}>
            <Text style={styles.title}  >{firstName}</Text>
            <Text style={styles.subtitle}  >{email}</Text>
            </View> 
</View>
 );
}

const styles = StyleSheet.create({
container:{
    flexDirection:"row",
        padding:20,
        backgroundColor:colors.white,
        alignItems:"center"
},
titlecontainer:
{
    flex:1,
    marginHorizontal:10,
    justifyContent:"center"

},
imagestyle:
{
    width:100,
    height:100
}
})

export default ListItemFriends;