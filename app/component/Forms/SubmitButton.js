import React from 'react';
import AppButton from '../AppButton'

import {useFormikContext} from 'formik'

function SubmitButton(title,onpress) {
    const{handleSubmit}=useFormikContext();
    return (
        <AppButton title="Login"  onpress={handleSubmit} color="primary"/>

    );
}

export default SubmitButton;