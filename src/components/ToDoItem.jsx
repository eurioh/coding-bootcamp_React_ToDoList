import React, {useState} from "react";

function TodoItem(props){
    const [isDone, setIsDone] = useState(false);

    function handleClick(){
        setIsDone(prevValue => !prevValue);
    }

  return (
    <div onClick={handleClick}>
        <li style={{textDecoration: isDone && "line-through"}}>{props.text}</li>
    </div>);
}

export default TodoItem;