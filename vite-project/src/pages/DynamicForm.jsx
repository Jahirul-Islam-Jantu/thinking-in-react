import React from 'react';
import Menu from "../components/Menu.jsx";
import useForm from "../hooks/useForm.js";
import InputGroup from "../components/inputForms/inputGroup/InputGroup.jsx";
import BaseButton from "../components/inputForms/button/BaseButton.jsx";


        const init= {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
        }


const validate = (values) => {
    const errors = {};

    if (!values.firstName) {
        errors.firstName = 'First Name is Required';
    }

    if (!values.lastName) {
        errors.lastName = 'Last Name is Required';
    }

    if (!values.email) {
        errors.email = 'Email is Required';
    }

    if (!values.password) {
        errors.password = 'Password is Required';
    } else if (values.password.length < 6) {
        errors.password = 'Password length must be 6 character';
    }

    return errors;
};


const DynamicForm = () => {
       const {formState, handleSubmit, handleFocused, handleBlur, handleChange, clear} =  useForm({init, validate})
        const cb = ({hasError, values,errors}) => {
            if(hasError){
                alert("[ERROR]" + JSON.stringify(errors))
            }else  {
                alert("[SUCCESS]" + JSON.stringify(values))
            }
        }

    return (
        <div>
            <Menu/>
            <h1>Custom Hook Dynamic Form</h1>
            <form onSubmit={(e) => handleSubmit(e, cb)}>
                <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                    <InputGroup name={'firstName'} placeholder={'example: John'} label={'First name: '}
                                value={formState.firstName.value} error={formState.firstName.error} onChange={handleChange}
                                onFocus={handleFocused} onBlur={handleBlur}/>
                    <InputGroup name={'lastName'} placeholder={'example: Doe '} label={'Last Name:'}
                                value={formState.lastName.value} error={formState.lastName.error} onChange={handleChange} onFocus={handleFocused}
                                onBlur={handleBlur}/>
                    <InputGroup name={'email'} placeholder={'abcd@yahoo.com '} label={'Email: '}
                                value={formState.email.value} error={formState.email.error} onChange={handleChange} onFocus={handleFocused}  onBlur={handleBlur}/>
                    <InputGroup name={'password'} placeholder={'********'} label={'Password'}
                                value={formState.password.value} error={formState.password.error} onChange={handleChange} onFocus={handleFocused}  onBlur={handleBlur}/>
                   <div>
                       <BaseButton type="submit">Submit</BaseButton>
                       <BaseButton type="reset" onClick={clear}>clear</BaseButton>

                   </div>
                </div>
            </form>
        </div>
    );
};

export default DynamicForm;