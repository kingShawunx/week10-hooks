import { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  function addTodo(event) {
    event.preventDefault();
    const task = input.trim();
    if (!task) return;

    setTodos((currentTodos) => [...currentTodos, { id: `${Date.now()}-${Math.random()}`, text: task }]);
    setInput('');
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id));
  }

  return (
    <div className="component-content">
      <form className="todo-form" onSubmit={addTodo}>
        <label className="sr-only" htmlFor="new-task">New task</label>
        <input id="new-task" type="text" value={input} onChange={(event) => setInput(event.target.value)} placeholder="Add a task..." />
        <button className="button button-primary" type="submit">Add task</button>
      </form>
      {todos.length > 0 ? (
        <ul className="todo-list">
          {todos.map((todo) => (
            <li className="todo-item" key={todo.id}>
              <span>{todo.text}</span>
              <button className="button button-delete" type="button" onClick={() => deleteTodo(todo.id)} aria-label={`Delete ${todo.text}`}>Delete</button>
            </li>
          ))}
        </ul>
      ) : <p className="muted empty-state">Your tasks will appear here.</p>}
    </div>
  );
}

export default TodoList;
