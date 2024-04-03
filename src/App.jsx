import { useState, useEffect } from 'react'
import './App.css'
import NewTodoForm from './NewTodoForm'
import TodoList from './TodoList'

function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem('ITEMS')
    if (localValue == null) return []

    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem('ITEMS', JSON.stringify(todos))
  }, [todos])

  function addTodo(title) {
    setTodos((currentTodos) => {
      return (
        [
          { id: crypto.randomUUID(), title, completed: false},
          ...currentTodos,
        ]
      )
    })
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed } 
        }

        return todo
      })
    })
  }

  function editTodo(id, newTitle) {
    setTodos(currentTodos => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, title: newTitle}
        }

      return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <div>
      <h1 className='header'>Create Todo List</h1>
      <NewTodoForm onSubmit={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} editTodo={editTodo} deleteTodo={deleteTodo}/>
    </div>
  )
}

export default App
