import React, { useContext } from 'react';
import NavBar from './navbar/Index';
import Sidebar from './sidebar/Index'
import AdminContextContainer, { AdminContext } from '../../contexts/AdminLayoutContext';
import Dashboard from '../../pages/Dashboard/Dashboard';
import CategoryManagment from '../../pages/CategoryManagement/CategoryManagement';
import ProductManagment from '../../pages/ProductManagement/ProductManagement';
import BrandManagment from '../../pages/BrandManagement/BrandManagement';
import GuaranteeManagement from '../../pages/GuaranteeManagement/GuaranteeManagement';
import { Route, Routes } from 'react-router-dom';
import ColorManagement from '../../pages/Colors/ColorManagement';
import DiscountManagement from '../../pages/Discount/DiscountManagement';
import CartManagement from '../../pages/CartManagement/CartManagement';
import OrderManagement from '../../pages/OrderManagement/OrderManagement';
import DeliveryManagement from '../../pages/DeliveryManagement/DeliveryManagement';
import UserManagement from '../../pages/UserManagement/UserManagement';
import RolesManagement from '../../pages/RolesManagement/RolesManagement';
import PermisionManagement from '../../pages/PermisionManagement/PermisionManagement';
import QuestionManagement from '../../pages/QuestionManagement/QuestionManagement';
import CommentManagement from '../../pages/CommentManagement/CommentManagement';
const Index = () => {
    const {showSidebar} = useContext(AdminContext);
    return (
        <AdminContextContainer> 
            <div>
                <NavBar />
                <Sidebar />
                <section id="content_section"
                className={`bg-light py-2 px-3 ${showSidebar ? "with_sidebar" : null} `}>
                    <Routes>
                        <Route path='/' element={<Dashboard/>} />
                        <Route path='CategoryManagement' element={<CategoryManagment/>}/>
                        <Route path='ProductManagement' element={<ProductManagment/>}/>
                        <Route path='BrandManagement' element={<BrandManagment/>}/>
                        <Route path='GuaranteeManagement' element={<GuaranteeManagement/>}/>
                        <Route path='ColorManagement' element={<ColorManagement/>}/>
                        <Route path='DiscountManagement' element={<DiscountManagement/>}/>
                        <Route path='CartManagement' element={<CartManagement/>}/>
                        <Route path='OrderManagement' element={<OrderManagement/>}/>
                        <Route path='DeliveryManagement' element={<DeliveryManagement/>}/>
                        <Route path='UserManagement' element={<UserManagement/>}/>
                        <Route path='RolesManagement' element={<RolesManagement/>}/>
                        <Route path='PermisionManagement' element={<PermisionManagement/>}/>
                        <Route path='QuestionManagement' element={<QuestionManagement/>}/>
                        <Route path='CommentManagement' element={<CommentManagement/>}/>


                        <Route path='*' element={<Dashboard/>} />

                    </Routes>
                </section>
            </div>
        </AdminContextContainer>
    );
}

export default Index;
