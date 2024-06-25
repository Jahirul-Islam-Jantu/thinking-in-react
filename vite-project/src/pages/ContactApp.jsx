import {useState} from "react";
import ContactForm from "../components/contactApp/ContactForm.jsx";
import Table from "../components/contactApp/Table.jsx";
import MasterLayOut from "../components/MasterLayOut.jsx";

const ContactApp = () => {
    const [contacts, setContacts] = useState([]);
    const getData = (values)=>{
        setContacts([].concat(contacts, values));
    }

    return (
       <div style={{ display: "flex", justifyContent: "center", alignItems:'center', flexDirection: 'column' , flexGrow: 3 }}>
           <MasterLayOut/>
           <ContactForm getData={getData} />
           <Table contacts={contacts} />
       </div>
    );
};

export default ContactApp;