import React from 'react';

import AppTextInput from '../AppTextInput';
import ErrorMessage from './ErrorMessage';

import {useFormikContext} from 'formik'

function AppFormField({name,width,...otherprops}) {
    const{handleChange,setFieldTouched,errors,touched}=useFormikContext();
    return (
            <>
            <AppTextInput 
                // icon="email" 
                // placeholder="Email"
                // autoCapitalize="none"
                // autoCorrect={false} 
                // keyboardType="email-address"
                // textContentType="emailAddress"
                onBlur={()=>setFieldTouched(name)} 
                onChangeText={handleChange(name)}
                width={width}
                {...otherprops}
                         
                 />
                 <ErrorMessage error={errors[name]} visible={touched[name]} />
            </>
    );
}

export default AppFormField;