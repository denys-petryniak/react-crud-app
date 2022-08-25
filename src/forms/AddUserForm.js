import React, { useState } from "react";

const AddUserForm = ({ addUser }) => {
  const initialFormState = { id: null, name: "", username: "" };
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const onSubmitForm = event => {
    event.preventDefault();
    if (!user.name || !user.username) return;

    addUser(user);
    setUser(initialFormState);
  };

  return (
    <form onSubmit={onSubmitForm}>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" id="name" value={user.name} onChange={handleInputChange} />
      <label htmlFor="username">Username</label>
      <input type="text" name="username" id="username" value={user.username} onChange={handleInputChange} />
      <button>Add new user</button>
    </form>
  );
};

export default AddUserForm;
