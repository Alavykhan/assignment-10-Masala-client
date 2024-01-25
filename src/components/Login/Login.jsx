import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from '../../provider/AuthProvider';

const Login = () => {
  const {signIn} = useContext(AuthContext)

  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleLogin = event=>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    // password validation
    if(!/(?=.*[A-Z]).*$/.test(password)){
      setError('your password need a capital latter')
      return 
    }else if(!/(?=.*[0-9]).*$/.test(password)){
      setError('your password needs a number')
      return
    }else if(!/(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/.test(password)){
      setError('your password needs a special character')
      return
    }else if(password.length<6){
      setError('your password should be at least 6 characters')
      return
    }

  // firebase login 
    signIn(email, password)
    .then(result=>{
      const signedIn = result.user;
      setError('')
      console.log(signedIn);
      setSuccess('successfully sign in')
      form.reset()
    })
    .catch(error=>{
      setError(error.message)
      console.log(error);
    })
  }
    return (
        <div className='login'>
        <div className="login-img flex justify-center items-center">
        <div className="card shrink-0 w-full sm:w-25% max-w-sm shadow-2xl p-4 bg-base-100">
        <form onSubmit={handleLogin} className="card-body">
          <h2 className='md:text-2xl font-bold'>Please Login</h2>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
          <p className='mb-4'>Don't have an account? Please <Link className='text-primary font-bold' to='/register'>Register</Link></p>
          <button className="btn btn-outline btn-primary"><FaGoogle /> Login with Google</button>
          <button className="btn btn-outline"><FaGithub /> Login with Github</button>
        </form>
          <p className='text-red-500'>{error}</p>
          <p className='text-green-400'>{success}</p>
      </div>
        </div>
    </div>
    );
};

export default Login;