import React, {useState} from 'react';
import './App.css';
// importing components
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';

function App() {
  
  const [inputText, setInputText] = useState("");  // store/set state of input field
  const [toDos, setToDos] = useState([]); // state of items in ToDoList

  return (
    <div className="App">
      <header>
        <h1>To Do List</h1>
      </header>
      <ToDoForm 
        inputText={inputText} 
        setInputText={setInputText} 
        toDos={toDos} 
        setToDos={setToDos}/>    
      <ToDoList toDos={toDos} setToDos={setToDos} />
    </div>
  );
}

export default App;
