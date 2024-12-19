import React from 'react';
import { TodoItem } from './TodoItem';
import { Todo } from "../../../types/todo.types";

interface Props {
  todos: Todo[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoList: React.FC<Props> = ({ todos, onToggle, onDelete }) => {
  // Si no hay todos, mostramos un mensaje
  if (todos.length === 0) {
    return (
      <p className="text-gray-500 text-center">
        No hay tareas pendientes
      </p>
    );
  }

  return (
    <ul className="space-y-3">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

export default TodoList;