import React from 'react';
import { View,StyleSheet, FlatList } from 'react-native';
import ListItem from '../component/ListItem';
import Screen from '../component/Screen'
import Icon from '../component/Icon'
import colors from '../config/colors'
import ListItemSeperator from '../component/ListItemSeperator';

const menuItems = [
    {
        title:"My Listings",
        icon:{
            name:"format-list-bulleted",
            backgroundColor:colors.primary
        }
    },
    {
        title:"My Messages",
        icon:{
            name:"email",
            backgroundColor:colors.secondary
        },
        targetScreen:"Messages",
    },
     
    {
        title:"My Friends",
        icon:{
            name:"group",
            backgroundColor:colors.medium
        },
        targetScreen:"Friends",
    },
]

function AccountScreen({navigation}) {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem 
                title="Emmanuel Sabu" 
                subtitle="emmanuelsabu07@gmail.com"
                image ={require("../assets/homescreen.jpg")}>
                </ListItem>
             </View>
             <View style={styles.container}>
                 <FlatList
                 data={menuItems}
                 keyExtractor={menuItem=>menuItem.title}
                 renderItem ={({item})=>
                    <ListItem
                        title={item.title}
                        IconComponent={
                            <Icon 
                            name={item.icon.name}
                            backgroundColor={item.icon.backgroundColor}/>
                        }
                        onpress={()=>navigation.navigate(item.targetScreen)}
                        />}
                        ItemSeparatorComponent={ListItemSeperator}
                        />
             </View>
             <View>
                 <ListItem title="LogOut" IconComponent=
                 {
                 <Icon name="logout"backgroundColor="orange">

                 </Icon>} />
             </View>
        </Screen>
    );
}
const styles = StyleSheet.create({
    container:
    {
        marginVertical:10
    },
    screen:
    {
        backgroundColor:colors.cream
    }
    
})

export default AccountScreen;
