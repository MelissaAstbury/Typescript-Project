import React, { useState } from "react";
import { v4 } from "uuid";
import { TodoList } from "./TodoList";
import { Todo, ToggleTodo } from "./types";
import { AddTodoForm } from "./AddTodoForm";

const initialTodos: Array<Todo> = [
  { id: v4(), text: "Paint nails", complete: false },
  { id: v4(), text: "Water the plants", complete: false },
  { id: v4(), text: "Cook a Sunday Roast", complete: false },
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
    newTodo.text.trim() !== "" && setTodos([...todos, newTodo]);
  };

  return (
    <React.Fragment>
      <TodoList todos={todos} setTodos={setTodos} toggleTodo={toggleTodo} />
      <AddTodoForm addTodo={addTodo} />
    </React.Fragment>
  );
};

export default App;
