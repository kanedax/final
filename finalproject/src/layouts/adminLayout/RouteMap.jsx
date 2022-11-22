import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AdminContext } from '../../contexts/AdminLayoutContext';
import Logout from '../../pages/Auth/Logout';
import BrandManagment from '../../pages/BrandManagement/BrandManagement';
import CartManagement from '../../pages/CartManagement/CartManagement';
import CategoryChildren from '../../pages/CategoryManagement/CategoryChildren';
import CategoryManagment from '../../pages/CategoryManagement/CategoryManagement';
import ColorManagement from '../../pages/Colors/ColorManagement';
import CommentManagement from '../../pages/CommentManagement/CommentManagement';
import Dashboard from '../../pages/Dashboard/Dashboard';
import DeliveryManagement from '../../pages/DeliveryManagement/DeliveryManagement';
import DiscountManagement from '../../pages/Discount/DiscountManagement';
import GuaranteeManagement from '../../pages/GuaranteeManagement/GuaranteeManagement';
import OrderManagement from '../../pages/OrderManagement/OrderManagement';
import PermisionManagement from '../../pages/PermisionManagement/PermisionManagement';
import ProductManagment from '../../pages/ProductManagement/ProductManagement';
import QuestionManagement from '../../pages/QuestionManagement/QuestionManagement';
import RolesManagement from '../../pages/RolesManagement/RolesManagement';
import UserManagement from '../../pages/UserManagement/UserManagement';

const RouteMap = () => {
    const { showSidebar } = useContext(AdminContext);
    return (
        <section id="content_section"
        className={`bg-light py-2 px-3 ${showSidebar ? "with_sidebar" : null} `}>
        <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/CategoryManagement' element={<CategoryManagment/>}>
            <Route path=':CategoryManagementId' element={<CategoryChildren/>}/>
            </Route>
            <Route path='/ProductManagement' element={<ProductManagment />} />
            <Route path='/BrandManagement' element={<BrandManagment />} />
            <Route path='/GuaranteeManagement' element={<GuaranteeManagement />} />
            <Route path='/ColorManagement' element={<ColorManagement />} />
            <Route path='/DiscountManagement' element={<DiscountManagement />} />
            <Route path='/CartManagement' element={<CartManagement />} />
            <Route path='/OrderManagement' element={<OrderManagement />} />
            <Route path='/DeliveryManagement' element={<DeliveryManagement />} />
            <Route path='/UserManagement' element={<UserManagement />} />
            <Route path='/RolesManagement' element={<RolesManagement />} />
            <Route path='/PermisionManagement' element={<PermisionManagement />} />
            <Route path='/QuestionManagement' element={<QuestionManagement />} />
            <Route path='/CommentManagement' element={<CommentManagement />} />
            <Route path='/logout' element={<Logout />} />
            <Route path='/*' element={<Dashboard />} />
        </Routes>
    </section>
    );
}

export default RouteMap;
