import Link from "next/link";
import styles from "./page.module.css";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export const Home = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos: Todo[] = await res.json();
  return (
    <main className={styles.main}>
      <Link href={'/user'}>Users</Link>
      <h1>To-do</h1>
      <ul>
        {todos.map((todo: any) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </main>
  );
};

export default Home;
