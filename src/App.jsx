import { useState } from "react";

const formatDate = (date) =>{
  const year = date.getFullYear();
  const mounth = date.getMonth();
  const day = date.getDay();

  return `${day}.${mounth}.${year}`;
}

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, name: "Купить пиво", data: new Date(), checked: false },
    { id: 2, name: "Купить еще пива", data: new Date(), checked: false },
  ]);

  const [value, setValue] = useState("");

  const onChangeHandle = (e) => {
    setValue(e.target.value);
  };

  const onSubmitHandle = (e) => {
    e.preventDefault();

    setTodos((prev) => {
      prev = [...prev];

      prev.push({
        id: Date.now(),
        name: value,
        data: new Date(),
        checked: false,
      });

      return prev;
    });

    setValue('');
  };

  const onCheckedToggle = (id) => {
    setTodos((prev) => {
      prev = [...prev];

      prev = prev.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            checked: !todo.checked,
          };
        }

        return todo;
      });
      return prev;
    });
  };

  // Функция удаления из массива по ID
  const onDeleteTodoById = (id) => {
    setTodos((prev) => {
      prev = [...prev];

      prev = prev.filter((todo)=> todo.id !== id);


      return prev;
    });
  };

  return (
    <div className="container">
      <div className="header">
        <form onSubmit={(e) => onSubmitHandle(e)}>
          <h2>Добавить задачу</h2>
          <input className="header-input"
            type="text"
            placeholder="купить молоко..."
            onChange={(e) => onChangeHandle(e)}
            value={value}
          />
        </form>
      </div>

      {/* Все задачи */}
      <div className="todos">
        {/* Одна задача */}
        {todos.map((todo) => {
          return (
            <div className="todo">
              <h3>
                {todo.name} ({todo.data.toLocaleDateString("ru")})
              </h3>
              <div className="todo_buttons">
                <button onClick={() => onCheckedToggle(todo.id)} className="accept">
                  {todo.checked ? "Не выполне на" : "Выполнена"}
                </button>
                <button onClick={() => onDeleteTodoById(todo.id)} className="delete">Удалить</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
