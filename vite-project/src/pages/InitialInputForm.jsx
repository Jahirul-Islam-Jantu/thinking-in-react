import React, {useState} from 'react';
import Menu from "../components/Menu.jsx";
import initialForm from "../components/inputForms/initialForm/initialForm.js";
import InputGroup from "../components/inputForms/inputGroup/InputGroup.jsx";
import BaseButton from "../components/inputForms/button/BaseButton.jsx";


const InitialInputForm = () => {
    const [formState, setFormState] = useState({...initialForm})
    const [errors, setErrors] = useState({...initialForm})

    const handleOnChange = (e) => {
        setFormState((prev)=>({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }
    const handleOnSubmit = (e) => {
        e.preventDefault()
        const {isValid, errors} = checkValidity(formState)
        if (isValid){
            setErrors({...errors})
        }else{
            setErrors({...errors})
        }
    }

    const handleFocus = (e)=>{
        const {errors} = checkValidity(formState)
        setErrors({...errors})
    }

    const checkValidity = (formState)=>{

        const errors = {}
        const {title, bio, skills} = formState;
        if(!title){
            errors.title = "Title is required"
        }
        if(!bio){
            errors.bio = "Bio is required"
        }
        if(!skills){
            errors.skills = "Skill is required"
        }
        return {
            errors,
            isValid: Object.keys(errors).length === 0
        }
    }

    return (
        <div >
            <Menu/>
            <form onSubmit={handleOnSubmit}>
                <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                    <InputGroup onFocus={handleFocus} error={errors.title} name={'title'} placeholder={'Software engineer'} label={'Title:'} value={formState.title} onChange={handleOnChange}/>
                    <InputGroup onFocus={handleFocus} error={errors.bio} name={'bio'} placeholder={'I am a Software engineer.....'} label={'Bio:'} value={formState.bio} onChange={handleOnChange}/>
                    <InputGroup onFocus={handleFocus} error={errors.skills} name={'skills'} placeholder={'JavaScript, React, NodeJs, ExpressJs'} label={'Skills:'} value={formState.skills} onChange={handleOnChange}/>
                    <BaseButton type="submit" >Submit</BaseButton>
                </div>
            </form>
        </div>
    );
};

export default InitialInputForm;