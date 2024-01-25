import React, { useContext, useState } from 'react';
import './register.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';


const Register = () => {
  const {createUser}= useContext(AuthContext);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');


  const handleRegister=event=>{
    event.preventDefault();
    
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    console.log(name, email, password, confirm);

    // validation
    if(!/(?=.*[0-9]).*$/.test(password)){
      setError('your password need a number')
      return
    }else if(!/(?=.*[A-Z]).*$/.test(password)){
      setError('your password need a capital latter')
      return
    }else if(!/(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/.test(password)){
      setError('your password need one special character')
      return
    } else if(password.length<6){
      setError('your password should have at least 6 characters')
    }else if(!(password === confirm)){
      setError('your password are not matched!')
      return
    }

    createUser(email, password)
    .then(result=>{
      const userCreated = result.user;
      console.log(userCreated);
      setError('')
      form.reset();
      setSuccess('successfully register')
    })
    .catch(error=>{
      setError(error.message)
      console.log(error);
    })

  }

    return (
        <div className='register'>
            <div className="register-img flex justify-center items-center">
            <div className="card shrink-0 w-full sm:w-25% max-w-sm shadow-2xl p-4 bg-base-100">
      <form onSubmit={handleRegister} className="card-body">
        <h2 className='md:text-2xl font-bold'>Please Register</h2>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" name='name' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input type="password" placeholder="password" name='confirm' className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
        <p>Already have an account? Please <Link className='text-primary font-bold' to='/login'>Login</Link></p>
      </form>
      <p className='text-red-500'>{error}</p>
          <p className='text-green-400'>{success}</p>
    </div>
            </div>
        </div>
    );
};

export default Register;