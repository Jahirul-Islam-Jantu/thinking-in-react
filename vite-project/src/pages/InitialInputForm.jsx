import React, {useState} from 'react';
import Menu from "../components/Menu.jsx";
import initialForm from "../components/inputForms/initialForm/initialForm.js";
import InputGroup from "../components/inputForms/inputGroup/InputGroup.jsx";
import BaseButton from "../components/inputForms/button/BaseButton.jsx";


const InitialInputForm = () => {
    const [formState, setFormState] = useState({...initialForm})
    const [errors, setErrors] = useState({...initialForm})
    const [focuses, setFocuses] = useState({
        title: false,
        bio: false,
        skills: false,
    })

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
        setFocuses((prev) => ({
            ...prev,
            [e.target.name]: true,
        }))
    }

    const handleBlur = (e)=>{
        const key = e.target.name;
        const {isValid, errors} = checkValidity(formState)
        if (errors[key] && focuses[key] === true ){
            setErrors(prev => ({...prev, [key]: errors[key]}))
        } else {
            setErrors(prev => ({...prev, [key]: ""}))
        }
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
    console.log(formState)

    return (
        <div >
            <Menu/>
            <form onSubmit={handleOnSubmit}>
                <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                    <InputGroup    name={'title'} placeholder={'Software engineer'} label={'Title:'} value={formState.title} error={errors.title} onChange={handleOnChange} onFocus={handleFocus} onBlur={handleBlur}/>
                    <InputGroup   name={'bio'} placeholder={'I am a Software engineer.....'} label={'Bio:'} value={formState.bio}   error={errors.bio} onChange={handleOnChange} onFocus={handleFocus} onBlur={handleBlur}/>
                    <InputGroup  name={'skills'} placeholder={'JavaScript, React, NodeJs, ExpressJs'} label={'Skills:'} value={formState.skills} error={errors.skills} onChange={handleOnChange} onFocus={handleFocus} onBlur={handleBlur} />
                    <BaseButton type="submit" >Submit</BaseButton>
                </div>
            </form>
        </div>
    );
};

export default InitialInputForm;