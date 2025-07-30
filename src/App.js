import React, {useState} from 'react';
import TodoBoard from './components/TodoBoard.js';

function App() {
  const [inputValue, setInputValue] = useState(""); //input에서 입력하는 값
  const [todoList, setTodoList] = useState([]); //할일 리스트
  const addItem = () => { //추가되는 아이템들. 기존꺼 유지하고 그 밑에 추가되게
    if (inputValue.trim() === "") return;
    setTodoList([...todoList, { text: inputValue, checked: false }]);
    setInputValue("");
  }
  const toggleCheck = (index) => {
    const updatedTodoList = todoList.map((item, i) =>
      i === index ? { ...item, checked: !item.checked } : item
    );
    setTodoList(updatedTodoList);
  };
  const deleteItem = (index) => {
    const updatedTodoList = todoList.filter((item, i) => i !== index);
    setTodoList(updatedTodoList);
  }
  
  return (
    <div className="App"  style={{
      width: "1000px",
      height:"875px",
      margin: "0 auto",
      backgroundImage: "url('/cont.png')", 
      backgroundSize: "cover",            
      backgroundPosition: "center",
      padding: "20px 50px"
    }}>
      <div style={{display:"flex"}}>
        <h1 style={{color: "#557B8E", fontSize:"50px"}}>TO DO LIST</h1>
        <div style={{margin: "55px 0 0 55px"}}>
          <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} style={{width:"200px", height:"28px", marginRight:"10px",border:"1px solid #557B8E", outline: "none"}}></input>
          <button 
          onClick={addItem} 
          style={{width:"70px", 
          height:"32px", 
          border:"none", 
          backgroundColor:"#CAD6DB", 
          color:"#557b8e",
          fontSize: "18px",
          lineHeight:"30px"}}>
            Add
          </button>
        </div>
        
      </div>
      
      
      <TodoBoard
        todoList={todoList}
        deleteItem={deleteItem}
        toggleCheck={toggleCheck}
      />
    </div>
  );
}

export default App;
