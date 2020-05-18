import React, { useState } from "react";

const TodoForm = ({ dispatch }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD-TODO", title });
    setTitle("");
  };

  const handleClear = () => {
    dispatch({ type: "CLEAR-COMPLETE" });
  };

  return (
    <div>
      <button onClick={handleClear}>Clear Completed</button>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </form>
    </div>
  );
};

export default TodoForm;
