import React from 'react';
import { Image, ImageBackground,StyleSheet,Text, View } from 'react-native';
import AppButton from '../component/AppButton';
import colors from '../config/colors';

function WelcomeScreen({navigation}) {
    return (
        
        <ImageBackground 
        blurRadius={2}
        style={styles.background}
        source={require("../assets/homescreen.jpg")}>
       <View style={styles.logocontainer}>
            <Image style={styles.logo} source ={require("../assets/sell.png")} /> 
            <Text style={styles.caption}>Sell What You Don't Need</Text>
        </View>
       
       <View style={styles.buttonContainer}>
            <AppButton title="Login" onpress={()=>navigation.navigate("Login")}/> 
            <AppButton title="Register" onpress={()=>navigation.navigate("Register")} color ="secondary" />
        </View>

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex:1,
    justifyContent:"flex-end" ,
    alignItems: "center" },

    buttonContainer: {
        margin:20,
        width:"100%",
        
    },
    
    logo:
    {
        width:60,
        height:60,
    
    
    },
    caption:
    {
        padding:10,
        color:colors.white,
        fontWeight:"bold",
        fontSize:20
    },
    logocontainer:
    {
        position:"absolute",
        top:50,
        alignItems:"center"
    }
    
})

export default WelcomeScreen;