import React, {useState} from "react";
import TodoItem from "./ToDoItem";
import InputArea from "./InputArea";


function App() {
  
  //giving an empty array to contain todolist items
  const [items, setItems] = useState([]);


  function addItem(inputText){
    setItems(prevItems => {
      return [...prevItems, inputText]
    });
      
    setInputText("");
  }
    //changes in parent component
    function deleteItem(id){
       console.log(id);
        
      setItems((prevItems) => {
        return prevItems.filter((item, index)=>{
          return index !== id ; 
        })        
      })
    }
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea 
      onAdd={addItem}
      />
      <div>
        {/* this is where you display the list items in an array*/}
        <ul>
        {items.map((todoItem, index) => (
        <TodoItem 
        key={index}
        Id={index}  
        text={todoItem}
        onChecked = {deleteItem}
        />  
        ))}
          
        </ul>
      </div>
    </div>
  );
}

export default App;
