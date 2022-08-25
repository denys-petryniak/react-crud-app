import React, { useState } from "react";
import UserTable from "./tables/UserTable";
import AddUserForm from "./forms/AddUserForm";

const App = () => {
  const usersData = [
    { id: 1, name: "Denys", username: "dpetryniak" },
    { id: 2, name: "Vlad", username: "alex" },
    { id: 3, name: "Lera", username: "kitten" },
    { id: 4, name: "Dimon", username: "domestos" },
  ];

  const [users, setUsers] = useState(usersData);

  const addUser = user => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add User</h2>
          <AddUserForm addUser={addUser} />
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} />
        </div>
      </div>
    </div>
  );
};

export default App;
