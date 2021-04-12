import React, { useState } from 'react';
import { Image,StyleSheet } from 'react-native';

import AppButton from '../component/AppButton';
import AppTextInput from '../component/AppTextInput';
import AppText from '../component/AppText';

import Screen from '../component/Screen'
import colors from '../config/colors';
import {Formik} from 'formik'
import * as Yup from 'yup'
import ErrorMessage from '../component/Forms/ErrorMessage';
import {AppForm,AppFormField,SubmitButton} from '../component/Forms/index'

const validationSchema = Yup.object().shape({
    name:Yup.string().required().min(3).label("Name"),
    email:Yup.string().required().email().label("Email"),
    password:Yup.string().required().min(4).label("Password")
});
function RegisterScreen(props) { return (
    <Screen style={styles.container}>
        <AppForm 
            initialValues={{name:"",email:"",password:""}}
            onSubmit={(value)=>console.log(value)}
            validationSchema={validationSchema}    
        >
        <AppFormField 
                         name="name"
                         icon="account" 
                         placeholder="Name"
                         autoCapitalize="words"
                         autoCorrect={false} 
                         keyboardType="default"
                      />

        <AppFormField 
                         name="email"
                         icon="email" 
                         placeholder="Email"
                         autoCapitalize="none"
                         autoCorrect={false} 
                         keyboardType="email-address"
                         textContentType="emailAddress"
                      />
             
        <AppFormField
            name="password" 
            icon="lock"
            placeholder="Password"
            autoCapitalize="none"
            textContentType="password"
            autoCorrect={false}
            secureTextEntry={true}/>

        <SubmitButton title="Login" />      
        </AppForm>
        
        

    </Screen>
);
}

const styles = StyleSheet.create({
container:
{
    padding:20
},
logo:
{
    width:80,
    height:80,
    alignSelf:"center",
    marginBottom:20,
    marginTop:50
}

})

export default RegisterScreen;