import React, { useState } from "react"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
// import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

export default function TodoItem( { completed, id, title, toggleTodo, editTodo, deleteTodo }) {
  return (
      <div className="todo"> 
        <div>
          <label>
              <input 
                type="checkbox" 
                className="checkbox"
                checked={completed} 
                onChange={e => toggleTodo(id, e.target.checked)} 
              />
              {title}
          </label>
        </div>
          <div>
            <button onClick={() => editTodo(id)} className="btn-edit">Edit</button>
            <button 
                onClick={() => deleteTodo(id)} 
                className="btn-delete"
                disabled={!completed}
            >
                Delete
            </button>
          </div>
      </div>
  )
}