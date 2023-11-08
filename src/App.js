//import Todo  from "./components/Todo";
import TodoList from "./components/TodoList"
import Header from "./components/Header";
import From from "./components/From";
import { useState } from "react";
function App() {
  const [todo,setTodo] = useState("")
  const [todoList, setTodoList] = useState([]);
  return (
    <div className="App">
      <Header></Header>
      <From 
      todo={todo} 
      setTodo={setTodo} 
      todoList={todoList} 
      setTodoList={setTodoList}
      ></From>
      <TodoList setTodoList={setTodoList} todoList={todoList} />
    </div>
  );
}

export default App;
