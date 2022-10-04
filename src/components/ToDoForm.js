import React from "react";
// import id generator
import { v4 as uuidv4 } from "uuid";

const ToDoForm = ({inputText, setInputText, toDos, setToDos}) => { // {setInputText} gives access to setInputText property in App.js

    // Events
    const inputTextHandler = (e) => {
        // console.log(e.target.value )
        setInputText(e.target.value) 
    }

    const submitToDoHandler = (e) => {
        e.preventDefault(); // prevent app from rendering/refresh page when clicking on 'add' button 
        setToDos([
            ...toDos, {text: inputText, completed: false, id: uuidv4()} // '...' passing toDos already in list
        ]);
        setInputText(""); // setting inputText state back to ""
    }

    return(

        <form className="todo-form" >
            <input 
                onChange={inputTextHandler} // calls function inputTextHandler 
                className="todo-input"
                type="text" 
                value={inputText}  // need value property to keep inputText in line with state 
                placeholder="add task"
                />
            <button className="todo-button" type="submit" onClick={submitToDoHandler}>Add</button>
        </form>
    )
}

export default ToDoForm;
