import TodoItem from "./TodoItem"
import EditTodoForm from "./EditTodoForm"

export default function TodoList({ todos, toggleTodo, editTodo, editTask, deleteTodo}) {
  return (
    <ul className="list">
        {todos.length === 0 && "No Todos"}
        {todos.map((todo) => (
          todo.isEditing ? (
            <EditTodoForm
              key={todo.id}
              title={todo.title}
              id={todo.id}
              editTodo={editTask}
              dispatch={dispatch}
            />
          ) : (
            <li key={todo.id}>
                <TodoItem
                    {...todo}
                    key={todo.id}
                    toggleTodo={toggleTodo}
                    editTodo={editTodo}
                    deleteTodo={deleteTodo}
                />
            </li>
            )
        ))}
    </ul>
  )
}
