import React, {useState} from 'react';
import Menu from "../components/Menu.jsx";
import initialForm from "../components/inputForms/initialForm/initialForm.js";
import InputGroup from "../components/inputForms/inputGroup/InputGroup.jsx";

const InitialInputForm = () => {
    const [formState, setFormState] = useState({...initialForm})
    const handleOnChange = (e) => {
        setFormState((prev)=>({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }
    return (
        <div >
            <Menu/>
            <form>
                <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                    <InputGroup name={'title'} placeholder={'Software engineer'} label={'Title:'} value={formState.title} onChange={handleOnChange}/>
                    <InputGroup name={'bio'} placeholder={'I am a Software engineer.....'} label={'Bio:'} value={formState.bio} onChange={handleOnChange}/>
                    <InputGroup name={'skills'} placeholder={'JavaScript, React, NodeJs, ExpressJs'} label={'Skills:'} value={formState.skills} onChange={handleOnChange}/>
                </div>
            </form>
        </div>
    );
};

export default InitialInputForm;