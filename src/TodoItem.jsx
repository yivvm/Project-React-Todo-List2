import React, { useState } from 'react';

export default function TodoItem({ completed, id, title, toggleTodo, editTodo, deleteTodo}) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  const handleEdit = () => {
    setIsEditing(true)
  }

  const handleSave = () => {
    editTodo(id, newTitle)
    setIsEditing(false)
  }

  const handleChange = e => {
    setNewTitle(e.target.value)
  }

  return (
    <li>
      {(isEditing) ? (
        <input
          type="text"
          value={newTitle}
          onChange={handleChange}
          onBlur={handleSave}
          autoFocus
        />
      ) : (
        <label>
          <input
            type="checkbox"
            checked={completed}
            onChange={e => toggleTodo(id, e.target.checked)}
          />
          {title}
        </label>
      )}

      {(isEditing) ? null : (
        <>
          <button
            onClick={() => editTodo(id)}
            className="btn btn-primary"
          >
            Edit
          </button>
          <button
            onClick={() => deleteTodo(id)}
            className="btn btn-danger"
          >
            Delete
          </button>
        </>
      )}
    </li>
  )
}
