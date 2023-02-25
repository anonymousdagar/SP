import { useRef,useContext} from "react";
import AuthContext from "../../../Utils/AuthContext";
import styles from "./LoginForm.module.css";

const LoginForm = (props) => {
  const ctx =useContext(AuthContext);
  const userNameRef = useRef();
  const passwordRef = useRef();

  const submitHandler = () => {
    ctx.onLogin(userNameRef,passwordRef);
  };
  return (
    <div className={styles.mainContainer}>
        <div className={styles.subContainer}><h2>SP Transport Pvt Lmt.</h2></div>
        <div className={styles.subContainer}><div className={styles.container}>
        <div className={styles.header}>Sign Up Form</div>
        <div className={styles.form}>
          <div>
            <label>UserName</label>
            <input type="text" ref={userNameRef}></input>
          </div>
          <div>
            <label>Password</label>
            <input type="password" ref={passwordRef}></input>
          </div>
          <div>
            <button type="submit" onClick={submitHandler}>SignIn</button>
          </div>
        </div>
      </div></div>
      
      </div>
  );
};

export default LoginForm;
