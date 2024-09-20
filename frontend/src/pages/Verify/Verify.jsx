import React, { useContext, useEffect } from 'react';
import './Verify.css';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';

const Verify = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");

  const { url } = useContext(StoreContext);
  const navigate = useNavigate();

  // Log to check the current URL
  console.log("Current URL origin: ", window.location.origin);

  const verifyPayment = async () => {
    try {
      const response = await axios.post(url + "/api/order/verify", { success, orderId });
      
      if (response.data.success) {
        console.log("Payment verified successfully, redirecting to /myorders");
        
        // Ensure redirect only happens on the client-side URL
        if (window.location.origin === "http://localhost:5173") {
          navigate("/myorders");
        } else {
          console.error("Unexpected URL, check routing configuration.");
        }
      } else {
        console.log("Payment failed, redirecting to home page");
        navigate("/");
      }
    } catch (error) {
      console.error("Error verifying payment:", error);
      navigate("/");
    }
  };

  useEffect(() => {
    verifyPayment();
  }, []);

  return (
    <div className='verify'>
      <div className="spinner"></div>
    </div>
  );
}

export default Verify;
