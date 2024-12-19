import React, { useState } from 'react';
import TodoList from './components/todos/TodoList';
import {TodoForm} from './components/todos/TodoForm';
import { Todo } from '../types/todo.types';

const App: React.FC = () => {
  // Estado principal para almacenar todos los todos
  const [todos, setTodos] = useState<Todo[]>([]);

  // Función para agregar un nuevo todo
  const addTodo = (title: string) => {
    const newTodo: Todo = {
      id: Date.now(), // Usamos timestamp como ID único
      title,
      completed: false
    };
    setTodos([...todos, newTodo]);
  };

  // Función para cambiar el estado de un todo
  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // Función para eliminar un todo
  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Todo App
          </h1>
          <TodoForm onAdd={addTodo} />
          <TodoList 
            todos={todos} 
            onToggle={toggleTodo} 
            onDelete={deleteTodo} 
          />
        </div>
      </div>
    </div>
  );
};

export default App;