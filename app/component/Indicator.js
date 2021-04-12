import React from 'react';
import { Text, StyleSheet,View } from 'react-native';
import LottieView from 'lottie-react-native';

function Indicator({visible}) {
    if (!visible) return null;

    return (
        <View style={styles.container}>
        <LottieView source={require('../assets/animations/sample.json')} autoPlay loop  />
        </View>
    );
}
const styles = StyleSheet.create({
   container:
   {
       width:"100%",
       height:100
   } 
})

export default Indicator;