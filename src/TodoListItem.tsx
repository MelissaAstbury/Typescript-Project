import React, { useState } from "react";
import { Todo, ToggleTodo, SetTodos } from "./types";

import "./TodoListItem.css";

interface TodoListItemProps {
  todo: Todo;
  toggleTodo: ToggleTodo;
  setTodos: SetTodos;
  todos: Todo[];
}

export const TodoListItem: React.FC<TodoListItemProps> = ({
  todo,
  toggleTodo,
  setTodos,
  todos,
}) => {
  const [input, setInput] = useState(todo.text);
  const [edit, setEdit] = useState(false);

  const handleSubmit = () => {
    const foundIndex = todos.findIndex((item) => item.id === todo.id);
    todos[foundIndex].text = input;
    setTodos(todos);
    setEdit(false);
  };

  return (
    <li>
      <button
        onClick={() => {
          setEdit(!edit);
        }}
      >
        Edit
      </button>
      <button>Delete</button>
      <label className={todo.complete ? "complete" : undefined}>
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={() => toggleTodo(todo)}
        />
        {todo.text}
        {edit && (
          <>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" onClick={handleSubmit}>
              Update Task
            </button>
          </>
        )}
      </label>
    </li>
  );
};
