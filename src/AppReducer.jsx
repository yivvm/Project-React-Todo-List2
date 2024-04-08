import { useState, useEffect, useReducer } from 'react'
import NewTodoForm from './components/NewTodoForm'
import TodoList from './components/TodoList'

const ACTIONS = {
  ADD_TODO: 'add-todo',
  TOGGLE_TODO: 'toggle-todo',
  DELETE_TODO: 'delete-todo',
  EDIT_TODO: 'edit-todo',
  EDIT_TASK: 'edit-task',
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [
        { id: crypto.randomUUID(), title: action.title, completed: false, isEditing: false},
        ...state,
      ];
    case ACTIONS.TOGGLE_TODO:
      return state.map(todo => 
        todo.id === action.id ? {...todo, completed:!todo.completed } : todo
      );
    case ACTIONS.DELETE_TODO:
      return state.filter(todo => todo.id!== action.id);
    case ACTIONS.EDIT_TODO:
      return state.map(todo => 
        todo.id === action.id ? {...todo, isEditing: !todo.isEditing } : todo);
    case ACTIONS.EDIT_TASK:
      return state.map(todo => 
        todo.id === action.id ? {...todo, title: action.title, isEditing: !todo.isEditing } : todo);
    default:
      return state;
  }
}


function AppReducer() {
  const [todos, dispatch] = useReducer(reducer, [], () => {
    const localValue = localStorage.getItem('ITEMS')
    if (localValue == null) return []

    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem('ITEMS', JSON.stringify(todos))
  }, [todos])

  function addTodo(title) {
    const id = crypto.randomUUID()
    dispatch({ type: ACTIONS.ADD_TODO, id, title })
  }

  function toggleTodo(id) {
    dispatch({ type: ACTIONS.TOGGLE_TODO, id })
  }

  function deleteTodo(id) {
    dispatch({ type: ACTIONS.DELETE_TODO, id })
  }

  function editTodo(id) {
    dispatch({ type: ACTIONS.EDIT_TODO, id })
  }

  function editTask(id, title) {
    dispatch({ type: ACTIONS.EDIT_TASK, id, title })
  }


  return (
    <div className='App'>
      <h1 className='header'>Create Todo List</h1>
      <NewTodoForm onSubmit={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} editTodo={editTodo} editTask={editTask} deleteTodo={deleteTodo}/>
    </div>
  )
}

export default AppReducer
