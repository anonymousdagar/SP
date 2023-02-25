import {useContext } from 'react';
import './App.css';
import LoginForm from './Components/Forms/LoginForm/LoginForm';
import HomePage from './Components/Home/HomePage';
import AuthContext from './Utils/AuthContext';

function App() {
  const ctx = useContext(AuthContext)
  return (
    <div className='app'>
      {!ctx.isLoggedIn && <LoginForm/>}
      {ctx.isLoggedIn && <HomePage/>}
    </div>
  );
}

export default App;
