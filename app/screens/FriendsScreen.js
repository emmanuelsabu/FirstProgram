import React, { useEffect, useState } from 'react';
import {View,StyleSheet, FlatList,} from 'react-native';
import { set } from 'react-native-reanimated';
import ListItemFriends from '../component/ListItemFriends';
import ListItemSeperator from '../component/ListItemSeperator';
import Screen from "../component/Screen";
import axios from 'axios';
import Indicator from '../component/Indicator';
import cache from '../utility/cache';

function FriendsScreen(props) {
  
    const [details,setDetails] = useState([]);
    const [loading,setLoading] = useState(true);
    const [id,setId] = useState(0);
    
    useEffect(()=>{     
  axios.get ('https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001')

       .then(function(response)
       { 
        //  console.log("res data:"+JSON.stringify(response.data));
        let newItem = (response.data);
        setLoading(false)
        setDetails(newItem);
        cache.store(id,response.data);
        // response.data.map((item) => {
        //   console.log("items:"+JSON.stringify(item));
        //   cache.store(item.id,item);
        // })
       }
       )
       .catch(function (error) {
                 console.log(error);

         const data =  cache.get(id);
         
        //  return data ;
      });
       
    },[]);

 
return (
<Screen>
{/* <ActivityIndicator animating ={loading} size={'small'} color="tomato" /> */}

    <Indicator visible={loading}/>

    <FlatList
       data={details}
       keyExtractor = {(item)=>item.id.toString()} 
       
       renderItem={({item})=>(
           <ListItemFriends
            imageUrl={item.imageUrl}
            firstName={item.firstName}
            email={item.email} />
       )}

       ItemSeparatorComponent={ListItemSeperator}
       />
    

</Screen>
 );
}

const styles = StyleSheet.create({
container:{}
})

export default FriendsScreen;