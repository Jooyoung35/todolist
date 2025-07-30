import React from 'react';

function TodoItem({ item, index, toggleCheck }) {
  return (
    <div style={{
      // display: "flex",
      // alignItems: "center",
      // justifyContent: "center",
      // gap: "10px",
    }}>
      <input
        type="checkbox"
        checked={item.checked}
        onChange={() => toggleCheck(index)}
        style={{marginRight:"10px"}}
      />
      <span style={{
        textDecoration: item.checked ? "line-through" : "none",
        color: item.checked ? "#aaa" : "#000",
        fontSize: "24px",
        color:"#557b8e"
      }}>
        {item.text}
      </span>
    </div>
  );
}

export default TodoItem;
