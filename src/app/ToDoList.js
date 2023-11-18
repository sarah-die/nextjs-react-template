import styles from "./page.module.css";

const ToDoList = ({ toDos }) => {
  return (
    <div className={styles.todolist}>
      <ul>
        {toDos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
