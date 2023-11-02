import styles from "../page.module.css";

interface UserType {
  id: number;
  name: string;
}

export const User = async () => {
  const rest = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: UserType[] = await rest.json();

  return (
    <main className={styles.main}>
      <h1>Users</h1>
      <ul>
        {users.map((user: UserType) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </main>
  );
};

export default User;
