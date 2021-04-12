import React from 'react';
import {FormikContext, useFormikContext} from 'formik'

import AppPicker from '../AppPicker'
import ErrorMessage from './ErrorMessage';

function AppFormPicker({items,name,numberOfColumn,PickerItemComponent,placeholder,width}) {
    const {errors,setFieldValue,touched,values}= useFormikContext();
    return (
        <>
        <AppPicker
            items={items}
            numberOfColumn={numberOfColumn}
            onSelectItem={(item=>setFieldValue(name,item))}
            PickerItemComponent={PickerItemComponent}
            placeholder={placeholder}
            selectedItem={values[name]}
            width={width}

/>

        <ErrorMessage error={errors[name]} visible={touched[name]}/>
        </>
    );
}

export default AppFormPicker;