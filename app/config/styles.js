import { Platform } from 'react-native';
import colors from '../config/colors'

export default{
    text:
    {   
        width:"100%",
        fontSize:18,
        fontFamily:Platform.OS==="android"?"Roboto":"Avenir",
        color:colors.dark
    },
    colors:colors
}

