"use client";
import styles from "./page.module.css";
import ToDoList from "@/app/ToDoList";
import ToDoForm from "@/app/ToDoForm";
import { useState } from "react";

export default function Home() {
  const [toDos, setToDos] = useState([]);

  return (
    <main className={styles.main}>
      <h1>My ToDo-List</h1>
      <ToDoForm toDos={toDos} setToDos={setToDos} />
      <ToDoList toDos={toDos} />
    </main>
  );
}
