import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const Logout = () => {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const loginToken = JSON.parse(localStorage.getItem("loginToken"))
        axios.get('https://ecomadminapi.azhadev.ir/api/auth/logout', {

            headers: {
                authorization: `Bearer ${loginToken.token}`,
            },
        }).then(res => {
            if (res.status == 200) {
                localStorage.removeItem("loginToken");
                setLoading(false)
            } else {
                alert("متاسفم...!", res.data.message, "error")
            }
        }).catch(error => {
            setLoading(false);
            alert("متاسفم...!", "مشکلی از سمت سرور رخ داده است", "error")
        })
    }, []);

    return (
        <>
            {
                loading ? (
                    <h4 className='text-center waiting-center'>
                        لطفا صبر کنید
                    </h4>
                ) : (
                    <Navigate to="/auth/login" />
                )
            }
        </>
    )
}

export default Logout;
