import React, { useState, useEffect } from "react";

const EditUserForm = ({ currentUser, updateUser, setEditing }) => {
  const [user, setUser] = useState(currentUser);

  useEffect(() => {
    setUser(currentUser);
  }, [currentUser]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const onSubmitForm = event => {
    event.preventDefault();
    updateUser(user.id, user);
  };

  return (
    <form onSubmit={onSubmitForm}>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" id="name" value={user.name} onChange={handleInputChange} />
      <label htmlFor="username">Username</label>
      <input type="text" name="username" id="username" value={user.username} onChange={handleInputChange} />
      <button style={{ marginRight: "0.5rem" }}>Update user</button>
      <button className="button muted-button" onClick={() => setEditing(false)}>
        Cancel
      </button>
    </form>
  );
};

export default EditUserForm;
