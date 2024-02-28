import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import logo from '../../assets/logos/Logo Wordmark.png';
import axios from 'axios';

// export default function LandingPage({ options, handleDataViewData, addToCart, cart, removeCartItem }) {
export default function ConfirmEmailPage({ emailAddress }) {

  // const { emailAddress } = useParams();


  const [isLoading, setIsLoading] = useState(false);
  const [responseData, setResponseData] = useState([]);

  useEffect(() => {
    handleConfirmEmail();
  }, []);


  const handleConfirmEmail = async () => {    
    //alert("token: " + token + "\n\n" + "uid: " + uid);
    setIsLoading(true);
    try {

      const requestData = {
        email: emailAddress,
      }

      const response = await axios.post('http://144.149.167.72.host.secureserver.net:3000/api/v1/auth/confirm-email', requestData, {
        headers: {
          "Content-Type": "application/json",
          //Authorization: `Bearer ${token}`,
        },
      });

      setIsLoading(false);
      alert(JSON.stringify(response.data, null, 2));

      if (response.data.success) {
        //alert("dashboard-products " + JSON.stringify(response.data, null, 2));
      
        // Store the retrieved data in state variables

        setResponseData(response.data);
      } else {
        //alert("error: " + response.data.message);
        setResponseData([]);
      }

    } catch (error) {
      setIsLoading(false);
      //alert("error: " + error);
    }
  };


  return (
    <div>
      {responseData.message}
    </div>
  );
}
