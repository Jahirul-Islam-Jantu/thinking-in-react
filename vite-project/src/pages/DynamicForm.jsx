import React from 'react';
import Menu from "../components/Menu.jsx";
import useForm from "../hooks/useForm.js";


const DynamicForm = () => {
       const {formState} =  useForm({
            init: {
                name: "",
                email: "",
                password: "",
            }
        })
    console.log(formState)

    return (
        <div>
            <Menu/>
            <h1>Dynamic Form</h1>
        </div>
    );
};

export default DynamicForm;