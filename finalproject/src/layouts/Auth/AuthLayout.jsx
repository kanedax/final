import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useLogin } from '../../hooks/useLogin';
import Login from '../../pages/Auth/Login';

const AuthLayout = () => {

    const [isLogin, loading] = useLogin();

    return (
        <>
            {
                loading ? (
                    <h2 className='text-center waiting-center'>
                        لطفا صبر کنید...
                    </h2>
                ) : !isLogin ? (
                    <Routes>
                        <Route path="/auth/Login" element={<Login />} />
                    </Routes>
                ) : (
                    <Navigate to={'/'} />
                )
            }

        </>
    );
}

export default AuthLayout;
