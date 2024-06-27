import { ChangeEvent, FormEvent, useState } from 'react'
import './Register.css'

function Register() {
  const initialState = {
    username: "",
    password: "",
  }
  const [loginData, setLoginData] = useState(initialState);

  const handleLoginFormChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const {name, value} = e.target;
    setLoginData((prev) => ({...prev, [name]: value}));
  }

  function submitLoginForm(e: FormEvent): void {
    e.preventDefault();
    setLoginData(initialState);
  }

  return (
    <>
      <form className="register-form" onSubmit={(e) => submitLoginForm(e)}>
      <div className='input-block'>
        <label>Username:</label>
        <input
          name="username"
          type="text"
          value={loginData.username}
          onChange={handleLoginFormChange}
        ></input>
      </div>
      <div className='input-block'>
        <label>Password:</label>
        <input
          name="password"
          type="password"
          value={loginData.password}
          onChange={handleLoginFormChange}
        ></input>
      </div>
      <small>Don't have an account yet? <a href="/register">Register</a></small>
      <div className='button-block'>
        <button type="submit">Login</button>
      </div>  
    </form>
    </>
  )
}

export default Register
