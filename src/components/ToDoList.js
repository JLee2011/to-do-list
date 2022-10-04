import React from "react";
// import component
import ToDoItem from './ToDoItem';

function ToDoList({toDos, setToDos}) {

    return(
        <div className="todo container">
            <ul className="todo-list">
                {toDos.map(todo => (
                    <ToDoItem 
                        text={todo.text} 
                        key={todo.id}
                        toDos={toDos} 
                        setToDos={setToDos} 
                        todo={todo}/>
                ))}
            </ul>
        </div>
    );
};

export default ToDoList;