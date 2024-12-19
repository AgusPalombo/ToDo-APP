import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-8">
          Todo App
        </h1>
        <p className="text-xl text-gray-600 mb-12">
          Organiza tus tareas de manera eficiente y accede a ellas desde cualquier lugar
        </p>
        
        <div className="space-x-4">
          <Link
            to="/auth/login"
            className="inline-block px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Iniciar Sesión
          </Link>
          <Link
            to="/auth/register"
            className="inline-block px-8 py-3 bg-white text-blue-500 border-2 border-blue-500 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Registrarse
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;