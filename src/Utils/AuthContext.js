import React, { useState,useEffect } from "react"
const AuthContext = React.createContext({
    isLoggedIn:false,
    showForm:false,
    onLogout:()=>{},
    onLogin:(userName,password)=>{},
    openForm:()=>{},
    closeForm:()=>{}
});
export default AuthContext;

export const AuthContextProvider = (props)=>{
    const [isLoggedIn,setIsLoggedIn]=useState(false);
    const [showForm,setShowForm]=useState(false);
    const logoutHandler =()=>{
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
    }
    const loginHandler=(userName,password)=>{
        localStorage.setItem('isLoggedIn','1');
        setIsLoggedIn(true);
    }
    const showFormHandler=()=>{
        setShowForm(true);
    }
    const closeFormHandler=()=>{
        setShowForm(false);
    }
    useEffect(()=>{
        const logginInfo = localStorage.getItem('isLoggedIn');
        if (logginInfo==='1'){
          setIsLoggedIn(true);
        }
      },[])
    return(
        <AuthContext.Provider value={{
            isLoggedIn:isLoggedIn,
            showForm:showForm,
            onLogout:logoutHandler,
            onLogin:loginHandler,
            openForm:showFormHandler,
            closeForm:closeFormHandler}}>
                {props.children}
        </AuthContext.Provider>
    )
} 