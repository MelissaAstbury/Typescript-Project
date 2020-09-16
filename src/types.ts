export type Todo = {
  id: string;
  text: string;
  complete: boolean;
};

export type ToggleTodo = (selectedTodo: Todo) => void;

export type AddTodo = (newTodo: Todo) => void;

export type SetTodos = (setTodod: any) => void;
