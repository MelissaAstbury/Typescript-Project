import React, { useState, ChangeEvent, FormEvent } from "react";
import { v4 } from "uuid";
import { AddTodo, Todo } from "./types";

interface AddTodoFormProps {
  addTodo: AddTodo;
}

export const AddTodoForm: React.FC<AddTodoFormProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState<Todo>({
    id: v4(),
    text: "",
    complete: false,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo({
      id: newTodo.id,
      text: e.target.value,
      complete: false,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo({ id: v4(), text: "", complete: false });
  };

  return (
    <form>
      <input type="text" value={newTodo.text} onChange={handleChange} />
      <button type="submit" onClick={handleSubmit}>
        Add Todo
      </button>
    </form>
  );
};
