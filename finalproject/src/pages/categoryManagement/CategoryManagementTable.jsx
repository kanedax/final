import React, { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import PaginatedTable from '../../components/PaginatedTable';
import { getCategoryService } from '../../services/CategoryService';
import AddCategory from './AddCategory';
import Action from './AdditionalField/Action';
import ShowInMenu from './AdditionalField/ShowInMenu';
import { JalaliConvert } from '../../utils/JalaliConvert';

const CategoryManagmentTable = () => {

    const params = useParams();

    const [data, setData] = useState([]);

    const [forceRender, setForceRender] = useState(0);

    const [loading , setLoading] = useState(false)

    const handleGetCategories = async () => {

        try {
            setLoading(true)
            const res = await getCategoryService(params.CategoryManagementId)
            if (res.status === 200) {
                setData(res.data.data)
            }
        } catch (error) { 

        } finally{
            setLoading(false)
        }
    }

    useEffect(() => {
        handleGetCategories()
    }, [params, forceRender]);

    const dataInfo = [
        { field: "id", title: "#" },
        { field: "title", title: "عنوان محصول" },
        { field: "parent_id", title: "آی دی والد " },
    ]

    const additionalField = [
        {
            title: "تاریخ ثبت",
            elements: (rowData) => JalaliConvert(rowData.created_at),
        }, {
            title: "نمایش در منو",
            elements: (rowData) => <ShowInMenu rowData={rowData} />,
        }, {
            title: "عملیات",
            elements: (rowData) => <Action rowData={rowData} />,
        }
    ];

    const searchParams = {
        title: "جستجو",
        placeholder: "قسمتی از عنوان را وارد کنید",
        searchField: "title"
    }
    return (
        <>
            <Outlet />
            <PaginatedTable
                numOfPages={10}
                data={data}
                dataInfo={dataInfo}
                additionalField={additionalField}
                searchParams={searchParams}
                loading={loading}
            >
                <AddCategory setForceRender={setForceRender} />
            </PaginatedTable>
        </>
    );
}

export default CategoryManagmentTable;
