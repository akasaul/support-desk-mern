import { useState } from "react"
import { FaSignInAlt } from "react-icons/fa"; 
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../features/auth/authSlice";

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const {user, isLoading, isSuccess, message} = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email,
      password
    }
    dispatch(login(userData));
  }

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState, 
      [e.target.name]: e.target.value 
    }))
  }

  const { email, password } = formData;
  return (
    <>
      <section className="heading">
        <h1>
          <FaSignInAlt /> Login
        </h1>
        <p>Please Login to get support</p>
      </section>

      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input type="email" className="form-control" id='email' name='email' value={email} onChange={onChange} required placeholder='Enter your email'/>
          </div>
          <div className="form-group">
            <input type="password" className="form-control" id='password' name='password' value={password} onChange={onChange} required placeholder='Enter your password'/>
          </div>
          <div className="form-group">
            <button type='submit' className="btn btn-block">Submit</button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Login