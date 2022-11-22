import React, { useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import PaginatedTable from '../../components/PaginatedTable';
import { getCategoryService } from '../../services/CategoryService';
import { Alert } from '../../utils/Alert';
import AddCategory from './AddCategory';
import Action from './AdditionalField/Action';
import ShowInMenu from './AdditionalField/ShowInMenu';
import JMoment from "jalali-moment";
import { JalaliConvert } from '../../utils/JalaliConvert';

const CategoryManagmentTable = () => {

    const params = useParams();

    const location = useLocation()

    const [data, setData] = useState([])

    const handleGetCategories = async () => {

        try {
            const res = await getCategoryService(params.CategoryManagementId)
            if (res.status === 200) {
                setData(res.data.data)
            } else {
                Alert("مشکل!", res.data.message, "error");
            }

        } catch (error) {
            Alert("مشکل!", "مشکلی از سمت سرور رخ داده است", "error");
        }
    }

    useEffect(() => {
        handleGetCategories()
    }, [params]);

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
            {
                data.length ? (
                    <PaginatedTable
                        numOfPages={5}
                        data={data}
                        dataInfo={dataInfo}
                        additionalField={additionalField}
                        searchParams={searchParams}
                    >
                    <AddCategory />
                    </PaginatedTable>
                ) : (
                    <h4 className='text-center text-danger' >هیچ دسته بندی یافت نشد</h4>
                )
            }
        </>
    );
}

export default CategoryManagmentTable;
