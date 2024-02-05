import { Link } from "react-router-dom";
import FormBtn from "../../components/formBtn/FormBtn";
import loginStyle from "./Login.module.css";

const Login = () => {
  return (
    <div className={loginStyle.form_container}>
      <h1 className={loginStyle.form_heading}>LOG IN</h1>
      <form>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" placeholder="Email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input id="password" type="password" placeholder="Password" />
        </div>
        <div className={loginStyle.btn_container}><FormBtn text="Login"/></div>
      </form>
      <p className={loginStyle.signup_question}>Don't have a account? <span><Link to='/signIn'>Sign In</Link></span></p>
    </div>
  );
};

export default Login;
