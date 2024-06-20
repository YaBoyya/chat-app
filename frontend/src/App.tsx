import { ChangeEvent, useState } from 'react'
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

  function submitRegisterForm(e: any): void {
    e.preventDefault();
    e.stopPropagation()
    setRegisterData(initialState);
  }

  // TODO Fix form submitting and update css
  return (
    <form>
      <label>Username:</label>
      <input
        name="username"
        type="text"
        value={registerData.username}
        onChange={handleRegisterFormChange}
      ></input>
      <label>Email:</label>
      <input
        name="email"
        type="text"
        value={registerData.email}
        onChange={handleRegisterFormChange}
        ></input>
      <label>Password:</label>
      <input
        name="password"
        type="password"
        value={registerData.password}
        onChange={handleRegisterFormChange}
        ></input>
      <label>Confirm password:</label>
      <input
        name="confirmPassword"
        type="password"
        value={registerData.confirmPassword}
        onChange={handleRegisterFormChange}
        ></input>
      <button onClick={() => submitRegisterForm}>Register</button>
    </form>
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
