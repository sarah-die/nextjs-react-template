import styles from "./page.module.css";

const ToDoList = ({ toDos, setToDos }) => {
  const onCheckboxChange = (index) => (event) => {
    const targetToDo = toDos[index];
    const temp = toDos.slice();
    temp.splice(index, 1, { ...targetToDo, done: !targetToDo.done });
    setToDos(temp);
  };

  return (
    <div className={styles.todolist}>
      <ul>
        {toDos.map((todo, index) => (
          <li key={index}>
            <span
              style={{ textDecoration: todo.done ? "line-through" : undefined }}
            >
              {todo.toDo}{" "}
            </span>
            <input
              name="done"
              type="checkbox"
              value={todo.done}
              onChange={onCheckboxChange(index)}
            ></input>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
