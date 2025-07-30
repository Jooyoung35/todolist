import React from 'react';
import TodoItem from './TodoItem.js';

function TodoBoard(props){

  return(
    <div style={{
      width: "800px"
    }}>
      <ul style={{listStyle:"none"}}>
        {props.todoList.map((item, index) => (
          <li key={index} style={{marginBottom:"10px"}}>
            <TodoItem 
              item={item}
              index={index}
              toggleCheck={props.toggleCheck}
            />
            <button 
            onClick={() => props.deleteItem(index)}
            style={{
              width:"40px", 
              height:"27px", 
              border:"none", 
              backgroundColor:"#525a61ff", 
              color:"#e6ecf1ff",
              fontSize: "14px",
              lineHeight:"27px",
              margin: "7px 0 0 28px"
            }}
            >삭제</button>
          </li>
          ))}
      </ul>
    </div>
  );
}

export default TodoBoard;