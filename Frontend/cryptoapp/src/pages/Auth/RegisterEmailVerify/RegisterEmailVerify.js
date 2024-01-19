import { useParams } from 'react-router-dom'
import './RegisterEmailVerify.css'
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
export default function RegisterEmailVerify()
{
    const [youremail, setyouremailEmail] = useState('');  
    const {email} =useParams();
    const navigate = useNavigate();
    function handleResendVerification()
    {
      console.log("email verified");
      navigate('/email-verify')
     
    }
    useEffect(() => {
      
      setyouremailEmail(email);
    
  
      return () => {
      };
    }, [youremail]);
   
    return(
        <div className="emailcontainer">
            <div className="emailcard">
                <img src="./email.svg" alt="email icon"/>
                <h3>Email Verification</h3>
                <p>We have sent you an email verification to 
                 <b> {youremail}. </b> If you didn’t receive it, click the button below.</p>
                 <button onClick={handleResendVerification}>Verify Email</button>
            </div>
        </div>
    )
}