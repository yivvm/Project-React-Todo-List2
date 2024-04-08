import React, { useState } from 'react'

export default function EditTodoForm( { editTodo, id, title, dispatch }) {
    const [newItem, setNewItem] = useState(title)

    function handleSubmit(e) {
        e.preventDefault()
        
        editTodo(id, newItem)

        if (newItem === "") {
            editTodo(id, title)
        }
    }

    function handleSave(e) {
      dispatch({ type: UserActivation.EDIT_TASK, payload: { id: id, title: newItem } })
    }

  return (
    <form onSubmit={handleSubmit}
        className='new-item-form'>
      <div>
        <input 
            type="text" 
            className="new-item-input" 
            value={newItem} 
            onChange={e => setNewItem(e.target.value)}
            placeholder={title}
        />
        <button type="submit" className='todo-btn' onClick={handleSave}>Save</button>
      </div>
    </form>
  )
}
