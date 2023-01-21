import { useState, useEffect } from "react"
import { FaUser } from "react-icons/fa"; 
import { toast } from "react-toastify";
import { useSelector, useDispatch } from 'react-redux'; 
import "react-toastify/dist/ReactToastify.css";
import {register, reset} from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();

    if(password != password2) {
      toast.error('Passwords do not match')
    } else {
      const userData = { 
        name, 
        email, 
        password
      }

      dispatch(register(userData));

    }
  }

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState, 
      [e.target.name]: e.target.value 
    }))
  }

  const {name, email, password, password2} = formData;
  
  const dispatch = useDispatch();
  const {user, isLoading, isSuccess, isError, message} = useSelector((state) => state.auth);

  useEffect(() => {
    if(isError) {
      toast.error(message);
    }

    // Redirect when logged in 
    if(isSuccess && user) {
      navigate('/');
    }

    dispatch(reset());
  }, [isError, isSuccess, user, message, navigate, dispatch]);

  return (
    <>
      <section className="heading">
        <h1>
          <FaUser /> Register 
        </h1>
        <p>Please create an account</p>
      </section>

      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input type="text" className="form-control" id='name' name='name' value={name} onChange={onChange} required placeholder='Enter your name'/>
          </div>
          <div className="form-group">
            <input type="email" className="form-control" id='email' name='email' value={email} onChange={onChange} required placeholder='Enter your email'/>
          </div>
          <div className="form-group">
            <input type="password" className="form-control" id='password' name='password' value={password} onChange={onChange} required placeholder='Enter your password'/>
          </div>
          <div className="form-group">
            <input type="password" className="form-control" id='password2' name='password2' value={password2} onChange={onChange} required  placeholder='Confirm password'/>
          </div>
          <div className="form-group">
            <button type='submit' className="btn btn-block">Submit</button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Register