import React from "react";
import { Todo } from "../../types/todo.types";


interface Props {
    todo: Todo;
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
}

export const TodoItem: React.FC<Props> = ({ todo, onToggle, onDelete }) => {
    return (
        <li className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200 shadow-md">

           {/*Checkbox para marcar como completado */}
           <input type="checkbox" checked={todo.completed} onChange={() => onToggle(todo.id)} className="w-5 h-5 text-blue-500 border-gray-300 rounded focus:ring-blue-500" />

           {/*Titulo del todo */}
           <span className={`flex-1 ${
            todo.completed 
            ? 'line-through text-gray-500' 
            : 'text-gray-700'
            }`}>
                {todo.title}
            </span>

           {/*Boton para eliminar */}
           <button onClick={() => onDelete(todo.id)} className="text-red-500 hover:text-red-600">Delete</button>
        </li>
    );
};
