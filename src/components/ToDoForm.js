import React, {useState} from "react";

const ToDoForm = ({setInputText}) => { // {setInputText} gives access to setInputText property in App.js

    const inputTextHandler = (e) => {
        console.log(e.target.value)
        setInputText(e.target.value) 
    }

    const submitToDoHandler = (e) => {
        e.preventDefault(); // prevent app from rendering when clicking on 'add' button 
        
    }
    return(

        <form className="todo-form" >
            <input 
                onChange={inputTextHandler} // calls function inputTextHandler 
                className="todo-input"
                type="text" 
                placeholder="Add Todo" 
                />
            <button className="addtodo-button" type="submit" onClick={submitToDoHandler}>Add</button>
        </form>
    )
}

export default ToDoForm;
