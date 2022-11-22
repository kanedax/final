
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Alert } from '../../utils/Alert';
import { logoutService } from "../../services/Auth";
const Logout = () => {
    const [loading, setLoading] = useState(true);
    const handleLogout = async ()=>{
      try {
        const res = await logoutService();
        if (res.status == 200) {
          localStorage.removeItem("loginToken");
        } else {
          Alert("متاسفم...!", res.data.message, "error");
        }
        setLoading(false);
        
      } catch (error) {
        
        setLoading(false);
        Alert("متاسفم...!", "متاسفانه مشکلی از سمت سرور رخ داده", "error");
      }
    }
    useEffect(() => {
      handleLogout()
    }, []);
    return (
      <>
        {loading ? (
          <h1 className="text-center waiting_center">لطفا صبر کنید...</h1>
        ) : (
          <Navigate to="/auth/login" />
        )}
      </>
    );
  };
  
  export default Logout;
