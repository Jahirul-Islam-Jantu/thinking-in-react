import React, {useState} from 'react';

const Table = ({contacts}) => {
    const [filter, setFilter] = useState('All')
    const handleChange = (e) => {
        setFilter(e.target.value)
    }

    let filterContacts = [];
    if (filter === "All"){
        filterContacts = contacts;
    }else {
        filterContacts = contacts.filter((contact) => contact.group === filter )

    }
    const [search, setSearch] = useState('')

    return (
        <>
            <div>
                Filter:
                <select value={filter} onChange={handleChange}>
                    <option value="All">All</option>
                    <option value="">None</option>
                    <option value="Home">Home</option>
                    <option value="Office">Office</option>
                </select>
                <input value={search} onChange={(e)=> setSearch(e.target.value}) type="search" placeholder="search" />
            </div>
            <div style={{
                padding: "1rem",
                width: "50%",
                margin: "0 auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}>
            <table>
                <thead>
                <tr>
                    <th> Name </th>
                    <th> Email </th>
                    <th> Group </th>
                </tr>
                </thead>
                <tbody>
                {filterContacts.map((contact, id) => (
                    <tr key={id}>
                        <td style={{padding: '1rem'}}>{contact.name}</td>
                        <td style={{padding: '1rem'}}>{contact.email}</td>
                        <td style={{padding: '1rem'}}>{contact.group}</td>

                    </tr>
                ))}
                </tbody>
            </table>
        </div>
        </>
    );
};

export default Table;