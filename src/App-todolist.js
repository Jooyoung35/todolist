import React, {useState} from 'react';
import TodoBoard from './components/TodoBoard.js';

function App() {
  const [inputValue, setInputValue] = useState(""); //input에서 입력하는 값
  const [todoList, setTodoList] = useState([]); //할일 리스트
  const addItem = () => { //추가되는 아이템들. 기존꺼 유지하고 그 밑에 추가되게
    setTodoList([...todoList, inputValue]);
  }
  const deleteItem = (index) => {
    const updatedTodoList = todoList.filter((item, i) => i !== index);
    setTodoList(updatedTodoList);
  }
  return (
    <div className="App"  style={{
      width: "800px",
      margin: "30px auto 0",
      textAlign: "center"
    }}>
      <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} style={{width:"200px", height:"28px", marginRight:"10px",border:"1px solid #dadadaff"}}></input>
      <button onClick={addItem} style={{width:"80px", height:"30px", border:"none", backgroundColor:"#dceafdff"}}>추가</button>
      <TodoBoard todoList ={todoList} deleteItem={deleteItem}/>
    </div>
  );
}

export default App;
