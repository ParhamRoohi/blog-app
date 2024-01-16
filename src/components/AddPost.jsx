import { useState } from "react";
import "./myBlog.css";

export default function AddPost({ onAdd }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [showError, setShowError] = useState(false);
  const handleAddNewPost = () => {
    if (title === "" || date === "") {
      setShowError(true);
      return;
    }
    onAdd({ title, description, date });
    clearForm();
  };

  const clearForm = () => {
    setTitle("");
    setDescription("");
    setDate("");
    setShowError(false);
  };

  return (
    <div className="add-post-container">
      <h2>Add New Post</h2>
      <div className="inputs-container">
        <input
          placeholder="Title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        ></input>
        <input
          placeholder="Description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        ></input>
        <input
          placeholder="Date"
          type="date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
        ></input>
        <button onClick={handleAddNewPost}>Add</button>
        {showError && (
          <div className="error-message">PLEASE FILL TITLE AND DATE FIELDS!</div>
        )}
      </div>
    </div>
  );
}
