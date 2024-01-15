import React from 'react';
import { Link } from 'react-router-dom';
import './login.css';
const Login = () => {
    return (
        <div className='login'>
        <div className="login-img flex justify-center items-center">
        <div className="card shrink-0 w-full sm:w-25% max-w-sm shadow-2xl p-4 bg-base-100">
  <form className="card-body">
    <h2 className='md:text-2xl font-bold'>Please Login</h2>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Email</span>
      </label>
      <input type="email" placeholder="email" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Password</span>
      </label>
      <input type="password" placeholder="password" className="input input-bordered" required />
    </div>
    <div className="form-control mt-6">
      <button className="btn btn-primary">Login</button>
    </div>
    <p>Don't have an account? Please <Link className='text-primary font-bold' to='/register'>Register</Link></p>
  </form>
</div>
        </div>
    </div>
    );
};

export default Login;