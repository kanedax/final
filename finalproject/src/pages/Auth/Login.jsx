
import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import AuthFormikControl from '../../components/AuthForm/AuthFormikControl';
import { useNavigate } from "react-router-dom";
import { Alert } from "../../utils/Alert";
import { loginService } from "../../services/Auth";


const initialValues = {
  phone: "",
  password: "",
  remember: false,
};
const onSubmit = async (values, submitMethods, navigate) => {

  try {

    const res = await loginService(values);

    if (res.status == 200) {
      localStorage.setItem('loginToken', JSON.stringify(res.data));
      navigate('/')

    } else {

      Alert("متاسفم...!", res.data.message, "error");
    }
    submitMethods.setSubmitting(false)

  } catch (error) {

    submitMethods.setSubmitting(false)
    Alert("متاسفم...!", "متاسفانه مشکلی از سمت سرور رخ داده", "error");
  }

};
const validationSchema = Yup.object({
  phone: Yup.number().required("لطفا این قسمت را پر کنید"),
  password: Yup.string()
    .required("لطفا این قسمت را پر کنید")
    .matches(/^[a-zA-Z0-9@!%$?&]+$/, "فقط از حروف و اعداد استفاده شود"),
  remember: Yup.boolean(),
});

const Login = () => {
  const navigate = useNavigate()
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, submitMethods) => onSubmit(values, submitMethods, navigate)}
      validationSchema={validationSchema}
    >
      {(formik) => {
        return (
          <div >
            <Form >
              <span >ورود اعضا</span>

              <AuthFormikControl
                formik={formik}
                control="input"
                type="text"
                name="phone"
                icon="fa fa-mobile"
                label="شماره موبایل"
              />

              <AuthFormikControl
                formik={formik}
                control="input"
                type="password"
                name="password"
                icon="fa fa-lock"
                label="رمز عبور"
              />

              <AuthFormikControl
                control="switch"
                name="remember"
                label="مرا بخاطر بسپارید"
              />


              <div >
                <button disabled={formik.isSubmitting}>
                  {formik.isSubmitting ? "لطفا صبر کنید..." : "ورود"}
                </button>
              </div>
            </Form>
            <div data-title>
              <img src="/auth/images/img-01.png" alt="IMG" />
            </div>
          </div>
        );
      }}
    </Formik>
  );
};

export default Login;