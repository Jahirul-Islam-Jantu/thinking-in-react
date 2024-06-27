import React, {useState} from 'react';



const ContactFormInitValue = {
    name: '',
    email: '',
    group: '',
}

const ContactForm = ({getData }) => {
    const [values, setValues] = useState({...ContactFormInitValue});
    const {name, email, group} = values;
    const handleInputChange = (e)=>{
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });

    }
    const submitHandler = (e)=>{
        e.preventDefault();
        getData(values)
        setValues({...ContactFormInitValue});

    }


    return (
        <div >
            <div style={{ padding: "1rem", width: "50%", margin: "0 auto" , display: "flex", justifyContent:"center", flexDirection: "column", textAlign: "center" }}>
            <form onSubmit={submitHandler}>
                <div style={{ marginBottom: "1rem", display: "flex", justifyContent:"center", textAlign: "center"}}>
                    <label htmlFor="name"> Name: </label>
                    <input placeholder="Name" onChange={handleInputChange} id="name" name="name" type="text" value={name}/>
                </div>
                <div style={{marginBottom: "1rem", display: "flex", justifyContent:"center", textAlign: "center"}}>
                    <label  htmlFor="email"> Email: </label>
                    <input placeholder="Email" onChange={handleInputChange} type="text" id="email" name="email" value={email}/>
                </div>
                <div style={{marginBottom: "1rem", display: "flex", justifyContent:"center", textAlign: "center"}}>
                    <label htmlFor="group"> Group: </label>
                    <select id="group" name="group" value={group} onChange={handleInputChange}>
                        <option value="">Select Option</option>
                        <option value="home">Home</option>
                        <option value="office">Office</option>
                    </select>
                    
                </div>
                <br/>
                <br/>
                <input  type="submit" value={"Create new contact"} />
            </form>
            </div>

        </div>
    );
};

export default ContactForm;