import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import "./SignUp.css"

export default function SignUp() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });

  };

  const handleSumbit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Password not matching");
      return;
    }

    if (!formData.fullName || !formData.email || !formData.password || !formData.confirmPassword) {
      setError('Please fill in all fields');
      return;
    }

    // setLoading(true);

    //   try{
    //     const res = await fetch('api/auth/signup',{
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify(formData),
    //     })
    //     const data = await res.json();
    //     if(data.success == false){
    //       setError(data.message);

    //       return;
    //     }

    //     navigate('/sign-in')
    //   }catch(e){

    //     setError(e.message);
    //   }

  }

  return (
    <div className='signUpContainer'>

      <h1 className='signUpTitle'>Sign Up</h1>

      <form onSubmit={handleSumbit} className='signUpForm'>

        <label>Full Name: </label>
        <input type="text" placeholder='Enter your Name here' id='fullName'
          onChange={handleChange}
          className='signUpInput' />

        <label>Email: </label>
        <input type="email" placeholder='Enter your Email here' id='email'
          onChange={handleChange}
          className='signUpInput' />

        <label>Password: </label>
        <input type="password" placeholder='Enter password' id='password'
          onChange={handleChange}
          className='signUpInput' />

        <label>Confirm Password: </label>
        <input type="password" placeholder='Confirm Your password' id='confirmPassword'
          onChange={handleChange}
          className='signUpInput' />

        <button disabled={loading} className='signUpButton'>{loading ? 'Loading....' : 'Sign Up'}</button>
        {/* <OAuth /> */}  
      </form>

      <hr className='signUpHr' /> {/* Horizontal line */}

      <div className='signUpLink'>
        <p>Already have an account?</p>

        <Link to={"/sigin"} className='signUpLinkText'>
          Sign In
        </Link>
      </div>

      {error && <p className='signUpError'>{error}</p>}
    </div>
  )
}
