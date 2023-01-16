import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  const [skills, setSkills] = useState(["front-end", "Back-End", "CI/CD"]);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const onChangeFromHandle = (e) => {
    setForm((prevState) => {
        prevState = {...form};
        prevState[e.target.name] = e.target.value
        return prevState;
    });
  };

  const onChangeHandle = (e) => {
    setName(e.target.value);
    setCount(e.target.value.length);
  };

  const onSubmitAddSkill = (e) => {
    if (e.keyCode === 13) {
      setSkills((prev) => {
        return [...prev, e.target.value];
      });
      e.target.value = "";
    }
  };

  return (
    <div className="">
      <p>Вы нажали на меня {count} раз(а)</p>
      <button onClick={() => setCount((prev) => prev + 1)}>+1</button>

      <button onClick={() => setCount(count + 5)}>+5</button>

      <br />

      <h1>Привет, {name}!</h1>
      <input type="text" onChange={(e) => onChangeHandle(e)} />

      <br />
      <br />

      <input type="text" onKeyDown={(e) => onSubmitAddSkill(e)} />
      <ul>
        {skills.map((skill) => (
          <li>{skill}</li>
        ))}
      </ul>

      <br />
      <br />
      <hr />

      <form onSubmit={(e) => e.preventDefault()}>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          onChange={(e) => onChangeFromHandle(e)}
          value={form.email}
        />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          onChange={(e) => onChangeFromHandle(e)}
          value={form.password}
        />
        <button>Отправить форму</button>
      </form>
    </div>
  );
};

export default App;
