import { useState } from 'react'

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
            id="item" 
            value={newItem} 
            onChange={e => setNewItem(e.target.value)}
            placeholder='Add task'
        />
        <button className='btn'>Add</button>
      </div>
    </form>
  )
}
