import React, { useContext } from 'react';
import NavBar from './navbar/Index';
import Sidebar from './sidebar/Index'
import AdminContextContainer, { AdminContext } from '../../contexts/AdminLayoutContext';
import Dashboard from '../../pages/dashboard/Dashboard';
import CategoryManagment from '../../pages/categoryManagement/CategoryManagement';
import ProductManagment from '../../pages/productManagement/ProductManagement';
import BrandManagment from '../../pages/brandManagement/BrandManagement';
import PaginatedTable from '../../components/PaginatedTable';
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
                    <CategoryManagment/>
                    {/* <ProductManagment/> */}
                    {/* <BrandManagment/> */}
                </section>
            </div>
        </AdminContextContainer>
    );
}

export default Index;
