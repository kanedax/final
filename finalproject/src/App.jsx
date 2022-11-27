import React from 'react';
import { useLocation } from 'react-router-dom';
import AdminLayout from './layouts/adminLayout/Index';
import AuthLayout from './layouts/Auth/AuthLayout';

const App = () => {
    const location = useLocation()
    return (
        <div>
            {
                location.pathname.includes('/auth') ? (
                    <AuthLayout />
                ) : (
                    <AdminLayout />
                )
            }
        </div>
    );
}

export default App;
