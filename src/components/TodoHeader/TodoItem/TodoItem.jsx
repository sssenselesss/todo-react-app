import formatDate from "../../../utils/formatDate";

const TodoItem = ({ setTodos, todo }) => {

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
    <div className="todo">
      <h3>
        {todo.name} ({todo.data.toLocaleDateString("ru")})
      </h3>
      <div className="todo_buttons">
        <button onClick={() => onCheckedToggle(todo.id)} className="accept">
          {todo.checked ? "Не выполне на" : "Выполнена"}
        </button>
        <button onClick={() => onDeleteTodoById(todo.id)} className="delete">
          Удалить
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
