import {useContext, useEffect, useState } from 'react';
import { db } from './Utils/firebase';
import { uid } from 'uid';
import './App.css';
import LoginForm from './Components/Forms/LoginForm/LoginForm';
import HomePage from './Components/Home/HomePage';
import AuthContext from './Utils/AuthContext';

function App() {
  const ctx = useContext(AuthContext);
  // const [rcdata,setRcData]=useState([]);
  // const [plantdata,setPlantData]=useState([]);
  // const fetchData = async(docLib) => {
  //       const response = await fetch(
  //         `https://sptransport-9abec-default-rtdb.asia-southeast1.firebasedatabase.app/${docLib}.json`
  //       );
  //       const json = await response.json();
  //       const values = Object.values(json);
  //       const keys = Object.keys(json);
  //       const newData = values.map((value,index) => {return{...value,id:keys[index]}})
  //       return newData;
  //     }
  // useEffect(()=>{
  //     fetchData("RateChart").then((res)=>setRcData(res));
  //     fetchData("Plants").then((res)=>setPlantData(res));
  // },[]);
  
  return (
   
    <div className='app'>
      {!ctx.isLoggedIn && <LoginForm/>}
      {ctx.isLoggedIn && <HomePage/>}
    </div>
  );
}

export default App;
