import { useEffect, useState } from "react";
import TodoHeader from "./components/TodoHeader/TodoHeader";
import TodoItem from "./components/TodoHeader/TodoItem/TodoItem";

const initialTodos = [];

const App = () => {
  const [todos, setTodos] = useState(initialTodos);

 
 

  // Получние данных из LocalStorage
  useEffect(() => {
    if(localStorage.getItem('todos') !== null){
      setTodos(JSON.parse(localStorage.getItem('todos')))
    }
  }, []);

  return (
    <div className="container">
      <TodoHeader setTodos={setTodos} />

      {/* Все задачи */}
      <div className="todos">
        {/* Одна задача */}
        {todos.map((todo) => (
          <TodoItem setTodos={setTodos} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default App;
