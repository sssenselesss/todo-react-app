import { useState } from "react";

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
    <div>
      <div >
        <form onSubmit={(e) => onSubmitHandle(e)}>
          <h2>Добавить задачу:</h2>
          <input
            type="text"
            placeholder="купить молоко..."
            onChange={(e) => onChangeHandle(e)}
            value={value}
          />
        </form>
      </div>

      {/* Все задачи */}
      <div>
        {/* Одна задача */}
        {todos.map((todo) => {
          return (
            <div>
              <h3>
                {todo.name} ({todo.data.toString()})
              </h3>
              <div>
                <button onClick={() => onCheckedToggle(todo.id)}>
                  {todo.checked ? "Не выполнена" : "Выполнена"}
                </button>
                <button onClick={() => onDeleteTodoById(todo.id)}>Удалить</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
