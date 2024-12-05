import React, { useState } from "react";

interface Props {
    onAdd: (title: string) => void;
}

export const TodoForm: React.FC<Props> = ({ onAdd }) => {
    const [title, setTitle] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!title.trim()) return;
        onAdd(title);
        setTitle("");
    };


    return (
        <form onSubmit={handleSubmit} className="mb-6">
            <div className="flex gap-2">
                <input 
                    type="text" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    placeholder="Add a new task" 
                />
                <button 
                    type= "submit" 
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Add
                </button>
           </div>
        </form>
    );
};
