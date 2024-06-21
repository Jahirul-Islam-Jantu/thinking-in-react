import React from 'react';
const tasks = {
    id: "unique-id-001",
    subtitle: "Subtitle",
    tags: [
        {
            id: "unique-id-001",
            text: "It's Done",
            icon: "T",
        },
        {
            id: "unique-id-002",
            text: "It's Cancelled",
            icon: "C",
        },
        {
            id: "unique-id-003",
            text: "It's in Progress",
            icon: "P",
        },
        {
            id: "unique-id-004",
            text: "Just wrote this",
            icon: "C",
        }
    ],
    comments: [{
        id: "comment-id-001",
        user: {
            avatar: "xyz.com",
            name: "Viraj",
            id: "user-id-001",
        },
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi consequatur cum delectus eius id libero non provident, reiciendis voluptas voluptate."


    }],
    tasks: [
        {
            id: "task-id-001",
            title:"Foggy Nelson",
            text: "Here to clean the streets of hells kitchen",
            status: "done"
        },
        {
            id: "task-id-002",
            title:"Louis CK",
            text: "Here to clean the streets of hells kitchen",
            status: "cancelled"
        },
        {
            id: "task-id-003",
            title:"Albart Einstain",
            text: "Here to clean the streets of hells kitchen",
            status: "progress"
        },
        {
            id: "task-id-004",
            title:"Albart Hiccup",
            text: "Here to clean the streets of hells kitchen",
            status: "progress"
        }
    ]

}





const ToDoApp = () => {
    return (
        <div>
            <h1>Home Page</h1>
            <p></p>
        </div>
    );
};

export default ToDoApp;