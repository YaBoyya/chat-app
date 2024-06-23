import { ChangeEvent, FormEvent, useState } from 'react'
import './Register.css'

function Register() {
  const initialState = {
    username: "",
    password: "",
  }
  const [registerData, setRegisterData] = useState(initialState);

  const handleRegisterFormChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const {name, value} = e.target;
    setRegisterData((prev) => ({...prev, [name]: value}));
  }

  function submitRegisterForm(e: FormEvent): void {
    e.preventDefault();
    setRegisterData(initialState);
  }

  return (
    <>
      <form className="register-form" onSubmit={(e) => submitRegisterForm(e)}>
      <div className='input-block'>
        <label>Username:</label>
        <input
          name="username"
          type="text"
          value={registerData.username}
          onChange={handleRegisterFormChange}
        ></input>
      </div>
      <div className='input-block'>
        <label>Password:</label>
        <input
          name="password"
          type="password"
          value={registerData.password}
          onChange={handleRegisterFormChange}
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
