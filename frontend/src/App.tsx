import { ChangeEvent, FormEvent, useState } from 'react'
import './App.css'

function Register() {
  const initialState = {
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
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
        <label>Email:</label>
        <input
          name="email"
          type="text"
          value={registerData.email}
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
      <div className='input-block'>
        <label>Confirm password:</label>
        <input
          name="confirmPassword"
          type="password"
          value={registerData.confirmPassword}
          onChange={handleRegisterFormChange}
        ></input>
      </div>
      <div className='button-block'>
        <button type="submit">Register</button>
      </div>  
    </form>
    </>
  )
}

function App() {
  return (
    <>
      <Register />
    </>
  )
}

export default App
