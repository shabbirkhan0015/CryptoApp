import { Link , useNavigate} from 'react-router-dom';
import './Signup.css'
import { useState } from 'react';
import { signUpUser } from '../../../api/query/userQuery';


export default function Signup(){
    const navigate = useNavigate();
    const [error , setError] =useState(null);
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      });
      const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await signUpUser(user.firstName, user.lastName, user.email, user.password);
            setError(null); 
            navigate(`/register-email-verify/${user.email}`);
        }
        catch(error)
        {
            const errorMessage = error.error.response?.data || 'Unknown error';
            console.log(errorMessage)
            //setError(error)
        }
      };
      const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
          ...prevUser,
          [name]: value,
        }));
      };
   
    return(
        <div className='containerforcenter'>
            <div className="signup-container">
                <h1>Welcome to Crypto App</h1>
                <p>Create a free account by filling data below.</p>
                <form className='signupform' onSubmit={handleSubmit} >
                    <div className='namecontainer'>
                        <div className='name'>
                            <label htmlFor="name">First Name</label>
                            <input
                                type="text"
                                id="name"
                                name="firstName"
                                required
                                placeholder="Your first name.."
                                value={user.firstName}
                                onChange={handleChange}
                            />
                        </div>
                        <div  className='name'>
                            <label htmlFor="lname">Last Name</label>
                            <input
                                type="text"
                                id="lname"
                                name="lastName"
                                required
                                placeholder="Your last name.."
                                value={user.lastName}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            required
                            placeholder="Email.."
                            value={user.email}
                            onChange={handleChange}
                            />
                </div>
                    <div>
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                required
                                placeholder="Password.."
                                value={user.password}
                                onChange={handleChange}
                                />
                     </div>
                    <div className='checkboxdiv1'>
                            <input type='checkbox' required/>
                            <span className='checkbox-label'>Agree to all terms and conditions</span>
                    </div>
                    <button className='createaccontbtn'>Create Account</button>
                  
                </form>
                    <p>Already have an account? 
                        <Link to="/signin">Login</Link>
                    </p>         
                    {error && <div style={{ color: 'red' }}>{error}</div>}                
            </div>     
        </div> 
    )
}