import React, { useState } from "react"
import { ACTIONS } from '../AppReducer.jsx'

export default function TodoItem( { completed, id, title, toggleTodo, editTodo, deleteTodo, dispatch }) {
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
            <button onClick={() => dispatch({ type: ACTIONS.EDIT_TODO, payload: { id: id }})} className="btn-edit">Edit</button>
            <button 
                onClick={() => dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: id }})} 
                className="btn-delete"
                disabled={!completed}
            >
                Delete
            </button>
          </div>
      </div>
  )
}