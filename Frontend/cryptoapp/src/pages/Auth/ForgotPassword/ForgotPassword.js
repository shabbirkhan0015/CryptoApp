import './ForgotPassword.css'
import { useState } from 'react';
import { Link , useNavigate} from 'react-router-dom';
export default function ForgotPassword()
{     

      const navigate = useNavigate();
      const handleSubmit = (e) => {
        e.preventDefault();

        const enterEmail=e.target.email.value;

        navigate(`/forgot-password-verify/${enterEmail}`);
        
      };
      
    return (
        <div className="forgotpasswordcontainer">
            <div className='passwordcontainer'>
                <div className="forgotpasswordheading">
                    <Link to="/signin"><img src='Left.svg' alt='left arrow'/></Link>
                    <h1>Forgot Password</h1>
                    <p>Enter your email address for which account you want to reset your password.</p>
                </div>
                <form className='emailformcontainer' onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                placeholder="Email.."
                                required
                                // value={enterEmail}
                                // onChange={handleChange}
                                />
                        </div>
                       <button type="submit" className='loginbtn'>Reset Password</button>
                        
                </form>

            </div>
        </div>
    )
}