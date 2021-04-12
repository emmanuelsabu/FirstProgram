import AsyncStorage from '@react-native-async-storage/async-storage';
// import {moment} from 'moment'; to reduce size we had used dayjs
import  dayjs from 'dayjs';

const prefix = 'cache';
const expiryTime = 5;
const store = async (key,value)=>
{
    try {
        const item ={
            value,
            timestamp:Date.now
        }
        console.log("value:"+JSON.stringify(value));
        await AsyncStorage.setItem(prefix + key,JSON.stringify(item));
    } 
    catch (error) {
        console.log(error);
    }
};
const isExpired = (item)=>
{
    const now = dayjs(Date.now);
    const storedTime = dayjs(item.timestamp);
    const isExpired = now.diff(storedTime,'minute')>expiryTime;
    return isExpired;
};
const get = async (key)=>
{
    try {
       const value = await AsyncStorage.getItem(prefix+key) ;
       const item = JSON.parse(value);

       if(!item) return null;


       if(isExpired(item))
       {
           try {
            await AsyncStorage.removeItem(key)
           } 
           catch (error) {
            console.log(error);   
           }
       }
    } 
    catch (error) {
        console.log(error);
    }
}

export default {store,get};