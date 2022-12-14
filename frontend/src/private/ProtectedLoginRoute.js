import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedLoginRoute = ({ userInfo, redirectPath = '/' }) => {
  if (userInfo) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};

export default ProtectedLoginRoute;
