import { useState } from "react";
import TodoHeader from "./components/TodoHeader/TodoHeader";
import TodoItem from "./components/TodoHeader/TodoItem/TodoItem";



const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, name: "Купить пиво", data: new Date(), checked: false },
    { id: 2, name: "Купить еще пива", data: new Date(), checked: false },
  ]);

 

 

 

  return (
    <div className="container">

     <TodoHeader setTodos={setTodos}/>
      

      {/* Все задачи */}
      <div className="todos">
        {/* Одна задача */}
        {todos.map((todo) =><TodoItem setTodos={setTodos} todo={todo} /> )}
      </div>
    </div>
  );
};

export default App;
