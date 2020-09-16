import React from "react";
import { TodoListItem } from "./TodoListItem";
import { ToggleTodo, Todo } from "./types";

interface TodoListProps {
  todos: Array<Todo>;
  setTodos: any;
  toggleTodo: ToggleTodo;
}

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  toggleTodo,
  setTodos,
}) => {
  return (
    <ul>
      {todos.map((todo) => {
        return (
          <TodoListItem
            key={todo.text}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
            toggleTodo={toggleTodo}
          />
        );
      })}
    </ul>
  );
};
