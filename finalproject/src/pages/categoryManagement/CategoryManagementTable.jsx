import React from 'react';
import PaginatedTable from '../../components/PaginatedTable';
import AddCategory from './AddCategory';

const CategoryManagmentTable = () => {
    const data = [
        {
            id: '1',
            category: '2',
            title: 'bbb',
            price: '111',
            stock: '5',
            like_count: '20',
            status: '1'
        },
        {
            id: '2',
            category: '3',
            title: 'aaa',
            price: '222',
            stock: '5',
            like_count: '20',
            status: '1'
        },
        {
            id: '3',
            category: '4',
            title: 'ccc',
            price: '333',
            stock: '5',
            like_count: '20',
            status: '1'
        },
        {
            id: '4',
            category: '4',
            title: 'ccc',
            price: '333',
            stock: '5',
            like_count: '20',
            status: '1'
        },
        {
            id: '5',
            category: '4',
            title: 'ccc',
            price: '333',
            stock: '5',
            like_count: '20',
            status: '1'
        },
    ]
    const dataInfo = [
        { field: "id", title: "#" },
        { field: "title", title: "عنوان محصول" },
        { field: "price", title: "قیمت محصول" }
    ]
    const additionalElements = (itemId) => {
        return (
            <>
                <i className="fas fa-project-diagram text-info mx-1 hoverable_text pointer has_tooltip"
                    title="زیرمجموعه"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top">
                </i>
                <i className="fas fa-edit text-warning mx-1 hoverable_text pointer has_tooltip"
                    title="ویرایش دسته"
                    data-bs-toggle="modal"
                    data-bs-placement="top"
                    data-bs-target="#add_product_category_modal">
                </i>
                <i className="fas fa-plus text-success mx-1 hoverable_text pointer has_tooltip"
                    title="افزودن ویژگی"
                    data-bs-toggle="modal"
                    data-bs-target="#add_product_category_attr_modal">
                </i>
                <i className="fas fa-times text-danger mx-1 hoverable_text pointer has_tooltip"
                    title="حذف دسته"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top">
                </i>
            </>
        )
    }
    const additionalField = {
        title: "عملیات",
        elements: (itemId) => additionalElements(itemId),
    }
    const searchParams = {
        title:"جستجو",
        placeholder:"قسمتی از عنوان را وارد کنید",
        searchField:"title"
    }
    return (
        <PaginatedTable
            numOfPages={2}
            data={data}
            dataInfo={dataInfo}
            additionalField={additionalField}
            searchParams={searchParams}
        >
            <AddCategory/>
        </PaginatedTable>
    );
}

export default CategoryManagmentTable;
