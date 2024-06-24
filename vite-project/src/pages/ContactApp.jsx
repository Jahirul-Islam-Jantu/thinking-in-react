import React, {useState} from 'react';
import MasterLayOut from "../components/MasterLayOut.jsx";


const ContactFormInitValue = {
    name: '',
    email: '',
}

const ContactApp = () => {
    const [value, setValue] = useState({...ContactFormInitValue});
    const [name, email] = value
    const handleInputChange = (e)=>{
        setValue({...value, [e.target.name]: e.target.value});

    }


    return (
        <div style={{ padding: "1rem", width: "50%", margin: "0 auto" }}>
            <MasterLayOut/>
            <form>
                <div>
                    <label htmlFor="name"> Name: </label>
                    <input onChange={handleInputChange} id="name" name="name" type="text" value={name}/>
                </div>
                <div>
                    <label htmlFor="email"> Email: </label>
                    <input onChange={handleInputChange} type="email" value={email}/>
                </div>
                <input type="submit" value={"Create new contact"} />
            </form>
        </div>
    );
};

export default ContactApp;