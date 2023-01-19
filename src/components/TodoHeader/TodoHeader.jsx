import { useState } from "react";

const TodoHeader = ({ setTodos }) => {
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
        date: new Date(),
        checked: false,
      });

      localStorage.setItem('todos', JSON.stringify(prev))

      return prev;
    });

    setValue("");
  };

  return (
    <div className="header">
      <form onSubmit={(e) => onSubmitHandle(e)}>
        <h2>Добавить задачу</h2>
        <input
          className="header-input"
          type="text"
          placeholder="купить молоко..."
          onChange={(e) => onChangeHandle(e)}
          value={value}
        />
      </form>
    </div>
  );
};

export default TodoHeader;
