import TodoItem from "./TodoItem"

export default function TodoList({ todos, toggleTodo, editTodo, deleteTodo}) {
  return (
    <ul className="list">
        {todos.length === 0 && "No Todos"}
        {todos.map((todo) => (
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
        )}
    </ul>
  )
}
