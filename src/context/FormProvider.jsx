import React, { useState } from 'react';
import { createContext } from 'react';

export const Form = createContext(null);

function FormProvider({children}) {
    const initialFormData = Object.freeze({
        firstname:"",
        lastname:"",
        username: "",
        email:"",
        adress:"",
        number:"",
      });

    const [formData, updateFormData] = useState(initialFormData);
    
    const getDataForm = (e) => {
        updateFormData({
          ...formData,
          [e.target.name]: e.target.value.trim()
        });
      };
     


      return (
        <>
        <Form.Provider value={{getDataForm, formData}}>
            {children}
        </Form.Provider>
        </>
    )
  
}

export default FormProvider