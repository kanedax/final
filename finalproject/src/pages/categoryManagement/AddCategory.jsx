
import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { Formik, Form} from 'formik';
import { Alert } from '../../utils/Alert';
import ModalComponent from '../../components/ModalComponent';
import FormikControl from '../../components/Form/FromikControl';
import { createNewCategoryService, getCategoryService } from '../../services/CategoryService';
import SubmitButton from '../../components/Form/SubmitButton';
import { useParams } from 'react-router-dom';


const initialValues = {
    parent_id: "",
    title: "",
    description: "",
    image: null,
    is_active: true,
    show_in_menu: true,
};

const onSubmit = async (values, actions, setForceRender) => {
    try {
        values = {
            ...values,
            is_active: values.is_active ? 1 : 0,
            show_in_menu: values.show_in_menu ? 1 : 0,
        }
        let res = await createNewCategoryService(values)
        if (res.status == 201) {
            Alert('رکورد با موفقیت ثبت شد', 'عملیات با موفقیت ثبت شد', 'success')
            actions.resetForm();
            setForceRender(last => last + 1);
        }
    } catch (error) {
        console.log(error.message);
    }
    console.log(values);
};

const validationSchema = Yup.object({
    parent_id: Yup.number(),
    title: Yup.string()
        .required("لطفا این قسمت را پر کنید")
        .matches(
            /^[\u0600-\u06FF\sa-zA-Z0-9@!%$?&]+$/,
            "فقط از حروف و اعداد استفاده شود"
        ),
    description: Yup.string().matches(
        /^[\u0600-\u06FF\sa-zA-Z0-9@!%$?&]+$/,
        "فقط از حروف و اعداد استفاده شود"
    ),
    image: Yup.mixed()
        .test("filesize", "حجم فایل نمیتواند بیشتر 500 کیلوبایت باشد", (value) =>
            !value ? true : value.size <= 500 * 1024
        )
        .test("format", "فرمت فایل باید jpg باشد", (value) =>
            !value ? true : value.type === "image/jpeg"
        ),
    is_active: Yup.boolean(),
    show_in_menu: Yup.boolean(),
});


const Addcategory = ({ setForceRender }) => {
    const params = useParams();
    const [reInitialValues , setReInitialValues] = useState(null);
    const [parents, setParents] = useState([]);
    const handleGetParentsCategories = async () => {
        try {
            const res = await getCategoryService();
            if (res.status == 200) {
                const allParents = res.data.data;
                setParents(
                    allParents.map((p) => {
                        return { id: p.id, value: p.title };
                    })
                );
            }
        } catch (error) {
            Alert("مشکل...!", "متاسفانه دسته بندی های والد دریافت نشد", "warning");
        }
    };
    useEffect(() => {
        handleGetParentsCategories();
    }, []);

    useEffect(()=>{
        if(params.CategoryManagementId){
            setReInitialValues({
                ...initialValues,
                parent_id : params.CategoryManagementId
            })
        }else{
            setReInitialValues(null)
        }
    },[params.CategoryManagementId])
    return (
        <>
            <button
                className="btn btn-success d-flex justify-content-center align-items-center"
                data-bs-toggle="modal"
                data-bs-target="#add_product_category_modal"
            >
                <i className="fas fa-plus text-light"></i>
            </button>

            <ModalComponent
                fullscreen={true}
                id="add_product_category_modal"
                title="افزودن دسته محصولات"
            >
                <Formik
                    initialValues={reInitialValues || initialValues}
                    onSubmit={(values, actions) => onSubmit(values, actions, setForceRender)}
                    validationSchema={validationSchema}
                    enableReinitialize
                >
                    <Form>
                        <div className="container">
                            <div className="row justify-content-center">
                                {parents.length > 0 ? (
                                    <FormikControl
                                        className="col-md-6 col-lg-8"
                                        control="select"
                                        options={parents}
                                        name="parent_id"
                                        label="دسته والد"
                                    />
                                ) : null}
                                <FormikControl
                                    className="col-md-6 col-lg-8"
                                    control="input"
                                    type="text"
                                    name="title"
                                    label="عنوان دسته"
                                    placeholder="عنوان دسته"
                                />
                                <FormikControl
                                    className="col-md-6 col-lg-8"
                                    control="textarea"
                                    name="description"
                                    label="توضیحات"
                                    placeholder="توضیحات"
                                />
                                <FormikControl
                                    className="col-md-6 col-lg-8"
                                    control="file"
                                    name="image"
                                    label="تصویر"
                                    placeholder="تصویر"
                                />
                                <div className="col-12 col-md-6 col-lg-8 row justify-content-center">
                                    <div className="col-12 col-md-4 col-lg-3 mx-lg-5">
                                        <FormikControl
                                            control="switch"
                                            name="is_active"
                                            label="وضعیت فعال"
                                        />
                                    </div>
                                    <div className="col-12 col-md-4 col-lg-3 mx-lg-5">
                                        <FormikControl
                                            control="switch"
                                            name="show_in_menu"
                                            label="نمایش در منو"

                                        />
                                    </div>
                                </div>
                                <div className="btn_box text-center col-12 col-md-6 col-lg-8 mt-4">
                                    <SubmitButton/>
                                </div>
                            </div>
                        </div>
                    </Form>
                </Formik>
            </ModalComponent>
        </>
    );
};

export default Addcategory;
