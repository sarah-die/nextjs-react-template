"use client";
import styles from "./page.module.css";
import ToDoList from "@/app/ToDoList";
import ToDoForm from "@/app/ToDoForm";
import { useState } from "react";
import Image from "next/image";
import nextLogo from "/public/next.svg";

export default function Home() {
  const [toDos, setToDos] = useState([]);

  return (
    <main className={styles.main}>
      <h1>My ToDo-List</h1>
      <ToDoForm toDos={toDos} setToDos={setToDos} />
      <ToDoList toDos={toDos} setToDos={setToDos} />
      <p>This App was bootstrapped with</p>
      <Image
        src={nextLogo}
        alt="next.js Logo"
        className={styles.logo}
        width={90}
        height={18}
        priority
      />
      <p>A responsive image for testing</p>
      <Image
        src="https://picsum.photos/id/237/300/200"
        alt="Picture of a black dog"
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        width={0}
        height={0}
      />
    </main>
  );
}
