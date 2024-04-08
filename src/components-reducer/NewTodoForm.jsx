import React, { useState } from 'react'
import { ACTIONS } from '../AppReducer.jsx'

export default function NewTodoForm( { onSubmit }) {
    const [newItem, setNewItem] = useState("")

    function handleSubmit(e) {
        e.preventDefault()

        if (newItem === "") return

        onSubmit(newItem)

        setNewItem("")
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
            placeholder='Add Todo...'
        />
        <button type="submit" className='todo-btn'>Add</button>
      </div>
    </form>
  )
}
