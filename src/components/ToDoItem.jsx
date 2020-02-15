import React, {useState} from "react";

function TodoItem(props){
    const [isDone, setIsDone] = useState(false);

    function handleClick(){
        setIsDone(prevValue => !prevValue);
    }

  return (
    <div onClick={()=>{props.onChecked(props.Id);}}>

        <li>{props.text}</li>
    </div>);
}

export default TodoItem;