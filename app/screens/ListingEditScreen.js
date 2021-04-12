import React, { useEffect, useState } from 'react';

import * as Yup from 'yup';
import {AppForm,AppFormField,AppFormPicker,SubmitButton} from '../component/Forms'
import Screen from '../component/Screen'
import CategoryPickerItem from '../component/CategoryPickerItem'
import FormImagePicker from '../component/Forms/FormImagePicker';
import * as Location from 'expo-location'
import useLocation from '../hooks/useLocation';

const validationSchema= Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    description:Yup.string().label("Description"),
    category: Yup.object().required().nullable().label("Category"),
    images:Yup.array().min(1,"Please Upload atleast 1 Pic ")
});

const categories=[
    {label:"Furniture",value:1,backgroundColor:"lightgreen",name:'email'},
    {label:"Clothing",value:2,backgroundColor:"lightblue",name:"lock"},
    {label:"Camera",value:3,backgroundColor:"yellow",name:"menu"},
    {label:"Vehicle",value:4,backgroundColor:"violet",name:"delete"}
];
function ListingEditScreen(props) {
    const location=useLocation();
    return (
       <Screen>
           <AppForm
            initialValues={{
                title:"",
                price:"",
                description:"",
                category:null,
                images:[]
            }}
            onSubmit={(values)=>console.log(location)}
            validationSchema={validationSchema} >
                
                <FormImagePicker name="images" />

                    <AppFormField 
                    maxLength={255} 
                    name={"title"} 
                    placeholder={"Title"}
                />
                <AppFormField
                    keyboardType="numeric"
                    maxLength={8}
                    name={"price"}
                    placeholder={"Price"}
                    width={120}
                />
                <AppFormPicker
                    items={categories}
                    name={"category"}
                    PickerItemComponent={CategoryPickerItem}
                    placeholder="Category"
                    width={"50%"}
                    numberOfColumn={3}
                />
                <AppFormField
                    maxLength={255}
                    numberOfLines={3}
                    name={"description"}
                    placeholder={"Description"}
                />
                <SubmitButton title="Login" />  
            </AppForm>
            
       </Screen>
    );
}

export default ListingEditScreen;