import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AuthLayout from '../components/auth/AuthLayout';
import Login from '../components/auth/Login';
import Register from '../components/auth/Register';

const Auth: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  );
};

export default Auth;