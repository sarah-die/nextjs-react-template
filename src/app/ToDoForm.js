import { useState } from "react";
import styles from "./page.module.css";

const ToDoForm = ({ toDos, setToDos }) => {
  const [toDo, setToDo] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    const temp = [{ toDo: toDo, done: false }, ...toDos];
    setToDos(temp);
    setToDo("");
  };

  const onChange = (event) => {
    setToDo(event.target.value);
  };

  return (
    <div className={styles.todoform}>
      <form onSubmit={onSubmit}>
        <label htmlFor="todo">New ToDo</label>
        <input
          name="todo"
          id="todo"
          type="text"
          onChange={onChange}
          value={toDo}
        />
        <input type="submit" value="Add ToDo" />
      </form>
    </div>
  );
};

export default ToDoForm;
