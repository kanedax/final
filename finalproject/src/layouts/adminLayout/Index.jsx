import React from 'react';
import NavBar from './navbar/Index';
import Sidebar from './sidebar/Index'
import AdminContextContainer from '../../contexts/AdminLayoutContext';
import RouteMap from './RouteMap';
import { Navigate } from 'react-router-dom';
import { useLogin } from '../../hooks/useLogin';

const Index = () => {

    const [isLogin, loading] = useLogin()

    return (
        <AdminContextContainer>

            {
                loading ? (
                    <h2 className='text-center waiting-center'>
                        لطفا صبر کنید...
                    </h2>
                ) : isLogin ? (
                    <div>
                        <NavBar />
                        <Sidebar />
                        <RouteMap />
                    </div>
                ) : (
                    <Navigate to={'/auth/login'} />
                )
            }

        </AdminContextContainer>
    );
}

export default Index;
