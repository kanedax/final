import React, { useContext } from 'react';
import NavBar from './navbar/Index';
import Sidebar from './sidebar/Index'
import AdminContextContainer, { AdminContext } from '../../contexts/AdminLayoutContext';
import Dashboard from '../../pages/dashboard/Dashboard';
import CategoryManagment from '../../pages/categoryManagment/CategoryManagment';
import ProductManagment from '../../pages/productManagment/ProductManagment';
const Index = () => {
    const {showSidebar} = useContext(AdminContext);
    return (
        <AdminContextContainer> 
            <div>
                <NavBar />
                <Sidebar />
                <section id="content_section"
                className={`bg-light py-2 px-3 ${showSidebar ? "with_sidebar" : null} `}>
                    {/* <Dashboard/> */}
                    {/* <CategoryManagment/> */}
                    <ProductManagment/>
                </section>
            </div>
        </AdminContextContainer>
    );
}

export default Index;
