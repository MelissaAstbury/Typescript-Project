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
  const [checked, setChecked] = useState(todo.complete);

  const updateTodo = (updateText: boolean) => {
    const foundIndex = todos.findIndex((item) => item.id === todo.id);
    if (updateText) {
      todos[foundIndex].text = input;
    } else {
      todos[foundIndex].complete = checked;
    }
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
      <label className={checked ? "complete" : undefined}>
        <input
          type="checkbox"
          checked={checked}
          onChange={() => {
            setChecked(!checked);
            updateTodo(false);
          }}
        />
        {todo.text}
      </label>
      {edit && (
        <>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            type="button"
            onClick={() => {
              updateTodo(true);
            }}
          >
            Update Task
          </button>
        </>
      )}
    </li>
  );
};
