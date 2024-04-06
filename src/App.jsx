import { useState, useEffect } from 'react'
import NewTodoForm from './components/NewTodoForm'
import TodoList from './components/TodoList'

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
          { id: crypto.randomUUID(), title, completed: false, isEditing: false},
          ...currentTodos,
        ]
      )
    })
  }

  function toggleTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed } 
        } else {
          return todo
        }
      })
    })
  }
  
  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  function editTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isEditing: !todo.isEditing }
        } else {
          return todo
        }
      })
    )
  }

  function editTask(id, title) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, title, isEditing: !todo.isEditing}
        } else {
          return todo
        }
      })
    )
  }

  return (
    <div className='App'>
      <h1 className='header'>Create Todo List</h1>
      <NewTodoForm onSubmit={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} editTodo={editTodo} editTask={editTask} deleteTodo={deleteTodo}/>
    </div>
  )
}

export default App
