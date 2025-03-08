import React, { useContext } from 'react';
import { AuthContext } from '../context/auth';
import DefaultStackRoutes from './defaultStack';
import PublicStackRoutes from './publicStack';
import AdminStackRoutes from './adminStack';

export default function Routes(){
    const { isAuthenticated } = useContext(AuthContext);
    return isAuthenticated ? <AdminStackRoutes/> : <PublicStackRoutes />;
}