import React from 'react';
import AddCategory from './AddCategory';
import CategoryManagmentTable from './CategoryManagementTable';

const CategoryManagment = () => {
    return (
        <div id="manage_product_category" className="manage_product_category main_section">
            <h4 className="text-center my-3">مدیریت دسته بندی محصولات</h4>
            <CategoryManagmentTable/>
        </div>
    );
}

export default CategoryManagment;
