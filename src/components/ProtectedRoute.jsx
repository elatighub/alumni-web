import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);

  // If user is not authenticated, redirect to SignIn
  return isAuthenticated ? children : <Navigate to="/signin" />;
};

export default ProtectedRoute;