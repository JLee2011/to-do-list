import React, {useState} from 'react';
import './App.css';
// importing components
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';

function App() {
  
  const [inputText, setInputText] = useState("");  // store/set state of input field
  const [todos, setTodos] = useState([]); // state of items in ToDoList

  return (
    <div className="App">
      <header>
        <h1>Jason's To Do List</h1>
      </header>
      <ToDoForm setInputText={setInputText} todos={todos} setTodos={setTodos}/>    
      <ToDoList />
    </div>
  );
}

export default App;
