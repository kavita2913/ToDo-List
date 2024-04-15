import React, { useState } from 'react';
import ListCom from './ListCom';
import './todo.css'

const Todo = () => {
    const [item, setItem] = useState("");
    const [newItem, setNewItem] = useState([]);

    const itemEvent = (event) => {
        setItem(event.target.value);
    };

    // Check if the input field is empty
    const listItem = () => {
        if (item.trim() === "") {  // Show an alert if the input is empty
            alert("Please add items to the list");
            return; 
        }

        // Add the item to the list
        setNewItem((prevValue) => {
            return [...prevValue, item];
        });
        setItem("");
        // Clear the input field after adding the item
    };

    const cut = (id) => {
        console.log("delete");

        setNewItem((prevValue) => {
            return prevValue.filter((arrElem, index) => {
                return index !== id;
            });
        });
    };


    return (
        <div className='main_div'>
            <div className='center_div'>
                <h1>ToDo List</h1><br />
                <div className='input'>
                    <input
                        type='text'
                        value={item}
                        placeholder='Add an Item'
                        onChange={itemEvent}
                    />
                    <button className='newButton' onClick={listItem}>+
                    </button>
                </div>
                <br />
                <ol>
                    {newItem.map((val, index) => (
                        <ListCom key={index}
                            id={index}
                            text={val}
                            onSelect={cut}
                        />
                    ))}
                </ol>
                <br />
            </div>
        </div>
    );
}

export default Todo;
