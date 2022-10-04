import React from "react";

function ToDoItem({todo, text, toDos, setToDos}) {
    // Events
    function deleteHandler() {
        setToDos(toDos.filter((element) => element.id !== todo.id))
    };

    function completeHandler() {
        setToDos(toDos.map(item => { 
            if(item.id === todo.id) {
                return {
                    ...item, completed: !item.completed // '...' passing/returning all the other properties of item
                }
            } else {
                return item;
            } 
        }))
    }

    return (
        <div className="todo">
            <li className='todo-item' style={{textDecoration: `${todo.completed ? 'line-through': 'none'}`}}>{text}</li>
            <button className="remove-btn" onClick={deleteHandler}>Remove</button>
            <button className="complete-btn" onClick={completeHandler}>Completed</button>
        </div>
    )
}

export default ToDoItem;