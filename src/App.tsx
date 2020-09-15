import React, { useState } from "react";
import { TodoList } from "./TodoList";
import { Todo, ToggleTodo, AddTodo } from "./types";
import { AddTodoForm } from "./AddTodoForm";

const initialTodos: Array<Todo> = [
  { text: "Paint nails", complete: false },
  { text: "Water the plants", complete: true },
  { text: "Cook a Sunday Roast", complete: false },
];

const App: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo: ToggleTodo = (selectedTodo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addTodo = (newTodo: Todo) => {
    setTodos([...todos, newTodo]);
  };

  return (
    <div>
      <React.Fragment>
        <TodoList todos={todos} toggleTodo={toggleTodo} />
        <AddTodoForm addTodo={addTodo} />
      </React.Fragment>
    </div>
  );
};

export default App;
