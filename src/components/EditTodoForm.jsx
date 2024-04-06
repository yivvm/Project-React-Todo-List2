import React, { useState } from 'react'

export default function EditTodoForm( { editTodo, id, title }) {
    const [newItem, setNewItem] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        
        editTodo(id, newItem)
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
        <button type="submit" className='todo-btn'>Update</button>
      </div>
    </form>
  )
}
