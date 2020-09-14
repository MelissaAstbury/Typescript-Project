import React from "react";
import { TodoListItem } from "./TodoListItem";
import { Todo } from "./types";

const todos: Array<Todo> = [
  { text: "Paint nails", complete: false },
  { text: "Water the plants", complete: true },
  { text: "Cook a Sunday Roast", complete: false },
];

const App: React.FC = () => {
  return (
    <div>
      <TodoListItem todo={todos[0]} />
    </div>
  );
};

export default App;
