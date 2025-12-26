import { useEffect, useState } from "react";

interface User {
  id?: string | number;
  name: string;
  email?: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);

  // GET users when component loads
  useEffect(() => {
    fetch("http://127.0.0.1:8000/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  // POST user (only when button clicked)
const createUser = async () => {
  console.log("Button clicked");

  const res = await fetch("http://127.0.0.1:8000/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: "John",
      email: "john@test.com"
    })
  });

  console.log("Status:", res.status);
};



  return (
    <div>
      <h1>Users</h1>

      <button onClick={createUser}>Create User</button>

      <ul>
        {users.map(user => (
          <li key={user.id || user.name}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
