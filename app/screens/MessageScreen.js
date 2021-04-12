import React,{useState} from 'react';
import { FlatList,StyleSheet, View} from 'react-native';
import ListItem from '../component/ListItem';
import Screen from '../component/Screen'
import ListItemSeperator from '../component/ListItemSeperator'
import ListItemDeleteAction from '../component/ListItemDeleteAction';

const initialMessages = [
    {
        id:1,
        title:'T1 ',
        description:'D1', 
        image : require("../assets/homescreen.jpg")
    },
     {
        id:2,
        title:'T2',
        description:'D2', 
        image:require("../assets/homescreen.jpg")
    }];
function MessageScreen(props) {
    const [messages, setMessages] = useState(initialMessages);
    const [refreshing,setrefreshing] = useState(false)


    const handleDelete = (message) =>{
        // console.log("msg:"+JSON.stringify(message));
        const data = messages.filter((m)=>m.id !== message.id);
        setMessages(data);

    } ;
     
    return (
        <Screen >
        <FlatList 
        data={messages}
        keyExtractor={(message => message.id.toString())}
        renderItem={({item})=><ListItem 
            title={item.title}
            subtitle={item.description} 
            image={item.image} 
            onpress={()=>console.log(item.id)} 
            renderrightactions={()=><ListItemDeleteAction onpress={()=>handleDelete(item)} />}/>
        }
        ItemSeparatorComponent={ListItemSeperator}
        refreshing={refreshing}
        onRefresh={()=> {
            setMessages([
                {
                    id:2,
                    title:'T2',
                    description:'D2', 
                    image:require("../assets/homescreen.jpg")
                },
            ])
        }}
         />
         </Screen>
    );
}
const styles = StyleSheet.create({
    screen:
    {
    },

})

export default MessageScreen;