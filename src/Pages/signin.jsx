import { useState } from "react";
// import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import "./SignIn.css"
// import { signInStart, signInSuccess, signInFailure } from '../redux/seller/sellerSlice';

// import OAuth from "../components/OAuth";

export default function SignIn() {

  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);


  //   const { loading, error } = useSelector((state) => state.seller);

  const navigate = useNavigate();
  //   const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });

  };

  const handleSumbit = async (e) => {

    e.preventDefault();

    if (!formData.email || !formData.password) {
      // dispatch(signInFailure("Fill all values"));
      setError("all fields are req.")
      return;
    }

    // try{
    //   dispatch(signInStart());
    //   const res = await fetch('api/auth/signin',{
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(formData),
    //   })
    //   const data = await res.json();
    //   if(data.success == false){
    //     dispatch(signInFailure(data.message));
    //     return;
    //   }
    //   console.log(data);
    //   dispatch(signInSuccess(data));
    //   navigate('/')
    // }catch(error){
    //   dispatch(signInFailure(error.message));
    // }

  }

  return (
    <div className='signInContainer'>
      
      <h1 className='signInTitle'>Sign In</h1>

      <form onSubmit={handleSumbit} className='signInForm'> 
        
        <label>Email: </label>
        <input type="email" placeholder='Enter your Email here' id='email' 
          onChange={handleChange}
          className='signInInput' />

        <label>Password: </label>
        <input type="password" placeholder='password' id='password' 
          onChange={handleChange}
          className='signInInput' />

        <button className='signInButton'>Sign In</button>
        {/* <OAuth /> */} 
      </form>

      <div className='signInLink'>
        <p>Dont't have an account?</p>
        <Link to={"/signup"} className='signInLinkText'>
          Sign up
        </Link>
      </div>

      {error && <p className='signInError'>{error}</p>}
    </div>
  )
}
