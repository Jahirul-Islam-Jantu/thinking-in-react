import React, {useState} from 'react';
import MasterLayOut from "../components/MasterLayOut.jsx";


const ContactFormInitValue = {
    name: '',
    email: '',
}
// const Table = ({contacts})=>{
//     return (
//         <table>
//             <thead>
//                 <tr>
//                     <th> Name </th>
//                     <th> Email </th>
//                 </tr>
//             </thead>
//             <tbody>
//             {contacts.map((contact, index) =>(
//                 <tr key={index}>
//                     <td>{contact.name}</td>
//                     <td>{contact.email}</td>
//                 </tr>
//             ))}
//             </tbody>
//         </table>
//     )
// }

const ContactApp = ({getData, contacts }) => {
    const [values, setValues] = useState({...ContactFormInitValue});
    const {name, email} = values;
    const handleInputChange = (e)=>{
        setValues({
            ...values,
            [e.target.name]: e.target.value
            });

    }
    const submitHandler = (e)=>{
        e.preventDefault();
        getData(values)

    }


    return (
        <div style={{ padding: "1rem", width: "50%", margin: "0 auto" }}>
            <MasterLayOut/>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="name"> Name: </label>
                    <input onChange={handleInputChange} id="name" name="name" type="text" value={name}/>
                </div>
                <div>
                    <label htmlFor="email"> Email: </label>
                    <input onChange={handleInputChange} type="text" id="email" name="email" value={email}/>
                </div>
                <br/>
                <input type="submit" value={"Create new contact"} />
            </form>
            <div>
                <table>
                    <thead>
                    <tr>
                        <th> Name</th>
                        <th> Email</th>
                    </tr>
                    </thead>
                    <tbody>
                    {contacts.map((contact, index) => (
                        <tr  key={index}>
                            <td style={{ padding: '1rem'}}>{contact.name}</td>
                            <td style={{ padding: '1rem'}}>{contact.email}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ContactApp;