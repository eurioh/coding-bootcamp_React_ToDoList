import React, {useState} from "react";
import TodoItem from "./ToDoItem";



function App() {
  const [inputText, setInputText] = useState("");
  //giving an empty array to contain todolist items
  const [items, setItems] = useState([]);

  function handleChange(event){
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem(){
    setItems((prevItems) => {
      return [...prevItems, inputText]});
      
    setInputText("");
    }


  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText}/>
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        {/* this is where you display the list items in an array*/}
        <ul>
        {items.map(todoItem => (<TodoItem text={todoItem}/>))}
          
        </ul>
      </div>
    </div>
  );
}

export default App;
